/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';
import {useTheme} from '@hooks/hooks';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconInformationUserRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12 3.355c-4.606 0-8.645 4.04-8.645 8.645 0 4.606 4.04 8.645 8.645 8.645 4.605 0 8.645-4.04 8.645-8.645 0-4.605-4.04-8.645-8.645-8.645zM12 22C6.673 22 2 17.327 2 12S6.673 2 12 2s10 4.673 10 10-4.673 10-10 10zm.007-15.861a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zm-.685 5.013h1.355v6.78h-1.355v-6.78z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12 17.356a.718.718 0 01-.716-.716V9.856c0-.392.32-.716.716-.716.392 0 .716.32.716.716v6.784a.718.718 0 01-.716.716zm0-9.284a.892.892 0 100-1.784.892.892 0 000 1.784z"
                />
                <path
                    fill={fillColor}
                    d="M2 12c0 5.5 4.5 10 10 10s10-4.5 10-10S17.5 2 12 2 2 6.5 2 12zm1.428 0c0-4.716 3.856-8.572 8.572-8.572 4.716 0 8.572 3.856 8.572 8.572 0 4.716-3.856 8.572-8.572 8.572-4.716 0-8.572-3.856-8.572-8.572z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M23 12.034C23 1.833 14.714 1.031 12.504 1c-.335 0-.673 0-1.008.006C9.396 1.044 1 1.833 1 11.97c0 10.117 8.386 10.968 10.543 11.019.254.009.548.012.83.012h.21C14.788 22.981 23 22.224 23 12.034zm-1.374 0c0 8.584-6.333 9.567-9.056 9.592 0 0-.197 0-.197-.003-.273 0-.555-.004-.799-.01-2.767-.066-9.2-1.14-9.2-9.644 0-8.502 6.395-9.538 9.147-9.589.32-.006.642-.006.961-.003 2.752.038 9.144 1.058 9.144 9.657zm-9.62-2.77c.379 0 .689.307.689.689v7.15a.689.689 0 11-1.377 0v-7.15a.69.69 0 01.688-.689zM12.77 7.6a.73.73 0 00-.758-.708.74.74 0 00-.71.708.736.736 0 00.707.757h.054a.73.73 0 00.707-.757z"
                />
            </svg>
        );
    }
};

export default IconInformationUserRegular;