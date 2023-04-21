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

const IconConferenceFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.286 3.968h-8.572V2.897A.716.716 0 0012 2.183a.716.716 0 00-.714.714v1.071H2.714A.716.716 0 002 4.683c0 .392.321.714.714.714h1.072V16.11h6.857l-4.5 4.5a.69.69 0 000 1 .705.705 0 00.5.214.705.705 0 00.5-.214l4.143-4.143v3.643c0 .393.321.714.714.714a.716.716 0 00.714-.714v-3.643l4.143 4.143a.706.706 0 00.5.214.705.705 0 00.5-.214.69.69 0 000-1l-4.5-4.5h6.857V5.397h1.072A.716.716 0 0022 4.682a.716.716 0 00-.714-.714zm-3.893 3.607L12 12.932 9.857 10.79l-2.464 2.464a.537.537 0 01-.393.143.518.518 0 01-.393-.893l3.25-3.25L12 11.397l4.607-4.607a.518.518 0 01.75 0 .599.599 0 01.036.785z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.204 7.404c0-.684-.512-1.235-1.145-1.235V6.16h-2.801v-.67a.426.426 0 00-.112-.29l-.63-.678a.859.859 0 00-.006-1.155l-.9-.969a.74.74 0 00-.54-.24.735.735 0 00-.54.24l-.55.591a.87.87 0 000 1.163l.9.966a.727.727 0 001.081 0l.014-.014.515.558v.498H8.51v-.498l.513-.552.01.011a.727.727 0 001.081 0l.9-.966a.87.87 0 000-1.163l-.546-.59a.74.74 0 00-.54-.242.74.74 0 00-.541.241l-.9.97a.846.846 0 00-.224.582.85.85 0 00.222.58l-.625.672a.426.426 0 00-.112.291v.67H4.941c-.633 0-1.145.552-1.145 1.235v1.093c0 .683.512 1.235 1.145 1.235h.381v.003h13.356v-.003h.38c.634 0 1.146-.552 1.146-1.235v-1.09zM5.322 10.387v.303c0 .68.513 1.235 1.143 1.235H7.62v.003h8.76v-.003h1.153c.633 0 1.146-.555 1.146-1.235v-.303H5.322zM7.62 17.87v-5.286h8.76v5.286H7.62zm11.037 1.89c0-.683-.513-1.235-1.146-1.235h-.835v.003H6.465c-.622.011-1.123.557-1.123 1.233v.857c0 .683.512 1.235 1.146 1.235H17.51c.633 0 1.145-.552 1.145-1.235v-.857z"
                />
            </svg>
        );
    }
};

export default IconConferenceFilled;
