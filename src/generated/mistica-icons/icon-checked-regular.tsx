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

const IconCheckedRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12 20.637c-4.601 0-8.637-4.036-8.637-8.637 0-4.601 4.036-8.637 8.637-8.637 4.6 0 8.637 4.036 8.637 8.637 0 4.6-4.036 8.637-8.637 8.637zM2 12c0 5.327 4.673 10 10 10s10-4.673 10-10S17.327 2 12 2 2 6.673 2 12zm8.348 1.466l-1.585-1.629a.682.682 0 00-.963.964l2.548 2.593 5.717-5.83a.682.682 0 00-.964-.964"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M10.633 14.164l6.317-6.15a.726.726 0 011.03 0 .704.704 0 010 1.023l-7.38 7.247-3.593-3.721a.7.7 0 01.027-1.023.724.724 0 011.032.029l2.567 2.595z"
                />
                <path
                    fill={fillColor}
                    d="M12 2C6.484 2 2 6.484 2 12s4.484 10 10 10 10-4.484 10-10S17.516 2 12 2zm0 18.576c-4.728 0-8.576-3.848-8.576-8.576 0-4.728 3.848-8.576 8.576-8.576 4.728 0 8.576 3.848 8.576 8.576 0 4.728-3.848 8.576-8.576 8.576z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.947 16.64c.11.138.276.217.451.217h.013a.572.572 0 00.451-.232l6.452-8.639a.575.575 0 10-.922-.69l-6.01 8.044-2.489-3.128a.577.577 0 00-.9.718l2.954 3.71z"
                />
                <path
                    fill={fillColor}
                    d="M11.997 23c-3.495 0-6.213-.912-8.079-2.711C1.981 18.424 1 15.637 1 12.005c0-3.633.981-6.423 2.918-8.29C5.784 1.914 8.505 1 11.998 1c3.495 0 6.213.912 8.081 2.711C22.018 5.58 23 8.37 23 12.001c0 3.633-.984 6.42-2.922 8.288C18.21 22.088 15.492 23 11.997 23zm0-20.78c-6.49 0-9.78 3.29-9.78 9.785 0 6.488 3.29 9.779 9.78 9.779 6.492 0 9.787-3.291 9.787-9.78 0-6.49-3.295-9.785-9.787-9.785z"
                />
            </svg>
        );
    }
};

export default IconCheckedRegular;
