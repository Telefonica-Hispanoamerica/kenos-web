/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconOpenFileLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.602 8.283h1.079a1.165 1.165 0 011.151 1.244l-1.518 8.753c.005.574-.513 1.101-1.149 1.101H4.09a1.166 1.166 0 01-1.157-1.174l.005-.025-.787-12.344c0-.687.55-1.222 1.227-1.222h6.255c.675 0 1.227.535 1.227 1.194v.635h7.465c.675 0 1.227.535 1.227 1.194l.05.644zM2.975 5.81l.571 8.91.936-5.339c-.006-.571.512-1.098 1.148-1.098h13.15l-.048-.614c-.003-.224-.182-.383-.403-.383h-7.883a.416.416 0 01-.411-.42V5.81c0-.197-.18-.353-.401-.353H3.378c-.224 0-.403.16-.403.353zm16.52 12.397l1.516-8.784a.33.33 0 00-.328-.3H5.63a.33.33 0 00-.33.33L3.753 18.28c.006.11.155.258.337.258h15.075c.182 0 .33-.149.33-.33z"
            />
        </svg>
    );
};

export default IconOpenFileLight;