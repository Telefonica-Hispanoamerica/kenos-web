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

const IconPauseFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.72 6.13c0-.891-.714-1.63-1.61-1.63A1.62 1.62 0 006.5 6.13v11.74c0 .891.713 1.63 1.61 1.63.892 0 1.61-.728 1.61-1.622V6.129zm7.78 0a1.62 1.62 0 00-1.61-1.63c-.896 0-1.61.739-1.61 1.63v11.74c0 .891.714 1.63 1.61 1.63.892 0 1.61-.728 1.61-1.622V6.129z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M6.75 3C5.784 3 5 3.806 5 4.8v14.4c0 .994.784 1.8 1.75 1.8s1.75-.806 1.75-1.8V4.8c0-.994-.784-1.8-1.75-1.8zm10.5 0c-.966 0-1.75.806-1.75 1.8v14.4c0 .994.784 1.8 1.75 1.8S19 20.194 19 19.2V4.8c0-.994-.784-1.8-1.75-1.8z"
                />
            </svg>
        );
    }
};

export default IconPauseFilled;
