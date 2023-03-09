/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconImageFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.423 4.622c.742 0 1.42.583 1.42 1.224v12.317c0 .641-.678 1.224-1.42 1.224H3.577c-.756 0-1.417-.574-1.417-1.224l.002-12.317c0-.652.664-1.224 1.418-1.224h16.843zM4.8 8.984a2.267 2.267 0 002.255 2.277c1.244 0 2.255-1.022 2.255-2.277 0-1.255-1.011-2.278-2.255-2.278S4.801 7.73 4.801 8.984zm14.933 3.652l-3.247-2.507a.61.61 0 00-.756.009l-3.711 2.977-.897-.854a.61.61 0 00-.815-.025l-5.277 4.44a.627.627 0 00-.079.876.608.608 0 00.866.082l4.86-4.087 3.378 3.213a.61.61 0 00.868-.026.628.628 0 00-.025-.88l-1.969-1.873 3.196-2.566 2.866 2.213a.61.61 0 00.857-.12.626.626 0 00-.115-.872zM6.03 8.986c0 .57.46 1.034 1.025 1.034a1.035 1.035 0 000-2.067A1.03 1.03 0 006.03 8.987z"
            />
        </svg>
    );
};

export default IconImageFilled;
