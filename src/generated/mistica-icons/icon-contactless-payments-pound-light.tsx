/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconContactlessPaymentsPoundLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M17.738 5.913v-.7A3.211 3.211 0 0014.532 2H8.116A3.211 3.211 0 004.91 5.214v13.572A3.211 3.211 0 008.116 22h6.412a3.21 3.21 0 003.205-3.214V5.922c0-.002.003-.004.003-.004l.002-.005zm-9.622-3.2h6.412a2.498 2.498 0 012.494 2.5v.353h-11.4v-.352a2.5 2.5 0 012.494-2.5zm0 18.57a2.498 2.498 0 01-2.495-2.501v-.357h7.484a.357.357 0 000-.713H5.62V6.279h11.401v12.503c0 1.38-1.117 2.5-2.494 2.5H8.116zm7.839-3.214c0 .393-.32.713-.711.713a.713.713 0 010-1.427c.392 0 .711.32.711.714zm5.121-1.527a.355.355 0 00.26-.11 6.332 6.332 0 00-.118-8.873.353.353 0 00-.502 0 .351.351 0 000 .503 5.625 5.625 0 01.1 7.88.355.355 0 00.26.6zm-1.527-7.31a3.985 3.985 0 01.114 5.518.345.345 0 01-.265.114.353.353 0 01-.242-.096.356.356 0 01-.022-.503 3.275 3.275 0 00-.096-4.53.351.351 0 010-.503.369.369 0 01.51 0zm-5.997 6.336a.357.357 0 000-.713h-3.22c.123-.21.192-.453.192-.713v-1.788h1.783a.357.357 0 000-.713h-1.783v-1.609c0-.686.556-1.248 1.245-1.248.287 0 .56.096.784.279A.357.357 0 1013 8.505a1.95 1.95 0 00-1.231-.439 1.967 1.967 0 00-1.961 1.966v1.61h-.356a.357.357 0 000 .712h.356v1.788c0 .398-.31.713-.712.713a.357.357 0 000 .713h4.456z"
            />
        </svg>
    );
};

export default IconContactlessPaymentsPoundLight;
