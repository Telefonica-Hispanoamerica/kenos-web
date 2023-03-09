/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconFirewallLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.5 14.428h.43v-.015h2.718v2.38c0 .223-.142.37-.356.37-.215 0-.357-.147-.357-.37v-1.637H15.58v3.716h3.354c.214 0 .393.148.393.371 0 .224-.142.372-.357.372H7.363c-.215 0-.356-.148-.356-.372 0-.11.105-.37.105-.37.073-.372.142-1.005.036-1.524-.073-.37-.25-.67-.466-1.004a4.189 4.189 0 01-.644-1.413c-.105-.524-.142-1.228-.142-1.823a9.543 9.543 0 00-.89 2.27c-.394 1.823.177 2.975.177 2.975.032.114.037.294-.073.409-.11.114-.251.152-.393.076-.11-.038-2.609-1.152-2.714-4.426-.064-1.832.92-3.277 1.803-4.576l.198-.292c.645-.818 1.216-1.637 1.394-2.38.43-1.817.178-2.674.178-2.674a.38.38 0 01.142-.409c.142-.11.325-.11.43 0 .141.11 2.997 2.45 2.997 5.501 0 1.004-.11 1.823-.214 2.341a4.05 4.05 0 00.417-.295l.049-.038c.36-.333.466-.966.466-.966a.418.418 0 01.251-.295.436.436 0 01.357.076l.006.007c.122.125 1.39 1.425 1.492 4.01h5.854v-3.717H12.72c-.215 0-.356-.147-.356-.371s.141-.371.356-.371h5.78v4.463zm2.074 4.83c0-.41.32-.743.713-.743.393 0 .713.333.713.743 0 .409-.32.742-.713.742-.393 0-.713-.333-.713-.742zM7.861 17.14c.142.519.073 1.152.01 1.599 1.069-.295 3.427-1.266 3.427-3.94 0-1.637-.535-2.75-.928-3.346-.11.224-.251.486-.466.671-.498.486-1.32.78-1.357.78-.105.072-.252.034-.357-.075-.073-.077-.11-.224-.073-.372 0 0 .32-1.08.32-2.864 0-1.818-1.247-3.417-2.107-4.274 0 .524-.036 1.19-.25 2.047-.216.928-.823 1.784-1.5 2.674-.964 1.304-1.965 2.674-1.892 4.388.074 1.713.891 2.717 1.536 3.273-.105-.594-.142-1.45.073-2.455.411-1.806 1.403-3.204 1.655-3.56a1.28 1.28 0 00.059-.085.32.32 0 01.283-.148c.036 0 .068 0 .142.038a.417.417 0 01.214.372s-.11 1.932.105 2.898c.106.48.32.818.572 1.151.214.371.43.743.534 1.228zm1.604 1.747h5.393V15.17h-2.893c-.142 1.97-1.357 3.084-2.5 3.717z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M5.317 2.151l15.319.003c.63 0 1.207.67 1.204 1.409v16.594c0 .753-.563 1.412-1.207 1.412H9.373a.36.36 0 01-.185-.05 4.167 4.167 0 01-.695.187c-.384.09-.773.131-1.162.131-.029 0-.056-.002-.083-.004a1.07 1.07 0 00-.083-.004c-.009 0-.017 0-.024.002a.415.415 0 01-.088-.006c-.017-.003-.033-.006-.05-.007-1.493-.093-2.939-.79-3.855-1.958-1.885-2.4-.812-5.91.958-8.02V3.563c0-.74.577-1.412 1.21-1.412zm-.003.835c-.126 0-.378.26-.378.577v4.745l3.61.009V2.986H5.314zm.221 8.591c-1.941 1.594-3.583 5.412-1.737 7.768.294.367.647.683 1.048.932a2.14 2.14 0 01.412-2.09c.131-.148.277-.285.437-.408.936-.733.562-1.77.536-1.842l-.001-.004a.419.419 0 01-.02-.255.42.42 0 01.504-.308c.555.14 1.126.45 1.603.868 1.014.894 1.806 2.908.983 4.336a4.22 4.22 0 001.058-.709 3.032 3.032 0 00.995-2.131 3.051 3.051 0 00-.838-2.205 4.992 4.992 0 00-.784-.686c-2.084-1.524-2.064-3.52-1.854-4.605a8.045 8.045 0 00-2.342 1.339zm6.65 6.188a3.863 3.863 0 01-1.54 2.942l-.034.027h5.714v-5.381l-4.916-.022c.524.708.81 1.551.776 2.434zm4.966 2.972h3.485c.151 0 .38-.26.378-.577v-4.782l-3.863-.02v5.379zm-9.963.255h.006l.01-.001h.034c.51-.033.978-.28 1.277-.689.745-1.02.045-2.745-.742-3.436a3.6 3.6 0 00-.616-.432 2.402 2.402 0 01-.955 2.003 2.15 2.15 0 00-.32.3H5.88c-.454.518-.429 1.3.058 1.787.356.353.754.423.757.423.165.039.33.05.493.045zM21.014 8.347V3.563c0-.314-.252-.577-.381-.574h-3.482v5.35l3.863.008zM9.375 8.32l6.947.017V2.99l-6.947-.003V8.32zm1.283 6.196a.401.401 0 01.12-.022l1.611.008v-5.34l-7.456-.016v1.857a1.7 1.7 0 00.038-.035l.037-.035c1.012-.827 2.208-1.434 3.373-1.712a.41.41 0 01.415.14c.1.12.126.289.061.434-.045.104-1.084 2.589 1.356 4.37.154.11.302.227.445.35zm2.563-.01l7.793.038v-5.36l-7.793-.02v5.341z"
                />
            </svg>
        );
    }
};

export default IconFirewallLight;
