/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconThumbDownFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.841 13.057c0-.672-.168-1.16-.38-1.504.212-.334.38-.787.383-1.39 0-.658-.26-1.263-.748-1.747.126-.295.221-.678.221-1.169 0-.787-.411-1.467-1.148-1.93.07-.347.064-.739-.011-1.196a.798.798 0 00-.031-.109c-.563-1.526-1.465-1.857-5.076-1.857-2.24 0-3.2.28-3.968.503l-.015.004-.21.059c-.316.095-.569.165-.731.165l-2.807.037a.467.467 0 00-.13.023l-.06.016a1.446 1.446 0 00-.927-.342H3.612c-.804 0-1.457.653-1.457 1.457v7.596c0 .807.653 1.46 1.457 1.46h2.585c.333 0 .639-.118.885-.308.55.282 1.768 1.042 1.885 2.274.11 1.123.096 2.527.07 3.639l-.001.02a.212.212 0 00-.001.022c-.003.094-.01.166-.018.241l-.002.016-.02.23c-.067.95.275 1.53.569 1.849.443.476 1.11.728 1.927.728 1.566 0 2.499-.95 2.499-2.535l-.003-.098-.006-.132c0-1.26-.002-2.787-.005-3.613l2.07-.062h3.412c1.204-.067 2.383-.818 2.383-2.347zm-1.59-1.958a.585.585 0 00-.191.454c0 .173.073.339.202.454.235.21.358.574.358 1.05 0 .95-.832 1.098-1.19 1.118h-3.395l-2.687.08a.614.614 0 00-.596.617s.008 2.398.008 4.221v.034l.006.12c0 .975-.379 1.365-1.27 1.365-.324 0-.767-.06-1.027-.336-.19-.205-.272-.516-.244-.925l.017-.19.001-.015c.008-.079.016-.156.021-.249.003-.022.006-.044.006-.067.025-1.157.042-2.641-.076-3.851-.173-1.818-1.781-2.858-2.54-3.25v-.014a.2.2 0 00.005-.042V4.15l2.476-.033c.328 0 .653-.093 1.062-.21l.216-.062.01-.003c.73-.212 1.558-.453 3.628-.453 3.44 0 3.653.333 3.902.997.084.546.003.79-.08.94a.609.609 0 00-.04.5c.056.162.18.294.342.36.414.175.91.5.91 1.062 0 .395-.087.706-.255.902a.617.617 0 00.118.908c.44.3.664.672.664 1.104 0 .4-.12.717-.362.938zM4.882 9.528c.449 0 .76.313.76.761 0 .452-.311.762-.76.762-.448 0-.762-.313-.762-.761 0-.449.314-.762.762-.762z"
            />
        </svg>
    );
};

export default IconThumbDownFilled;
