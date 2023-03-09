/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconSharedDataLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M14.24 7.415c-.72 0-1.187.381-1.187 1.2 0 .082.005.16.014.234l-2.368 1.19c-.206-.251-.53-.371-.933-.371-.72 0-1.187.38-1.187 1.199 0 .392.108.684.3.881.207.215.511.318.884.318s.68-.103.885-.318a.872.872 0 00.048-.053l2.37 1.19c-.009.073-.013.15-.013.231 0 .392.108.684.299.882.207.214.512.317.885.317s.68-.103.885-.317c.19-.198.299-.49.299-.882.005-.818-.461-1.199-1.181-1.199-.434 0-.776.138-.98.427l-2.337-1.175c.016-.093.024-.194.024-.302a1.79 1.79 0 00-.022-.299l2.34-1.177a.92.92 0 00.087.105c.207.215.512.318.885.318s.68-.103.885-.318c.19-.198.299-.49.299-.881.005-.819-.461-1.2-1.181-1.2z"
            />
            <path
                fill={fillColor}
                d="M5.068 16.733H18.94c1.03 0 1.813-.3 2.328-.895.486-.558.731-1.383.731-2.45V8.343c0-1.068-.248-1.892-.731-2.45C20.754 5.3 19.97 5 18.94 5H5.068c-1.03 0-1.813.3-2.328.893-.487.558-.731 1.382-.731 2.45v5.045c0 1.067.244 1.892.73 2.453.516.592 1.299.892 2.329.892zm-2.49-8.388c0-1.891.79-2.773 2.49-2.773H18.94c1.699 0 2.49.879 2.49 2.77v5.049c0 1.892-.791 2.773-2.49 2.773H5.068c-1.7 0-2.49-.882-2.49-2.773V8.345zM21.707 19H2.285a.286.286 0 010-.572h19.422a.286.286 0 010 .572z"
            />
        </svg>
    );
};

export default IconSharedDataLight;
