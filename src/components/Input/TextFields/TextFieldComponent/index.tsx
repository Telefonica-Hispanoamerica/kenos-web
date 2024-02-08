import * as React from 'react';
import * as styles from './index.css';
import classnames from 'classnames';
import { useTheme } from '@hooks/hooks';
import { vars } from '@skins/skin-contract.css';
import { Text1 } from '@components/Text';
import { sprinkles } from '@utils/sprinkles.css';
import { useIsInverseVariant } from '@utils/theme-variant-context';

export type InputState = 'focused' | 'filled' | 'default';

type LabelProps = {
    shrinkLabel?: boolean;
    forId: string;
    inputState: InputState;
    error?: boolean;
    children: string;
    style?: React.CSSProperties;
    optional?: boolean;
};

export const Label: React.FC<LabelProps> = ({
    shrinkLabel,
    forId,
    inputState,
    error,
    children,
    style,
    optional,
}) => {
    const isShrinked = shrinkLabel || inputState === 'focused' || inputState === 'filled';
    const [transitionStyle, setTransitionStyle] = React.useState('initial');
    const {texts} = useTheme();

    // This way we prevent animation when field is filled as initial state
    React.useEffect(() => {
        const tid = setTimeout(() => {
            // Check environment or we will get a warning if this gets executed outside @testing-library/act
            if (process.env.NODE_ENV !== 'test') {
                setTransitionStyle('transform 150ms, width 150ms');
            }
        });
        return () => {
            clearTimeout(tid);
        };
    }, []);

    let color = vars.colors.textSecondary;
    if (error && inputState !== 'default') {
        color = vars.colors.errorHigh;
    } else if (inputState === 'focused') {
        color = vars.colors.textPrimary;
    }

    return (
        <label
            className={classnames(styles.labelContainer, {[styles.shrinked]: isShrinked}, sprinkles({color}))}
            htmlFor={forId}
            style={{...style, transition: transitionStyle}}
        >
            <span className={styles.labelText}>{children}</span>
            {optional ? <span>&nbsp;({texts.formFieldOptionalLabelSuffix})</span> : null}
        </label>
    );
};

type HelperTextProps = {
    leftText?: string;
    rightText?: string;
    error?: boolean;
    children?: void;
};

export const HelperText: React.FC<HelperTextProps> = ({leftText, rightText, error}) => {
    const isInverse = useIsInverseVariant();
    const leftColor = isInverse
        ? vars.colors.textPrimaryInverse
        : error
        ? vars.colors.errorHigh
        : vars.colors.textPrimary;
    const rightColor = isInverse ? vars.colors.textPrimaryInverse : vars.colors.textSecondary;

    return (
        <div className={styles.helperContainer}>
            {leftText && (
                <div className={classnames(styles.helperText, styles.leftText)}>
                    <Text1 color={leftColor} regular as="p">
                        {leftText}
                    </Text1>
                </div>
            )}
            {rightText && (
                <div className={classnames(styles.helperText, styles.rightText)}>
                    <Text1 color={rightColor} regular as="p">
                        {rightText}
                    </Text1>
                </div>
            )}
        </div>
    );
};

type FieldContainerProps = {
    multiline?: boolean;
    disabled?: boolean;
    children: React.ReactNode;
    helperText?: React.ReactNode;
    className?: string;
    fieldRef?: React.RefObject<HTMLDivElement>;
    fullWidth?: boolean;
    readOnly?: boolean;
    inputState: InputState;
    error?: boolean;
};

export const FieldContainer: React.FC<FieldContainerProps> = ({
    multiline,
    disabled,
    children,
    helperText,
    className,
    fieldRef,
    fullWidth,
    readOnly,
    inputState,
    error,
}) => {
    return (
        <div
            className={classnames(styles.fieldContainer, fullWidth ? styles.fullWidth : styles.normalWidth, {
                [styles.disabled]: disabled,
            })}
        >
            <div
                className={classnames(
                    styles.field,
                    multiline ? styles.fieldMulti : styles.fieldSingle,
                    sprinkles({
                        background: readOnly ? vars.colors.neutralLow : vars.colors.backgroundContainer,
                    }),
                    className,
                    sprinkles({
                        border: error && inputState !== 'default' ? 'error': inputState === 'focused' ? 'selected': 'dark',
                    })
                )}
                ref={fieldRef}
            >
                {children}
            </div>
            {helperText}
        </div>
    );
};
