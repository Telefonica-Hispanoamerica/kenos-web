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

const IconWarningLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2 12c0 5.5 4.5 10 10 10a10.14 10.14 0 005.356-1.536c.18-.108.216-.32.108-.5s-.32-.216-.5-.108A9.43 9.43 0 0112 21.284c-5.108 0-9.284-4.176-9.284-9.284 0-5.108 4.18-9.284 9.284-9.284 5.104 0 9.284 4.176 9.284 9.248 0 1.784-.5 3.5-1.428 4.964-.108.18-.072.392.108.5.18.108.392.072.5-.108A9.925 9.925 0 0022 12c0-5.5-4.5-10-10-10S2 6.5 2 12z"
                />
                <path
                    fill={fillColor}
                    d="M18.784 19.5a.716.716 0 100-1.432.716.716 0 000 1.432zM12 6.644c-.216 0-.356.144-.356.356v7.5c0 .216.144.356.356.356.216 0 .356-.144.356-.356V7c0-.216-.14-.356-.356-.356zm0 9.64a.536.536 0 110 1.072.536.536 0 010-1.072z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M23 12.028C23 1.911 14.614 1.06 12.46 1.01a36.349 36.349 0 00-.83-.009h-.212C9.21 1.019 1 1.776 1 11.966c0 10.201 8.286 11 10.496 11.03.113.004.229.004.344.004.232 0 .464-.003.664-.006C14.604 22.956 23 22.167 23 12.028zm-.917 0c0 9.16-7.347 10.008-9.598 10.049a19.549 19.549 0 01-.645.009l-.328-.003c-.961-.013-3.431-.194-5.604-1.562-2.648-1.672-3.99-4.546-3.99-8.555 0-4.004 1.326-6.872 3.95-8.521 2.153-1.356 4.604-1.518 5.56-1.528h.203c.275 0 .56.003.807.01.961.025 3.428.225 5.613 1.596 2.676 1.678 4.032 4.539 4.032 8.505zm-10.086 3.65a.458.458 0 01-.457-.457V5.724a.458.458 0 01.914 0v9.497a.458.458 0 01-.457.457zm.72 1.885a.717.717 0 10-1.434 0 .717.717 0 001.434 0z"
                />
            </svg>
        );
    }
};

export default IconWarningLight;