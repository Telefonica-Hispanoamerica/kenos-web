/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconContactBookRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M8.767 9.467c0 1.569.902 2.47 2.47 2.47 1.576 0 2.477-.901 2.477-2.47 0-1.575-.901-2.476-2.476-2.476-1.57 0-2.471.9-2.471 2.476zm1.113 0c0-.956.409-1.364 1.358-1.364.956 0 1.364.408 1.364 1.364 0 .952-.408 1.358-1.364 1.358-.952 0-1.358-.408-1.358-1.358zm-1.726 7.022h6.185a.522.522 0 00.52-.517v-.904c0-1.55-.95-2.551-2.417-2.551h-2.388c-1.47 0-2.417 1-2.417 2.55v.905c0 .285.232.517.517.517zm5.669-1.034H8.667v-.387c0-.57.18-1.52 1.384-1.52h2.388c1.204 0 1.384.95 1.384 1.52v.387z"
            />
            <path
                fill={fillColor}
                d="M16.519 22H7.657a2.97 2.97 0 01-2.967-2.967V4.696c0-.719.28-1.395.788-1.906A2.667 2.667 0 017.383 2h9.136a2.792 2.792 0 012.788 2.788v14.428A2.79 2.79 0 0116.519 22zM7.383 3.164c-.407 0-.793.16-1.081.448a1.523 1.523 0 00-.448 1.084v14.337c0 .995.81 1.806 1.806 1.806h8.87V3.164H7.382zm10.762 16.052v-3.661h-.45v4.782c.278-.291.45-.686.45-1.12zm0-4.825V9.61h-.45v4.78h.45zm0-9.603c0-.435-.172-.83-.45-1.122v4.782h.45v-3.66z"
            />
        </svg>
    );
};

export default IconContactBookRegular;
