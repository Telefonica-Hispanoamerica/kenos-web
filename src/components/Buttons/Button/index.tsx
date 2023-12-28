import * as React from 'react';
import * as styles from './index.css';
import classnames from 'classnames';
import Box from '@layout/Box/box';
import { useTheme } from '@hooks/hooks';
import { flattenChildren } from '@skins/utils';
import { useForm } from '@patterns/Forms/form-context';
import Spinner from '@components/Spinner/';
import { Text, Text2, Text3 } from '@components/Text';
import { BaseTouchable } from '@components/Primitives/Touchable';
import type { TouchableElement } from '@components/Primitives';
import { pxToRem } from '@utils/css';
import { getTextFromChildren } from '@utils/common';
import { useIsInverseVariant } from '@utils/theme-variant-context';
import { eventActions, eventCategories, eventNames, useTrackingConfig } from '@utils/analytics';
import type {
    DataAttributes,
    IconProps,
    RendersElement,
    RendersNullableElement,
    TrackingEvent,
} from '@utils/types';
import type { Location } from 'history';

const renderButtonElement = ({
    content,
    defaultIconSize,
    renderText,
}: {
    content: React.ReactNode;
    defaultIconSize: number;
    renderText: (text: React.ReactNode) => React.ReactNode;
}): React.ReactNode => {
    const childrenArr = flattenChildren(content);
    const length = childrenArr.length;
    const resultChildrenArr: Array<React.ReactNode> = [];
    let accText: Array<React.ReactNode> = [];
    const flushAccText = () => {
        resultChildrenArr.push(
            <React.Fragment key={resultChildrenArr.length}>{renderText(accText)}</React.Fragment>
        );
        accText = [];
    };

    childrenArr.forEach((element, idx) => {
        const isFirstChild = idx === 0;
        const isLastChild = idx === length - 1;

        const isIconElement = React.isValidElement(element);

        if (isIconElement) {
            if (accText.length) {
                flushAccText();
            }
            const sizeInPx = element.props.size ?? defaultIconSize;
            resultChildrenArr.push(
                <div
                    key={resultChildrenArr.length}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: isFirstChild ? 0 : styles.ICON_MARGIN_PX,
                        marginRight: isLastChild ? 0 : styles.ICON_MARGIN_PX,
                    }}
                >
                    {React.cloneElement(element as React.ReactElement<IconProps>, {
                        size: pxToRem(sizeInPx),
                    })}
                </div>
            );
        } else {
            accText.push(element);
            if (isLastChild) {
                flushAccText();
            }
        }
    });
    return resultChildrenArr;
};
const renderButtonContent = ({
    content,
    defaultIconSize,
    renderText,
}: {
    content: React.ReactNode;
    defaultIconSize: number;
    renderText: (text: React.ReactNode) => React.ReactNode;
}): React.ReactNode => {
    const childrenArr = flattenChildren(content);
    const length = childrenArr.length;
    const resultChildrenArr: Array<React.ReactNode> = [];
    let accText: Array<React.ReactNode> = [];
    const flushAccText = () => {
        resultChildrenArr.push(
            <React.Fragment key={resultChildrenArr.length}>{renderText(accText)}</React.Fragment>
        );
        accText = [];
    };

    childrenArr.forEach((element, idx) => {
        const isFirstChild = idx === 0;
        const isLastChild = idx === length - 1;

        const isIconElement = React.isValidElement(element);

        if (isIconElement) {
            if (accText.length) {
                flushAccText();
            }
            const sizeInPx = element.props.size ?? defaultIconSize;
            resultChildrenArr.push(
                <div
                    key={resultChildrenArr.length}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: isFirstChild ? 0 : styles.ICON_MARGIN_PX,
                        marginRight: isLastChild ? 0 : styles.ICON_MARGIN_PX,
                    }}
                >
                    {React.cloneElement(element as React.ReactElement<IconProps>, {
                        size: pxToRem(sizeInPx),
                    })}
                </div>
            );
        } else {
            accText.push(element);
            if (isLastChild) {
                flushAccText();
            }
        }
    });
    return resultChildrenArr;
};

