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

const IconClipRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M16.53 22a3.43 3.43 0 01-2.459-1.043L3.89 10.505A5.004 5.004 0 012.47 6.98c0-1.33.505-2.58 1.42-3.523a4.772 4.772 0 016.864 0l10.553 10.825c.28.288.28.755 0 1.043a.705.705 0 01-1.015 0L9.738 4.5a3.344 3.344 0 00-2.416-1.028c-.915 0-1.77.363-2.417 1.028a3.518 3.518 0 00-1.002 2.481c0 .939.354 1.816 1.002 2.481l10.181 10.453c.795.816 2.09.816 2.886 0a2.138 2.138 0 000-2.962L7.79 6.505a.665.665 0 00-.932 0 .683.683 0 00-.193.48c0 .185.069.355.193.482l9.203 9.448c.28.288.28.755 0 1.043a.705.705 0 01-1.016 0L5.842 8.505a2.193 2.193 0 010-3.043 2.062 2.062 0 012.968 0l10.182 10.453c1.355 1.392 1.355 3.656 0 5.043A3.456 3.456 0 0116.529 22z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.993 21.841c-2.863 0-4.507-1.563-4.507-4.291V5.31c0-2.004 1.207-3.155 3.31-3.155 2.104 0 3.311 1.148 3.311 3.154l.026 11.053c0 1.166-.76 1.888-1.98 1.888-1.222 0-1.981-.723-1.981-1.885V6.284c0-.34.288-.61.641-.61.356 0 .642.274.642.61v10.078c0 .496.176.661.694.661.522 0 .695-.165.695-.66l-.028-11.054c0-1.316-.644-1.93-2.025-1.93-1.381 0-2.025.614-2.025 1.93V17.55c0 2.064 1.053 3.067 3.221 3.067s3.221-1.003 3.221-3.067l.011-11.32c0-.338.289-.61.642-.61.356 0 .641.274.641.613l-.01 11.32c.008 2.725-1.637 4.288-4.5 4.288z"
                />
            </svg>
        );
    }
};

export default IconClipRegular;
