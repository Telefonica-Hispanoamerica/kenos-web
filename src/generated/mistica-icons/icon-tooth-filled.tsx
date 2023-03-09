/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconToothFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M15.586 21.85h-.114c-.157 0-.275-.04-.348-.065a1.763 1.763 0 01-.756-.572 5.736 5.736 0 01-.485-.748l-.075-.165a17.283 17.283 0 01-.317-.804c-.263-.694-1.022-2.692-1.496-3.213-.473.521-1.23 2.521-1.493 3.213-.145.387-.24.633-.314.796l-.008.039-.073.134a5.664 5.664 0 01-.49.754 1.719 1.719 0 01-.717.552 1.066 1.066 0 01-.37.075h-.112c-.157 0-.274-.039-.347-.064a1.738 1.738 0 01-.754-.572 5.458 5.458 0 01-.423-.644l-.044-.075a19.962 19.962 0 01-1.407-3.07 21.234 21.234 0 01-.714-2.289c-.042-.16-.092-.367-.148-.59l-.028-.116c-1.026-1.784-1.751-3.554-2.16-5.26-.583-2.44-.078-4.488 1.42-5.76.857-.736 2.023-1.176 3.28-1.24 1.294-.07 2.639.252 3.874.938.334.188.67.378 1.031.591a82.88 82.88 0 011.03-.588c1.236-.686 2.583-1.011 3.88-.941 1.255.064 2.42.504 3.28 1.243 1.496 1.272 2 3.317 1.418 5.757-.41 1.706-1.137 3.473-2.16 5.26l-.025.098c-.056.233-.106.446-.154.617a20.843 20.843 0 01-.714 2.282 19.757 19.757 0 01-1.39 3.04l-.058.1a5.573 5.573 0 01-.43.65 1.718 1.718 0 01-.716.552.913.913 0 01-.373.084z"
            />
        </svg>
    );
};

export default IconToothFilled;
