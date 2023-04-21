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

const IconTimeFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2 12C2 6.488 6.488 2 12 2s10 4.488 10 10-4.488 10-10 10S2 17.512 2 12zm10 .756l3.236-3.236a.525.525 0 00-.004-.756.529.529 0 00-.756 0l-2.488 2.48-4.616-4.616a.529.529 0 00-.756 0 .529.529 0 000 .756L12 12.756z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2.155 12c0-6.705 3.622-9.845 9.84-9.845 6.219 0 9.846 3.14 9.846 9.846 0 6.706-3.627 9.84-9.846 9.84-6.218 0-9.84-3.134-9.84-9.84zm12.874 3.914a.61.61 0 00.434-.18.62.62 0 00.006-.87l-2.852-2.849V8.169a.616.616 0 10-1.232 0v4.1c0 .166.064.323.179.438l3.03 3.028c.121.117.275.18.435.18z"
                />
            </svg>
        );
    }
};

export default IconTimeFilled;
