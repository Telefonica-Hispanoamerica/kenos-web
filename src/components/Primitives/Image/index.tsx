import * as React from 'react';
import * as styles from './index.css';
import classnames from 'classnames';
import {SkeletonRectangle} from '@components/Skeletons';
import {vars} from '@skins/skin-contract.css';
import {combineRefs} from '@utils/common';
import {sprinkles} from '@utils/sprinkles.css';
import type {DataAttributes} from '@utils/types';
import {getPrefixedDataAttributes} from '@utils/dom';
import {AspectRatioElement} from '@utils/aspect-ratio-support';
import {useIsInverseVariant} from '@utils/theme-variant-context';

/**
 * This context is used internally to disable/enable the border radius. This is useful for example
 * when using the Image component inside a Card or Hero inside a Slideshow
 */
const MediaBorderRadiusContext = React.createContext(true);

export const useMediaBorderRadius = (): boolean => React.useContext(MediaBorderRadiusContext);

export const MediaBorderRadiusProvider = ({
    children,
    value,
}: {
    children: React.ReactNode;
    value: boolean;
}): JSX.Element => (
    <MediaBorderRadiusContext.Provider value={value}>{children}</MediaBorderRadiusContext.Provider>
);

type ImageErrorProps = {
    noBorderRadius?: boolean;
};

const ImageError = ({noBorderRadius}: ImageErrorProps) => {
    const isInverse = useIsInverseVariant();
    return (
        <div
            style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: isInverse
                    ? vars.colors.backgroundSkeletonInverse
                    : vars.colors.backgroundSkeleton,
                borderRadius: noBorderRadius ? undefined : 8,
            }}
        >
            // We cannot use IconImageRegular because we want to avoid the usage of widht and height props to
            allow this icon to be responsive
            <svg viewBox="0 0 24 24" role="presentation" style={{width: '10%', minWidth: 24, maxWidth: 48}}>
                <path
                    fill={isInverse ? vars.colors.inverse : vars.colors.neutralMedium}
                    d="M20.25 4.622c.832 0 1.591.664 1.591 1.393v11.98c0 .728-.76 1.392-1.591 1.392H3.746c-.863 0-1.591-.639-1.591-1.392V6.015c0-.754.728-1.393 1.59-1.393H20.25zm0 13.558c.193 0 .367-.146.39-.207l-.003-11.956a.555.555 0 00-.384-.182H3.746c-.21 0-.364.132-.387.19v11.973c.014.044.171.182.387.182H20.25zM6.152 9.068c0 .554.451 1.005 1.003 1.005a1.006 1.006 0 000-2.01c-.552 0-1.003.45-1.003 1.005zm1.003 2.215a2.216 2.216 0 010-4.43c1.218 0 2.207.993 2.207 2.215a2.213 2.213 0 01-2.207 2.215zm12.42 1.337l-3.18-2.44a.605.605 0 00-.742.005l-3.636 2.9-.879-.83a.6.6 0 00-.798-.025l-5.168 4.317a.607.607 0 00.386 1.07.59.59 0 00.384-.14l4.759-3.975 3.308 3.123c.241.23.625.221.852-.025a.605.605 0 00-.026-.854l-1.932-1.824 3.131-2.496 2.807 2.154a.603.603 0 00.846-.112.609.609 0 00-.112-.848z"
                />
            </svg>
        </div>
    );
};

export type AspectRatio = '1:1' | '16:9' | '7:10' | '4:3';

export const RATIO = {
    '1:1': 1,
    '16:9': 16 / 9,
    '7:10': 7 / 10,
    '4:3': 4 / 3,
};

export type ImageProps = {
    src: string;
    /** defaults to 100% when no width and no height are given */
    width?: string | number;
    height?: string | number;
    /** defaults to 1:1, if both width and height are given, aspectRatio is ignored. To use original image proportions, set aspectRatio to 0  */
    aspectRatio?: AspectRatio | number;
    /** defaults to empty string */
    alt?: string;
    children?: void;
    dataAttributes?: DataAttributes;
    noBorderRadius?: boolean;
    onError?: () => void;
    onLoad?: () => void;
    loadingFallback?: boolean;
    errorFallback?: boolean;
};

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
    (
        {
            aspectRatio = '1:1',
            alt = '',
            dataAttributes,
            noBorderRadius,
            src,
            onError,
            onLoad,
            loadingFallback = true,
            errorFallback = true,
            ...props
        },
        ref
    ) => {
        const imageRef = React.useRef<HTMLImageElement>();
        const borderRadiusContext = useMediaBorderRadius();
        const noBorderSetting = noBorderRadius ?? !borderRadiusContext;
        const [isError, setIsError] = React.useState(false);
        const [isLoading, setIsLoading] = React.useState(true);
        const [hideLoadingFallback, setHideLoadingFallback] = React.useState(false);

        const ratio = typeof aspectRatio === 'number' ? aspectRatio : RATIO[aspectRatio];

        const withLoadingFallback = loadingFallback && !!(ratio !== 0 || (props.width && props.height));
        const withErrorFallback = errorFallback && !!(ratio !== 0 || (props.width && props.height));

        const onLoadHandler = React.useCallback(() => {
            setIsError(false);
            setIsLoading(false);
            setTimeout(() => {
                setHideLoadingFallback(true);
            }, styles.FADE_IN_DURATION_MS);

            onLoad?.();
        }, [onLoad]);

        const img = (
            // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/309
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <img
                {...getPrefixedDataAttributes(dataAttributes)}
                style={{
                    ...(isLoading && withLoadingFallback ? {opacity: 0} : {opacity: 1}),
                }}
                ref={combineRefs(imageRef, ref)}
                src={src}
                className={classnames(
                    styles.image,
                    sprinkles({
                        position: ratio !== 0 ? 'absolute' : 'static',
                        borderRadius: noBorderSetting ? undefined : 8,
                    })
                )}
                alt={alt}
                onError={() => {
                    setIsError(true);
                    setIsLoading(false);
                    setHideLoadingFallback(true);
                    onError?.();
                }}
                onLoad={onLoadHandler}
            />
        );

        React.useEffect(() => {
            // Needed because there is some race condition with SSR and onLoad events
            // https://github.com/facebook/react/issues/15446
            if (imageRef.current?.complete) {
                onLoadHandler();
            }
        }, [onLoadHandler]);

        return (
            <AspectRatioElement
                style={{position: 'relative'}}
                aspectRatio={ratio}
                width={props.width}
                height={props.height}
            >
                {withLoadingFallback && !hideLoadingFallback && (
                    <div style={{position: 'absolute', width: '100%', height: '100%'}}>
                        <SkeletonRectangle
                            width={props.width}
                            height={props.height}
                            noBorderRadius={noBorderSetting}
                        />
                    </div>
                )}
                {isError && withErrorFallback && (
                    <div style={{position: 'absolute', width: '100%', height: '100%'}}>
                        <ImageError noBorderRadius={noBorderSetting} />
                    </div>
                )}
                {!isError && img}
            </AspectRatioElement>
        );
    }
);

export default Image;
