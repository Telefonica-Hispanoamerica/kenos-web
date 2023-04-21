/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconDisabledLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.337 19.147c0 .394-.31.713-.694.713a.704.704 0 01-.694-.713c0-.394.31-.713.694-.713.383 0 .694.319.694.713zm-1.121-1.797a.359.359 0 00.24-.444l-.591-2.14c-.205-.786-.885-1.335-1.654-1.335h-3.207L12.368 7.04a2.694 2.694 0 001.37-2.36c0-1.476-1.17-2.679-2.606-2.679-1.437 0-2.606 1.203-2.606 2.68a2.69 2.69 0 001.178 2.235 1.794 1.794 0 00-.827 1.514v3.928c0 .983.778 1.788 1.739 1.788h5.074c.089.416.138.836.138 1.248 0 3.25-2.57 5.894-5.732 5.894-3.162 0-5.732-2.643-5.732-5.894 0-2.259 1.285-4.349 3.277-5.323a.36.36 0 00.165-.475.345.345 0 00-.463-.17C5.111 10.519 3.67 12.86 3.67 15.394 3.67 19.037 6.552 22 10.096 22s6.425-2.963 6.425-6.607c0-.416-.04-.832-.12-1.248h.81c.462 0 .858.324.982.813l.592 2.145a.353.353 0 00.431.247zM9.22 4.68c0-1.084.858-1.967 1.912-1.967 1.054 0 1.912.883 1.912 1.966 0 1.084-.858 1.967-1.917 1.967-1.054-.005-1.907-.883-1.907-1.967zm1.391 8.751c-.573 0-1.04-.48-1.04-1.07V8.433c0-.59.467-1.07 1.04-1.07h1.121l1.556 6.073h-1.983v-.005h-.694z"
            />
        </svg>
    );
};

export default IconDisabledLight;
