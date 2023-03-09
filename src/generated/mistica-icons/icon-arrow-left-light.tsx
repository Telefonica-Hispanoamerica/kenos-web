/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconArrowLeftLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M22 15.32c0 .41-.32.74-.716.74a.728.728 0 01-.716-.74c0-.408.32-.74.716-.74.395 0 .716.332.716.74zM12.248 22c-.464 0-.896-.186-1.252-.517L2 12.001l9.036-9.481c.5-.517 1.252-.666 1.964-.368a1.866 1.866 0 011.144 1.736v4.427h7.5c.216 0 .356.148.356.367 0 .224-.144.368-.356.368h-8.216V3.884c0-.554-.356-.926-.716-1.07a1.04 1.04 0 00-1.18.222L3 12.002l8.536 8.965c.356.367.856.367 1.18.223.356-.149.716-.517.716-1.07v-5.167h5.712c.216 0 .356.149.356.368 0 .223-.144.367-.356.367h-5v4.427c0 .777-.464 1.439-1.144 1.736-.252.116-.5.149-.752.149z"
            />
        </svg>
    );
};

export default IconArrowLeftLight;