type ButtonType = 'primary' | 'secondary' | 'danger';

interface CommonProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    small?: boolean;
    showSpinner?: boolean;
    loadingText?: string;
    disabled?: boolean;
    rounded?: boolean;
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    trackEvent?: boolean;
    /** "data-" prefix is automatically added. For example, use "testid" instead of "data-testid" */
    dataAttributes?: DataAttributes;
    'aria-controls'?: string;
    'aria-expanded'?: 'true' | 'false';
    tabIndex?: number;
    icon?: React.FC<IconProps>;
    iconPosition?: 'none' | 'left' | 'right';
}

export interface ToButtonProps extends CommonProps {
    to: string | Location;
    fullPageOnWebView?: boolean;
    submit?: undefined;
    fake?: undefined;
    onPress?: undefined;
    href?: undefined;
}
export interface OnPressButtonProps extends CommonProps {
    onPress: (event: React.MouseEvent<HTMLElement>) => void | undefined;
    submit?: undefined;
    fake?: undefined;
    to?: undefined;
    href?: undefined;
}
export interface HrefButtonProps extends CommonProps {
    href: string;
    newTab?: boolean;
    loadOnTop?: boolean;
    submit?: undefined;
    fake?: undefined;
    onPress?: undefined;
    to?: undefined;
}
export interface FakeButtonProps extends CommonProps {
    fake: true;
    submit?: undefined;
    onPress?: undefined;
    to?: undefined;
    href?: undefined;
}
export interface SubmitButtonProps extends CommonProps {
    submit: true;
    to?: undefined;
    fake?: undefined;
    onPress?: undefined;
    href?: undefined;
}

export type ButtonProps =
    | FakeButtonProps
    | SubmitButtonProps
    | ToButtonProps
    | OnPressButtonProps
    | HrefButtonProps;

