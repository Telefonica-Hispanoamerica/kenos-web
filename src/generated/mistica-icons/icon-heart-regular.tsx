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

const IconHeartRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.497 21.772c.13.144.308.228.499.228a.661.661 0 00.495-.232 117.664 117.664 0 002.826-3.278l.008-.01 2.502-3.244.007-.012.008-.012c2.472-3.488 3.676-6.256 3.676-8.462 0-1.438-.492-2.66-1.425-3.54A4.499 4.499 0 0016.997 2c-1.105 0-1.966.26-2.792.835-.678.471-1.375 1.19-2.213 2.29C10.225 2.834 8.812 2 6.83 2c-1.162 0-2.24.435-3.028 1.227-.872.866-1.333 2.089-1.333 3.523 0 2.13 1.112 4.77 3.397 8.075 1.909 2.752 4.236 5.377 5.63 6.947zM3.83 6.75c0-2.293 1.508-3.32 3.001-3.32 1.508 0 2.636.508 4.624 3.296.13.18.331.288.544.288a.676.676 0 00.545-.288c2.011-2.816 3.002-3.292 4.46-3.292 1.52 0 3.158 1.039 3.158 3.32 0 1.858-1.143 4.415-3.398 7.6l-2.487 3.223c-.819.987-1.634 1.922-2.281 2.657-1.387-1.566-3.379-3.871-5.024-6.248C4.885 10.977 3.83 8.54 3.83 6.75z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12 21.809h.016c.042 0 .082 0 .124-.006h.016c.135-.005.27-.025.401-.056.46-.1.896-.297 1.277-.574.457-.328.992-.868 1.146-1.028.014-.014.025-.028.036-.042 1.566-1.616 2.488-2.773 3.639-4.563 1.457-2.26 2.454-4.501 2.97-6.664.56-2.353.097-4.308-1.298-5.504-.81-.695-1.913-1.112-3.109-1.174-1.258-.064-2.563.255-3.77.925-.415.23-.84.473-1.3.747a.316.316 0 01-.3 0 54.153 54.153 0 00-1.297-.745c-1.21-.672-2.515-.991-3.773-.927-1.193.062-2.3.48-3.109 1.171C2.274 4.568 1.812 6.52 2.372 8.873c.516 2.166 1.516 4.41 2.97 6.667 1.162 1.804 2.089 2.966 3.677 4.605.154.157.692.7 1.149 1.03.38.278.818.471 1.277.575.132.03.266.048.4.056h.017c.042.003.087.003.138.003zm.086-1.12H12v.002h-.087a1.392 1.392 0 01-.213-.03l-.017-.004a2.343 2.343 0 01-.863-.392c-.302-.218-.728-.619-.997-.899-1.549-1.6-2.409-2.675-3.54-4.431-1.387-2.154-2.334-4.28-2.821-6.32-.23-.963-.264-1.834-.104-2.585.16-.745.51-1.353 1.042-1.81.622-.534 1.488-.857 2.437-.904 1.048-.053 2.146.218 3.168.79.403.221.818.462 1.272.73l.006.004c.44.252.977.252 1.417.005l.011-.005c.454-.27.871-.51 1.277-.734 1.026-.572 2.124-.843 3.177-.793.947.05 1.812.37 2.437.905.53.456.88 1.064 1.039 1.81.16.75.123 1.621-.106 2.585-.488 2.036-1.437 4.162-2.824 6.319-1.132 1.756-1.991 2.835-3.54 4.431a.487.487 0 00-.034.04c-.272.277-.67.652-.958.86-.258.19-.552.322-.863.392l-.017.002c-.07.017-.14.029-.213.031z"
                />
            </svg>
        );
    }
};

export default IconHeartRegular;
