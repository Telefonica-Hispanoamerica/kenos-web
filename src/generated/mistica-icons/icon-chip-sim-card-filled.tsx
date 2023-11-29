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

const IconChipSimCardFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.546 10.78h6.877c.071 0 .14.108.14.144v7.026H8.401v-7.026c0-.036.108-.143.144-.143z"
                />
                <path
                    fill={fillColor}
                    d="M18.929 6.338l-3.686-3.69A2.226 2.226 0 0013.7 2H6.433C5.359 2 4.5 2.932 4.5 4.115V22h15V7.734c-.032-.572-.212-1.04-.571-1.396zM7.33 19.025v-8.1c0-.644.572-1.22 1.219-1.22h6.909c.642 0 1.218.572 1.218 1.22v8.1H7.33z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M16.638 2.165c.482 0 1.16.106 1.647.622.361.384.552.927.552 1.577V19.64c0 .65-.19 1.193-.552 1.577-.27.283-.773.622-1.647.622H7.36c-.484 0-1.162-.107-1.647-.622-.36-.384-.551-.927-.551-1.577V6.27a.56.56 0 01.179-.412l3.823-3.544a.566.566 0 01.381-.148h7.093zm-5.171 8.616a.281.281 0 00-.28.28v1.05c0 .155.126.28.28.28h1.05a.28.28 0 00.28-.28v-1.05a.28.28 0 00-.28-.28h-1.05zm-3.006.28v1.05c0 .155.126.28.28.28h1.045a.28.28 0 00.28-.28v-1.05a.281.281 0 00-.28-.28H8.741a.281.281 0 00-.28.28zm1.325 7.21a.28.28 0 00.28-.28v-1.05a.281.281 0 00-.28-.28H8.741a.281.281 0 00-.28.28v1.05c0 .154.126.28.28.28h1.045zm3.011-.28v-1.05a.281.281 0 00-.28-.28h-1.05a.281.281 0 00-.28.28v1.05c0 .154.126.28.28.28h1.05a.28.28 0 00.28-.28zm2.457.28a.28.28 0 00.28-.28v-1.05a.281.281 0 00-.28-.28h-1.059a.281.281 0 00-.28.28v1.05c0 .154.126.28.28.28h1.059zm.28-3.01v-1.469a.28.28 0 00-.28-.28H8.741a.28.28 0 00-.28.28v1.468c0 .154.126.28.28.28h6.513a.28.28 0 00.28-.28zm-.28-2.87a.28.28 0 00.28-.28v-1.05a.28.28 0 00-.28-.28h-1.059a.28.28 0 00-.28.28v1.05c0 .155.126.28.28.28h1.059z"
                />
            </svg>
        );
    }
};

export default IconChipSimCardFilled;