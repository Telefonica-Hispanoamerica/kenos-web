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

const IconGiftFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.422 10.334v1.294h-7.86V8.3h2.62c1.446 0 2.62-1.161 2.62-2.593s-1.174-2.593-2.62-2.593c-1.385 0-2.534 1.071-2.616 2.441-.004.052-.004.1-.004.152V8.3h-1.117v3.333H3.58v-1.294c0-1.124.925-2.039 2.06-2.039h1.878a2.742 2.742 0 01-.566-1.669c0-1.53 1.26-2.777 2.807-2.777.719 0 1.37.27 1.868.71A3.74 3.74 0 0115.188 2c2.064 0 3.74 1.66 3.74 3.702a3.68 3.68 0 01-1.072 2.593h.512c1.13.005 2.055.915 2.055 2.039zM11.441 8.3V6.636a1.68 1.68 0 00-1.686-1.668c-.93 0-1.682.744-1.682 1.663 0 .92.757 1.67 1.686 1.67h1.682zM3.58 21.445c0 .308.248.555.56.555h7.295v-9.258H3.58v8.703zM19.856 22h-7.295v-9.258h7.855v8.703a.555.555 0 01-.56.555z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.841 8.491c0-.851-.691-1.63-1.45-1.63v-.003h-2.91c.363-.367.613-.778.71-1.232.15-.678-.022-1.41-.492-2.118-.47-.709-1.087-1.16-1.779-1.302-.692-.146-1.443.025-2.165.484-.807.513-1.454 1.656-1.894 2.658-.437-1-1.087-2.145-1.893-2.658-.723-.46-1.471-.63-2.166-.484-.694.145-1.308.593-1.778 1.302-.471.706-.639 1.44-.493 2.118.098.454.347.868.708 1.232H3.606c-.759 0-1.45.779-1.45 1.63v2.953c0 .753.484 1.403 1.114 1.58h8.048V7.47h1.252v5.553h8.003c.02 0 .04.005.06.01a.357.357 0 00.038.01c.658-.155 1.17-.824 1.17-1.6V8.49zm-5.196-4.313c.289.434.398.837.32 1.196-.076.358-.342.683-.787.966-.7.445-2.46.457-3.521.375.35-.988 1.072-2.543 1.781-2.994.445-.286.854-.392 1.221-.314.365.076.698.336.986.77zM3.388 20.21v-5.963h7.93v7.596h-6.48c-.784 0-1.45-.742-1.45-1.633zm9.182-5.963h7.975v5.972c0 .882-.659 1.627-1.454 1.627H12.57v-7.6zM7.545 6.34c-.446-.283-.712-.608-.79-.964-.079-.358.03-.761.319-1.196.291-.434.622-.694.989-.77.075-.017.154-.025.235-.025.303 0 .636.112.986.336.709.451 1.431 2.008 1.782 2.994-1.062.084-2.818.07-3.521-.375z"
                />
            </svg>
        );
    }
};

export default IconGiftFilled;