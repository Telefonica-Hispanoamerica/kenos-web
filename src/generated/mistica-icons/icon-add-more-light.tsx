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

const IconAddMoreLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.676 4.35a.35.35 0 11.7 0v6.8h4.414a.35.35 0 110 .7h-4.414v6.8a.35.35 0 11-.7 0v-6.8H5.35a.35.35 0 110-.7h6.326v-6.8zm6.752 7.72a.573.573 0 00.572-.574.573.573 0 00-.572-.574.573.573 0 00-.571.574c0 .317.256.574.572.574z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.403 11.402h-7.802V3.599a.6.6 0 00-1.2 0v7.803H3.6a.599.599 0 100 1.199h7.803v7.8a.6.6 0 001.199 0v-7.8h7.8a.6.6 0 00.002-1.2z"
                />
            </svg>
        );
    }
};

export default IconAddMoreLight;