const Button = React.forwardRef<TouchableElement, ButtonProps & {type: ButtonType}>((props, ref) => {
    const {eventFormat} = useTrackingConfig();
    const {formStatus, formId} = useForm();
    const isInverse = useIsInverseVariant();
    const {loadingText} = props;
    const isSubmitButton = !!props.submit;
    const isFormSending = formStatus === 'sending';
    const Icon = props.icon;
    const IconPosition = props.iconPosition;

    const showSpinner = props.showSpinner || (isFormSending && isSubmitButton);

    // This state is needed to not render the spinner when hidden (because it causes high CPU usage
    // specially in iPhone). But we want the spinner to be visible during the show/hide animation.
    // * When showSpinner prop is true, state is changed immediately.
    // * When the transition ends this state is updated again if needed
    const [shouldRenderSpinner, setShouldRenderSpinner] = React.useState(!!showSpinner);

    React.useEffect(() => {
        if (showSpinner && !shouldRenderSpinner) {
            setShouldRenderSpinner(true);
        }
    }, [showSpinner, shouldRenderSpinner, formStatus]);

    const createDefaultTrackingEvent = (): TrackingEvent => {
        if (eventFormat === 'google-analytics-4') {
            return {
                name: eventNames.userInteraction,
                component_type: `${props.type}_button`,
                component_copy: getTextFromChildren(props.children),
            };
        } else {
            return {
                category: eventCategories.userInteraction,
                action: `${props.type}_button_tapped`,
                label: getTextFromChildren(props.children),
            };
        }
    };

    const defaultIconSize = props.small ? styles.SMALL_ICON_SIZE : styles.ICON_SIZE;
    const spinnerSizeRem = pxToRem(props.small ? styles.SMALL_SPINNER_SIZE : styles.SPINNER_SIZE);

    const renderText = (element: React.ReactNode) =>
        props.small ? (
            <Text size={14} lineHeight={20} weight="medium" truncate={1} color="inherit" as="div">
                {element}
            </Text>
        ) : (
            <Text3 medium truncate={1} color="inherit" as="div">
                {element}
            </Text3>
        );

    const commonProps = {
        ref,
        className: classnames(
            isInverse ? styles.inverseVariants[props.type] : styles.variants[props.type],
            props.className,
            {
                [styles.small]: props.small,
                [styles.isLoading]: showSpinner,
                [styles.buttonRounded]: props.rounded,
            }
        ),
        style: {cursor: props.fake ? 'pointer' : undefined, ...props.style},
        trackingEvent: props.trackingEvent ?? (props.trackEvent ? createDefaultTrackingEvent() : undefined),
        dataAttributes: props.dataAttributes,
        'aria-controls': props['aria-controls'],
        'aria-expanded': props['aria-expanded'],
        tabIndex: props.tabIndex,
        children: (
            <>
                <div aria-hidden={showSpinner ? true : undefined} className={styles.textContent}>
                    {Icon && IconPosition === 'left' && (
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginRight: styles.ICON_MARGIN_PX,
                            }}
                        >
                            <Icon size={defaultIconSize} color="currentColor" />
                        </div>
                    )}
                    {renderButtonContent({
                        content: props.children,
                        defaultIconSize,
                        renderText,
                    })}
                    {Icon && IconPosition === 'right' && (
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginLeft: styles.ICON_MARGIN_PX,
                            }}
                        >
                            <Icon size={defaultIconSize} color="currentColor" />
                        </div>
                    )}
                </div>
                <div
                    className={styles.loadingFiller}
                    aria-hidden
                    style={{
                        paddingLeft: spinnerSizeRem,
                        paddingRight:
                            styles.ICON_MARGIN_PX +
                            2 * (props.small ? styles.X_SMALL_PADDING_PX : styles.X_PADDING_PX),
                    }}
                >
                    {renderButtonContent({content: loadingText, defaultIconSize, renderText})}
                </div>
                <div
                    aria-hidden={showSpinner ? undefined : true}
                    className={styles.loadingContent}
                    onTransitionEnd={() => {
                        if (showSpinner !== shouldRenderSpinner) {
                            setShouldRenderSpinner(showSpinner);
                        }
                    }}
                >
                    {shouldRenderSpinner ? (
                        <Spinner
                            rolePresentation={!!loadingText}
                            color="currentcolor"
                            delay="0s"
                            size={spinnerSizeRem}
                        />
                    ) : (
                        <div
                            style={{
                                display: 'inline-block',
                                width: spinnerSizeRem,
                                height: spinnerSizeRem,
                            }}
                        />
                    )}
                    {loadingText ? (
                        <Box paddingLeft={8}>
                            {renderButtonContent({content: loadingText, defaultIconSize, renderText})}
                        </Box>
                    ) : null}
                </div>
            </>
        ),
        disabled: props.disabled || showSpinner || isFormSending,
        role: 'button',
    };

    if (process.env.NODE_ENV !== 'production') {
        if (props.to === '' || props.href === '') {
            throw Error('to or href props are empty strings');
        }
    }

    if (props.fake) {
        return <BaseTouchable maybe {...commonProps} role="presentation" aria-hidden="true" />;
    }

    if (props.submit) {
        // using empty onPress handler so it gets rendered as a button
        return <BaseTouchable type="submit" formId={formId} onPress={() => {}} {...commonProps} />;
    }

    if (props.onPress) {
        return <BaseTouchable {...commonProps} onPress={props.onPress} />;
    }

    if (props.to || props.to === '') {
        return <BaseTouchable {...commonProps} to={props.to} fullPageOnWebView={props.fullPageOnWebView} />;
    }

    if (props.href || props.href === '') {
        return (
            <BaseTouchable
                {...commonProps}
                href={props.href}
                newTab={props.newTab}
                loadOnTop={props.loadOnTop}
            />
        );
    }

    if (process.env.NODE_ENV !== 'production') {
        // this cannot happen
        throw Error('Bad button props');
    }

    return null;
});

