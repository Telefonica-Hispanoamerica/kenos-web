/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconShareDevicesLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M14.825 2h4.586c1.182 0 2.112.942 2.117 2.144v9.638c0 1.203-.93 2.144-2.117 2.144h-4.586c-1.187 0-2.117-.941-2.117-2.144V7.713h-9.52v11.074h8.816c.194 0 .352.16.352.357a.355.355 0 01-.352.356H3.189v.713c0 .59.474 1.07 1.056 1.07h10.584c.583 0 1.056-.48 1.056-1.07v-2.857c0-.196.159-.356.353-.356.194 0 .352.16.352.357v2.856A1.78 1.78 0 0114.825 22H4.245c-.975 0-1.765-.804-1.765-1.787V6.287c0-.987.794-1.787 1.765-1.787h8.463v-.356c0-1.203.93-2.144 2.117-2.144zm5.994 3.218h-7.407v7.5h7.407v-7.5zm-5.994-2.5c-.79 0-1.413.626-1.413 1.426V4.5h7.407v-.356c0-.8-.618-1.426-1.408-1.426h-4.586zM3.189 6.287v.718h9.519V5.218H4.245c-.582 0-1.056.48-1.056 1.069zm16.222 8.926c.79 0 1.408-.626 1.412-1.426v-.357h-7.406v.357c0 .8.618 1.426 1.408 1.426h4.586zm-4.586 3.926a.71.71 0 00-.704-.713.707.707 0 00-.704.713.71.71 0 00.704.713.71.71 0 00.704-.713zm4.161-10.85L16.13 6.62a.634.634 0 00-.952.557v3.341a.64.64 0 00.632.645.61.61 0 00.316-.087l2.907-1.705.058-.041a.651.651 0 00.208-.544.646.646 0 00-.312-.498zm-3.105-.987l2.64 1.544-2.64 1.545v-3.09zm-7.159 3.537a.633.633 0 00-.952.558v3.34a.64.64 0 00.632.645.61.61 0 00.316-.087l2.907-1.704.054-.042a.646.646 0 00-.109-1.032l-2.848-1.678zm-.243.681l2.64 1.545-2.64 1.545v-3.09z"
            />
        </svg>
    );
};

export default IconShareDevicesLight;
