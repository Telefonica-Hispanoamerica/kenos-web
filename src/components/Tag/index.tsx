import * as React from 'react';
import * as classes from './index.css';
import classNames from 'classnames';
import Box from '@layout/Box/box';
import {vars} from '@skins/skin-contract.css';
import {Text} from '@components/Text';
import {pxToRem} from '@utils/css';
import {sprinkles} from '@utils/sprinkles.css';
import {getPrefixedDataAttributes} from '@utils/dom';
import type {DataAttributes, IconProps} from '@utils/types';
import {ThemeVariant, useIsInverseVariant} from '@utils/theme-variant-context';

export type TagType =
    | 'promo_1'
    | 'promo_1_high'
    | 'promo_2'
    | 'promo_2_high'
    | 'active'
    | 'active_high'
    | 'inactive'
    | 'inactive_high'
    | 'success'
    | 'success_high'
    | 'warning'
    | 'warning_high'
    | 'error'
    | 'error_high';

export type TagProps = {
    // not using "TagType" and repeating the union to make these props playroom autocomplete friendly
    type?:
        | 'promo_1'
        | 'promo_1_high'
        | 'promo_2'
        | 'promo_2_high'
        | 'active'
        | 'active_high'
        | 'inactive'
        | 'inactive_high'
        | 'success'
        | 'success_high'
        | 'warning'
        | 'warning_high'
        | 'error'
        | 'error_high';
    children: string;
    Icon?: React.FC<IconProps>;
    dataAttributes?: DataAttributes;
};

const {colors, rawColors} = vars;

const Tag: React.FC<TagProps> = ({Icon, children, dataAttributes, type = 'promo_1'}) => {
    const isInverse = useIsInverseVariant();

    if (!children) {
        return null;
    }

    console.log('COLORS', colors);
    console.log('rawColors', rawColors);

    const tagTypeToColors = {
        promo_1: [colors.promoHigh, colors.promoHighInverse, colors.promoLow],
        promo_1_high: [colors.inverse, colors.inverse, colors.promo],
        promo_2: [colors.highlightHigh, colors.highlightHigh, colors.highligtLow],
        promo_2_high: [colors.inverse, colors.inverse, colors.highlight],
        active: [colors.brand, colors.brand, colors.brandLow],
        active_high: [colors.inverse, colors.inverse, colors.brand],
        inactive: [colors.neutralMedium, colors.neutralMediumInverse, colors.neutralLow],
        inactive_high: [colors.inverse, colors.inverse, colors.neutralMedium],
        success: [colors.successHigh, colors.successHighInverse, colors.successLow],
        success_high: [colors.inverse, colors.inverse, colors.success],
        warning: [colors.warningHigh, colors.warningHighInverse, colors.warningLow],
        warning_high: [colors.inverse, colors.inverse, colors.warning],
        error: [colors.errorHigh, colors.errorHighInverse, colors.errorLow],
        error_high: [colors.inverse, colors.inverse, colors.error],
    } as const;

    const [textColor, inverseTextColor, backgroundColor] = tagTypeToColors[type];

    console.log('textColor, inverseTextColor, backgroundColor', [
        textColor,
        inverseTextColor,
        backgroundColor,
    ]);

    return (
        <span
            {...getPrefixedDataAttributes(dataAttributes, 'Tag')}
            className={classNames(
                classes.tag,
                sprinkles({
                    paddingLeft: Icon ? 8 : 12,
                    background: isInverse ? colors.inverse : backgroundColor,
                })
            )}
        >
            {Icon && (
                <Box paddingRight={4}>
                    <Icon
                        color={isInverse ? inverseTextColor : textColor}
                        size={pxToRem(16)}
                        className={sprinkles({display: 'block'})}
                    />
                </Box>
            )}
            <ThemeVariant isInverse={false}>
                <Text
                    color={isInverse ? inverseTextColor : textColor}
                    size={14}
                    lineHeight={20}
                    weight="medium"
                    truncate
                >
                    {children}
                </Text>
            </ThemeVariant>
        </span>
    );
};

export default Tag;
