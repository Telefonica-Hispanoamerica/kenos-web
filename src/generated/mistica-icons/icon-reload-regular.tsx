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

const IconReloadRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.209 17.378a.71.71 0 01.784.619.732.732 0 01-.584.823l-3.717.56-.536-3.89a.72.72 0 01.592-.82.71.71 0 01.784.619l.212 1.546a8.773 8.773 0 001.44-4.83c0-4.715-3.668-8.547-8.18-8.547a7.81 7.81 0 00-3.5.82.691.691 0 01-.932-.347c-.16-.364-.016-.807.332-.974A9.178 9.178 0 0112 2c5.28 0 9.573 4.484 9.573 10 0 2.014-.569 3.932-1.62 5.566l1.256-.188zM12 20.542c1.24 0 2.432-.276 3.54-.836a.672.672 0 01.912.338.744.744 0 01-.324.974 9.113 9.113 0 01-4.136.982c-5.28 0-9.573-4.484-9.573-10 0-2.006.576-3.932 1.629-5.575l-1.257.188c-.38.059-.728-.221-.784-.618a.725.725 0 01.592-.823l3.72-.56.537 3.89a.72.72 0 01-.592.82c-.032.008-.064.008-.096.008a.707.707 0 01-.688-.627l-.212-1.546a8.764 8.764 0 00-1.448 4.839c0 4.714 3.668 8.546 8.18 8.546z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M14.591 8.791c.096.202.3.328.521.325h.034l5.81-.336a.56.56 0 00.535-.516l.352-5.518a.553.553 0 00-.333-.538.59.59 0 00-.636.11l-2.571 2.448a10.112 10.112 0 00-6.21-2.12c-5.48 0-9.933 4.305-9.933 9.599 0 5.294 4.454 9.6 9.93 9.6 4.123 0 7.863-2.51 9.305-6.247a.818.818 0 00-.479-1.054l-.025-.008a.865.865 0 00-1.1.485c-1.194 3.092-4.29 5.17-7.701 5.17-4.532.003-8.218-3.563-8.218-7.946 0-4.384 3.686-7.95 8.218-7.95 1.818 0 3.56.574 4.989 1.63l-2.37 2.25a.535.535 0 00-.118.616z"
                />
            </svg>
        );
    }
};

export default IconReloadRegular;