interface ButtonLinkCommonProps {
    children: React.ReactNode;
    disabled?: boolean;
    trackingEvent?: TrackingEvent | ReadonlyArray<TrackingEvent>;
    trackEvent?: boolean;
    /** "data-" prefix is automatically added. For example, use "testid" instead of "data-testid" */
    dataAttributes?: DataAttributes;
    aligned?: boolean;
    rounded?: boolean;
    loadingText?: string;
    showSpinner?: boolean;
    icon?: React.FC<IconProps>;
    iconPosition?: 'none' | 'left' | 'right';
}
interface ButtonLinkOnPressProps extends ButtonLinkCommonProps {
    onPress: (event: React.MouseEvent<HTMLElement>) => void;
    to?: undefined;
    href?: undefined;
}
interface ButtonLinkHrefProps extends ButtonLinkCommonProps {
    href: string;
    newTab?: boolean;
    onPress?: undefined;
    to?: undefined;
}
interface ButtonLinkToProps extends ButtonLinkCommonProps {
    to: string;
    fullPageOnWebView?: boolean;
    onPress?: undefined;
    href?: undefined;
}

export type ButtonLinkProps = ButtonLinkOnPressProps | ButtonLinkHrefProps | ButtonLinkToProps;

export const ButtonLink = React.forwardRef<TouchableElement, ButtonLinkProps>((props, ref) => {
    const {formStatus} = useForm();
    const isInverse = useIsInverseVariant();
    const {analytics} = useTheme();
    const {loadingText} = props;
    const Icon = props.icon;
    const IconPosition = props.iconPosition;
    const isFormSending = formStatus === 'sending';
    const [isOnPressPromiseResolving, setIsOnPressPromiseResolving] = React.useState(false);
    const showSpinner = props.showSpinner || isOnPressPromiseResolving;
    const [shouldRenderSpinner, setShouldRenderSpinner] = React.useState(!!showSpinner);

    React.useEffect(() => {
        if (showSpinner && !shouldRenderSpinner) {
            setShouldRenderSpinner(true);
        }
    }, [showSpinner, shouldRenderSpinner, formStatus]);

    const createDefaultTrackingEvent = (): TrackingEvent => {
        if (analytics.eventFormat === 'google-analytics-4') {
            return {
                name: eventNames.userInteraction,
                component_type: 'link',
                component_copy: getTextFromChildren(props.children),
            };
        } else {
            return {
                category: eventCategories.userInteraction,
                action: eventActions.linkTapped,
                label: getTextFromChildren(props.children),
            };
        }
    };

    const defaultIconSize = styles.SMALL_ICON_SIZE;
    const spinnerSizeRem = pxToRem(styles.SMALL_SPINNER_SIZE);

    const renderText = (element: React.ReactNode) => (
        <Text2 medium truncate={1} color="inherit">
            {element}
        </Text2>
    );

    const commonProps = {
        className: classnames(styles.link, {
            [styles.inverseLink]: isInverse,
            [styles.alignedLink]: props.aligned,
            [styles.buttonRounded]: props.rounded,
            [styles.isLoading]: showSpinner,
        }),
        trackingEvent: props.trackingEvent ?? (props.trackEvent ? createDefaultTrackingEvent() : undefined),
        dataAttributes: {'component-name': 'ButtonLink', ...props.dataAttributes},
        children: (
            <>
                <div aria-hidden={showSpinner ? true : undefined} className={styles.textContentLink}>
                    {Icon && IconPosition === 'left' && (
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginRight: styles.ICON_MARGIN_PX,
                            }}
                        >
                            <Icon size={defaultIconSize} color="currentColor" />
                        </div>
                    )}
                    {renderButtonContent({
                        content: props.children,
                        defaultIconSize: styles.SMALL_ICON_SIZE, // Ajusta según tus necesidades
                        renderText,
                    })}

                    {Icon && IconPosition === 'right' && (
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginLeft: styles.ICON_MARGIN_PX,
                            }}
                        >
                            <Icon size={defaultIconSize} color="currentColor" />
                        </div>
                    )}
                </div>
                <div
                    className={styles.loadingFiller}
                    aria-hidden
                    style={
                        loadingText
                            ? {
                                  paddingLeft: spinnerSizeRem,
                                  paddingRight: styles.ICON_MARGIN_PX + 2 * styles.X_SMALL_PADDING_PX,
                              }
                            : undefined
                    }
                >
                    {renderButtonElement({content: loadingText, defaultIconSize, renderText})}
                </div>
                <div
                    aria-hidden={showSpinner ? undefined : true}
                    className={styles.loadingContent}
                    onTransitionEnd={() => {
                        if (showSpinner !== shouldRenderSpinner) {
                            setShouldRenderSpinner(showSpinner);
                        }
                    }}
                >
                    {shouldRenderSpinner ? (
                        <Spinner
                            rolePresentation={!!loadingText}
                            color="currentcolor"
                            delay="0s"
                            size={styles.SMALL_SPINNER_SIZE}
                        />
                    ) : (
                        <div
                            style={{
                                display: 'inline-block',
                                width: styles.SMALL_SPINNER_SIZE,
                                height: styles.SMALL_SPINNER_SIZE,
                            }}
                        />
                    )}
                    {loadingText ? (
                        <Box paddingLeft={8} className={styles.loadingContentLink}>
                            {renderButtonContent({
                                content: loadingText,
                                defaultIconSize: styles.SMALL_ICON_SIZE,
                                renderText,
                            })}
                        </Box>
                    ) : null}
                </div>
            </>
        ),
        disabled: props.disabled || showSpinner || isFormSending,
    };

    if (process.env.NODE_ENV !== 'production') {
        if (props.to === '' || props.href === '') {
            throw Error('to or href props are empty strings');
        }
    }

    if (props.onPress) {
        return <BaseTouchable ref={ref} {...commonProps} onPress={props.onPress} />;
    }

    if (props.to || props.to === '') {
        return (
            <BaseTouchable
                ref={ref}
                {...commonProps}
                to={props.to}
                fullPageOnWebView={props.fullPageOnWebView}
            />
        );
    }

    if (props.href || props.href === '') {
        return <BaseTouchable ref={ref} {...commonProps} href={props.href} newTab={props.newTab} />;
    }

    if (process.env.NODE_ENV !== 'production') {
        // this cannot happen
        throw Error('Bad button props');
    }

    return null;
});

