/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconSearchLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.895 21.392c.14.136.14.364-.003.504a.357.357 0 01-.505 0l-6.851-6.852A7.434 7.434 0 019.5 17C5.364 17 2 13.636 2 9.5S5.364 2 9.5 2s7.5 3.364 7.496 7.5c0 .392-.036.788-.108 1.22a.355.355 0 01-.412.292.355.355 0 01-.292-.412c.068-.388.1-.748.1-1.1A6.792 6.792 0 009.5 2.716 6.793 6.793 0 002.716 9.5 6.793 6.793 0 009.5 16.284a6.734 6.734 0 004.792-1.996c.14-.14.364-.14.504 0l7.1 7.104z"
                />
                <path fill={fillColor} d="M15.928 13.432a.716.716 0 100-1.432.716.716 0 000 1.432z" />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.96 17.792a7.809 7.809 0 01-5.523-13.33A7.814 7.814 0 0115.482 4.4a7.806 7.806 0 01.192 10.907l6.085 6.082a.28.28 0 01-.196.479.28.28 0 01-.199-.084L15.278 15.7a7.757 7.757 0 01-5.317 2.091zm0-15.056a7.248 7.248 0 105.124 2.123 7.195 7.195 0 00-5.123-2.123z"
                />
            </svg>
        );
    }
};

export default IconSearchLight;
