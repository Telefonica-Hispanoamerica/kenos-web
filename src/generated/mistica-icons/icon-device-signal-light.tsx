/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconDeviceSignalLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M17.824 5.214v.7l-.002.004-.002.004v12.864c0 1.774-1.402 3.214-3.128 3.214H8.437c-1.726 0-3.127-1.44-3.127-3.214V5.214C5.31 3.44 6.711 2 8.437 2h6.26c1.726 0 3.127 1.44 3.127 3.214zm-3.132-2.5H8.437c-1.339 0-2.433 1.12-2.433 2.5v.352h11.122v-.352c0-1.38-1.09-2.5-2.434-2.5zm0 18.568c1.344 0 2.434-1.12 2.434-2.5V6.279H6.004v11.433h7.3c.191 0 .347.16.347.357a.352.352 0 01-.347.356h-7.3v.357c0 1.38 1.09 2.5 2.433 2.5h6.255zm.699-2.5c.382 0 .694-.32.694-.713a.705.705 0 00-.694-.714.705.705 0 00-.694.714c0 .393.311.713.694.713zm5.596-2.35a.35.35 0 01-.494.014.362.362 0 01-.013-.503 5.727 5.727 0 00-.098-7.881.357.357 0 010-.503.339.339 0 01.49 0 6.441 6.441 0 01.115 8.873zm-1.633-1.682a4.057 4.057 0 00-.11-5.518.353.353 0 10-.5.503 3.335 3.335 0 01.094 4.53.362.362 0 00.022.503.34.34 0 00.236.096.333.333 0 00.258-.114z"
            />
        </svg>
    );
};

export default IconDeviceSignalLight;
