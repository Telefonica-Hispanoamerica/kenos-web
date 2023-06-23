/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconToothLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.994 2.166c1.236.061 2.384.493 3.227 1.218 1.465 1.247 1.958 3.26 1.39 5.67-.415 1.73-1.154 3.526-2.2 5.341l-.036.154-.058.24c-.032.132-.062.253-.09.357a21.888 21.888 0 01-.726 2.314 20.14 20.14 0 01-1.406 3.078l-.061.101-.029.047c-.099.165-.246.41-.392.589a1.602 1.602 0 01-.65.501.879.879 0 01-.302.062h-.115a.852.852 0 01-.288-.053 1.608 1.608 0 01-.675-.516 6.09 6.09 0 01-.477-.734l-.053-.114a17.14 17.14 0 01-.336-.85l-.013-.034c-.327-.857-1.254-3.293-1.732-3.461-.431.17-1.381 2.672-1.692 3.496l-.033.086c-.146.381-.238.622-.309.771v.017l-.05.092a6.127 6.127 0 01-.482.74 1.602 1.602 0 01-.65.501.878.878 0 01-.302.062h-.115a.853.853 0 01-.289-.053 1.607 1.607 0 01-.675-.516 5.703 5.703 0 01-.412-.626l-.002-.004-.05-.081c-.62-1.12-.975-1.9-1.418-3.098a21.295 21.295 0 01-.723-2.317 17.816 17.816 0 01-.151-.608l-.034-.137c-1.042-1.815-1.781-3.61-2.198-5.342-.577-2.412-.085-4.428 1.383-5.675.84-.723 1.986-1.157 3.224-1.218 1.297-.065 2.617.252 3.844.932.37.208.745.42 1.154.661.422-.249.79-.456 1.154-.66 1.23-.681 2.554-1.003 3.848-.933zm1.664 11.874c1.02-1.765 1.74-3.505 2.14-5.174.499-2.095.104-3.82-1.12-4.86-.709-.608-1.678-.97-2.731-1.022-1.132-.065-2.308.224-3.4.829l-.057.032c-.375.21-.76.429-1.182.68l-.004.002a.578.578 0 01-.312.095.589.589 0 01-.325-.1c-.44-.258-.844-.488-1.239-.71-1.086-.602-2.252-.89-3.397-.828-1.056.053-2.023.417-2.729 1.022-1.22 1.036-1.619 2.762-1.117 4.857.4 1.672 1.12 3.412 2.14 5.174l.045.109.047.196.044.178c.038.155.072.295.105.416.201.79.428 1.518.7 2.238.429 1.16.77 1.908 1.356 2.972l.047.078c.082.14.222.381.35.538a.774.774 0 00.312.255l.112.003a.835.835 0 00.31-.255 4.7 4.7 0 00.359-.543v-.012l.053-.092c.053-.095.196-.47.334-.835 1.01-2.67 1.677-4.025 2.493-4.025.817 0 1.481 1.356 2.493 4.025.137.364.28.74.333.835l.053.104c.084.145.235.389.356.537a.773.773 0 00.31.255l.113.003a.836.836 0 00.31-.255c.11-.132.222-.318.305-.457a9.04 9.04 0 01.052-.086l.055-.095a19.595 19.595 0 001.345-2.95c.272-.717.502-1.448.7-2.232.04-.143.08-.311.125-.496l.021-.087.095-.32z"
            />
        </svg>
    );
};

export default IconToothLight;
