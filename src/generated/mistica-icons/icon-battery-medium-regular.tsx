/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconBatteryMediumRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.153 7.542c0-1.056-.275-1.835-.84-2.387-.57-.555-1.373-.824-2.46-.824h-.188v-.666c0-.474-.134-.849-.403-1.112-.269-.264-.656-.398-1.146-.398H10.89c-.49 0-.876.137-1.148.403-.269.266-.406.639-.406 1.107v.67H9.15c-1.079 0-1.88.274-2.457.84-.566.557-.843 1.333-.843 2.37v11.092c0 1.061.277 1.846.849 2.398.566.543 1.367.81 2.45.81h5.704c1.084 0 1.885-.267 2.45-.813.572-.552.85-1.336.85-2.398V7.542zm-7.947-3.877c0-.359.115-.474.157-.51.039-.04.154-.154.526-.154h2.227c.378 0 .493.112.53.148v.001c.038.037.15.15.15.515v.666h-3.59v-.666zm7.076 14.969c0 .823-.194 1.412-.592 1.796-.395.38-.994.565-1.837.565H9.15c-.843 0-1.443-.184-1.838-.566-.397-.383-.59-.969-.59-1.795V7.542c0-.804.193-1.381.59-1.774.404-.395 1.003-.588 1.838-.588h5.703c.843 0 1.445.188 1.84.574.395.384.588.97.588 1.788v11.092zm-1.72-.639c0 .661-.552 1.2-1.23 1.2H9.67c-.68 0-1.233-.539-1.233-1.2V13.04h7.124v4.955zm.87-5.378a.43.43 0 00-.436-.423H8a.429.429 0 00-.434.423v5.378c0 1.13.944 2.045 2.104 2.045h4.658c1.16 0 2.104-.916 2.104-2.045v-5.378z"
            />
        </svg>
    );
};

export default IconBatteryMediumRegular;