export const ButtonPrimary = React.forwardRef<TouchableElement, ButtonProps>(
    ({dataAttributes, ...props}, ref) => {
        return (
            <Button
                dataAttributes={{'component-name': 'ButtonPrimary', ...dataAttributes}}
                {...props}
                ref={ref}
                type="primary"
            />
        );
    }
);

export const ButtonSecondary = React.forwardRef<TouchableElement, ButtonProps>(
    ({dataAttributes, ...props}, ref) => {
        return (
            <Button
                dataAttributes={{'component-name': 'ButtonSecondary', ...dataAttributes}}
                {...props}
                ref={ref}
                type="secondary"
            />
        );
    }
);

export const ButtonDanger = React.forwardRef<TouchableElement, ButtonProps>(
    ({dataAttributes, ...props}, ref) => {
        return (
            <Button
                dataAttributes={{'component-name': 'ButtonDanger', ...dataAttributes}}
                {...props}
                ref={ref}
                type="danger"
            />
        );
    }
);

export type ButtonElement =
    | RendersElement<typeof ButtonPrimary>
    | RendersElement<typeof ButtonSecondary>
    | RendersElement<typeof ButtonDanger>;

export type NullableButtonElement =
    | RendersNullableElement<typeof ButtonPrimary>
    | RendersNullableElement<typeof ButtonSecondary>
    | RendersNullableElement<typeof ButtonDanger>;
