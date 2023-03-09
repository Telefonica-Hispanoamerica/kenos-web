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

const IconTabletFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20 4.32v-.536c0-1-.764-1.784-1.738-1.784H5.739C4.764 2 4 2.784 4 3.784v.536h16zM4 5.393h16v13.214H4V5.393zm0 14.823v-.537h15.996v.537c0 1-.763 1.784-1.737 1.784H5.738C4.764 22 4 21.216 4 20.216z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.377 5.758s.005 8.507.005 12.434c0 3.426-2.675 3.644-3.358 3.644-.101 0-.157-.002-.157-.002s-3.757.002-7.715.002c-3.957 0-3.52-3.638-3.52-3.638V5.778c0-3.43 2.756-3.622 3.378-3.622.078 0 .123.002.123.002l7.75-.002c3.807-.003 3.494 3.602 3.494 3.602zM6.704 3.73c-.218.134-.88.546-.88 2.042v11.157h12.37c0-4.238-.005-11.168-.005-11.168 0-.034.002-.068.005-.104v-.008s.062-1.014-.512-1.653c-.367-.406-.97-.613-1.793-.613l-7.75.002-.041-.001a.76.76 0 00-.04-.001h-.043c-.179-.003-.792.022-1.31.347zm4.477 15.647c0 .25.07.45.212.597.146.145.356.224.608.224s.462-.079.608-.224c.143-.146.213-.348.213-.597 0-.513-.308-.82-.82-.82-.513 0-.822.307-.822.82z"
                />
            </svg>
        );
    }
};

export default IconTabletFilled;
