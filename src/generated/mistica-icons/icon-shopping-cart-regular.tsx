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

const IconShoppingCartRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M4.598 3.362L8.21 17.09l10.332-2.384 2.524-8.412H6.778L5.648 2H2.976v1.362h1.622zM9.19 15.466l-2.055-7.81h12.098l-1.77 5.9-8.273 1.91zm.585 3.334a1.6 1.6 0 11-.003 3.2 1.6 1.6 0 01.003-3.2zm6.44 0a1.6 1.6 0 11-.002 3.2 1.6 1.6 0 01.002-3.2z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.972 17.294c.032-.004.068-.004.104-.004a2.305 2.305 0 012.312 2.296 2.3 2.3 0 01-2.316 2.292c-1.276 0-2.316-1.024-2.316-2.292 0-.312.064-.612.18-.884H9.932c.116.272.18.572.18.884 0 1.264-1.04 2.292-2.316 2.292-1.276 0-2.316-1.024-2.316-2.292 0-1.036.688-1.908 1.64-2.196L3.708 4.062a.705.705 0 00-.68-.532h-.324a.705.705 0 010-1.408h.324c.968 0 1.812.656 2.052 1.596l.132.524H22l-2.652 10.576H7.916l.632 2.472h9.372l.026.002.026.002zm.276-3.88l1.94-7.764H5.572l1.984 7.764h10.692zm-9.804 6.784a.843.843 0 00.26-.62c0-.484-.408-.88-.908-.88a.891.891 0 00-.644.268.865.865 0 00-.26.62c0 .484.408.88.908.88a.905.905 0 00.644-.268zm9.632.268a.891.891 0 00.644-.268.828.828 0 00.26-.62c0-.484-.408-.88-.908-.88a.891.891 0 00-.644.268.865.865 0 00-.26.62c0 .484.408.88.908.88z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M10.63 17.197h6.009c.829 0 1.532-.283 2.092-.843.53-.53.916-1.283 1.182-2.308.2-.77 1.44-4.983 1.902-6.535a.56.56 0 00-.538-.72H7.252a365.03 365.03 0 00-.44-2.535c-.218-1.219-1.37-2.101-2.736-2.101H2.723a.562.562 0 00-.56.56c0 .308.252.56.56.56h1.353c.812 0 1.512.505 1.633 1.177.182 1.017 1.501 8.689 1.636 9.54.162 1.029.546 1.832 1.137 2.39.569.532 1.31.815 2.148.815zm-2.179-3.378c-.078-.507-.577-3.412-1.005-5.908h13.08c-.52 1.76-1.512 5.132-1.7 5.855-.535 2.072-1.504 2.31-2.187 2.31H10.63c-.557 0-1.02-.17-1.38-.51-.41-.386-.676-.971-.799-1.747zm2.18 8.022c-.502 0-.903-.143-1.194-.423-.305-.294-.46-.706-.46-1.23 0-.523.155-.935.46-1.229.291-.28.695-.423 1.193-.423.499 0 .902.143 1.194.423.305.294.459.706.459 1.23 0 .523-.154.935-.46 1.23-.29.28-.691.422-1.193.422zm-.533-1.652c0 .409.123.532.532.532.41 0 .533-.123.533-.532 0-.41-.127-.533-.533-.533-.409 0-.532.124-.532.533zm5.995 1.652c-.502 0-.902-.143-1.194-.423-.305-.294-.46-.706-.46-1.23 0-.523.155-.935.46-1.229.292-.28.695-.423 1.194-.423.498 0 .901.143 1.193.423.302.294.46.706.46 1.23 0 .523-.155.935-.46 1.23-.292.28-.692.422-1.193.422zm-.533-1.652c0 .409.124.532.533.532.409 0 .532-.123.532-.532 0-.41-.126-.533-.532-.533-.41 0-.533.124-.533.533z"
                />
            </svg>
        );
    }
};

export default IconShoppingCartRegular;
