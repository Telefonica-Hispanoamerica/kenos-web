/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '@hooks/hooks';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconCloudDistributionFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.32 15.57c-.692 0-1.282.466-1.561 1.069h-4.19c-.173-.393-.452-.75-.864-.928V14.14h3.462c2.288 0 4.159-1.929 4.159-4.32 0-2.32-1.942-4.286-4.225-4.318C15.72 3.504 14.02 2 11.978 2 9.934 2 8.236 3.5 7.855 5.5c-2.288.037-4.159 1.966-4.159 4.32s1.871 4.319 4.19 4.319h3.431v1.609a1.774 1.774 0 00-.864.89H6.294c-.275-.644-.864-1.069-1.56-1.069-.936 0-1.734.823-1.734 1.787 0 .713.452 1.321 1.037 1.61v2.321c0 .393.31.713.692.713.381 0 .692-.32.692-.713v-2.322c.38-.178.691-.498.864-.891h4.19c.173.393.483.713.833.891v2.322c0 .393.31.713.692.713.381 0 .691-.32.691-.713v-2.322c.382-.178.692-.498.865-.891h4.19c.173.393.483.713.833.891v2.322c0 .393.31.713.692.713.38 0 .691-.32.691-.713v-2.322A1.715 1.715 0 0021 17.357c.017-.965-.745-1.787-1.68-1.787z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.057 15.281v1.849c1.277.255 1.767 1.308 1.784 2.23v.181c-.017 1.06-.655 2.3-2.417 2.3-1.762 0-2.392-1.232-2.4-2.286a.835.835 0 01-.003-.137l.002-.058c.017-.914.515-1.975 1.787-2.23v-1.233H5.186v1.224c1.28.264 1.778 1.317 1.795 2.239v.181c-.017 1.06-.664 2.3-2.417 2.3-1.762 0-2.392-1.232-2.41-2.286v-.195c.026-.914.516-1.967 1.785-2.23l-.008-1.84a.654.654 0 01.185-.446.619.619 0 01.44-.182h6.8c-.002-.013-.006-.026-.01-.04a.34.34 0 01-.015-.092v-.921l-3.571.017c-1.67 0-3.614-.928-3.614-3.56 0-2 1.082-2.86 1.961-3.233.177-3.446 2.933-4.678 5.308-4.678.667 0 3.922.157 4.983 2.978 1.888.204 3.757 1.389 3.757 4.201 0 3.143-2.345 4.252-4.345 4.252l-3.232.017v.93c0 .04-.01.077-.02.113l-.005.019h6.88c.34 0 .62.274.624.616zm-14.322 4.1c-.009-.492-.224-1.083-1.163-1.083-.947 0-1.154.6-1.17 1.092v.149c.008.706.397 1.067 1.162 1.067.762 0 1.154-.37 1.17-1.084v-.14zm14.86.14s0-.14.002-.14c-.008-.484-.215-1.058-1.123-1.075h-.081c-.908.014-1.115.6-1.123 1.084v.149c0 .706.389 1.067 1.154 1.067.764 0 1.162-.37 1.17-1.084z"
                />
            </svg>
        );
    }
};

export default IconCloudDistributionFilled;
