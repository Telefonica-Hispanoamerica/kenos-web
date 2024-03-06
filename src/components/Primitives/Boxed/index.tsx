import * as React from 'react';
import * as styles from './index.css';
import classnames from 'classnames';
import { useTheme } from '@hooks/hooks';
import { vars } from '@skins/skin-contract.css';
import { sprinkles } from '@utils/sprinkles.css';
import type { DataAttributes } from '@utils/types';
import { getPrefixedDataAttributes } from '@utils/dom';
import { ThemeVariant, useIsInverseVariant } from '@utils/theme-variant-context';
import { skinVars } from 'src';

type Props = {
    children: React.ReactNode;
    isInverse?: boolean;
    className?: string;
    role?: string;
    /** "data-" prefix is automatically added. For example, use "testid" instead of "data-testid" */
    dataAttributes?: DataAttributes;
    'aria-label'?: string;
    width?: number | string;
    height?: number | string;
    minHeight?: number | string;
    background?: string;
};

type InternalProps = {
    borderRadius: 8 | 16;
    background?: string;
};

const getBorderStyle = (isInverseOutside: boolean, isInverseInside: boolean) => {
    if (isInverseOutside && !isInverseInside) {
        return styles.inverseBorder;
    }

    if (isInverseInside) {
        return sprinkles({border: 'none'});
    }

    return sprinkles({border: 'regular'});
};

export const InternalBoxed = React.forwardRef<HTMLDivElement, Props & InternalProps>(
    (
        {
            children,
            isInverse: isInverseInside = false,
            className,
            role,
            dataAttributes,
            'aria-label': ariaLabel,
            width,
            height,
            minHeight,
            borderRadius,
            background,
        },
        ref
    ) => {
        const {isDarkMode} = useTheme();
        const isInverseOutside = useIsInverseVariant();

        return (
            <div
                ref={ref}
                style={{width, height, minHeight, boxSizing: 'border-box', background}}
                className={classnames(
                    className,
                    getBorderStyle(isInverseOutside, isInverseInside),
                    sprinkles({
                        borderRadius,
                        overflow: 'hidden',
                        background: !background
                            ? isInverseInside && !isDarkMode
                                ? vars.colors.backgroundBrand
                                : vars.colors.backgroundContainer
                            : undefined,
                    })
                )}
                role={role}
                aria-label={ariaLabel}
                {...getPrefixedDataAttributes(dataAttributes)}
            >
                <ThemeVariant isInverse={isInverseInside}>{children}</ThemeVariant>
            </div>
        );
    }
);

export const Boxed = React.forwardRef<HTMLDivElement, Props>((props, ref) => {
    return <InternalBoxed {...props} ref={ref} borderRadius={8} background={props.background}/>;
});
