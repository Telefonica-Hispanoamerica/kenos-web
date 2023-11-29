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

const IconCancelLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.998 2C6.488 2 2 6.488 2 12s4.487 10 9.998 10a9.97 9.97 0 005.33-1.544.353.353 0 00.113-.496.36.36 0 00-.496-.112 9.257 9.257 0 01-4.951 1.432c-5.119 0-9.282-4.164-9.282-9.284 0-5.12 4.167-9.288 9.286-9.288s9.282 4.164 9.282 9.284a9.261 9.261 0 01-1.432 4.952.36.36 0 00.608.384A9.965 9.965 0 0022 11.996C21.996 6.488 17.513 2 11.998 2z"
                />
                <path
                    fill={fillColor}
                    d="M16.537 7.464a.355.355 0 00-.504 0l-4.035 4.032-4.031-4.032a.355.355 0 00-.504 0 .355.355 0 000 .504L11.494 12l-4.031 4.032a.355.355 0 00.252.608c.088 0 .18-.032.252-.104l4.031-4.032 4.031 4.032a.354.354 0 00.504 0 .355.355 0 000-.504L12.506 12l4.031-4.032a.362.362 0 000-.504zm2.252 12.04a.716.716 0 100-1.432.716.716 0 000 1.432z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M23 12.003C23 4.51 18.946 1 11.997 1 5.047 1 1 4.51 1 12.003 1 19.497 5.048 23 11.997 23 18.947 23 23 19.497 23 12.003zm-11.003 10.08c-6.69 0-10.08-3.39-10.08-10.08 0-6.693 3.39-10.086 10.08-10.086 6.693 0 10.086 3.393 10.086 10.086 0 6.69-3.393 10.08-10.086 10.08zm4.445-14.528a.46.46 0 010 .648l-3.8 3.8 3.8 3.803a.456.456 0 01-.012.649.456.456 0 01-.636 0l-3.8-3.804-3.791 3.791a.46.46 0 01-.648-.648l3.79-3.79-3.79-3.789a.46.46 0 01.648-.648l3.79 3.791 3.804-3.803a.455.455 0 01.645 0z"
                />
            </svg>
        );
    }
};

export default IconCancelLight;