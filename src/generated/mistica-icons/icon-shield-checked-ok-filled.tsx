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

const IconShieldCheckedOkFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.26 2.114c.181.175 3.105 3.003 6.883 3.003.201 0 .361.164.357.366v9.175c0 3.283-2.418 5.68-7.39 7.323A.3.3 0 0112 22a.3.3 0 01-.11-.019c-4.972-1.644-7.39-4.04-7.39-7.323V5.483c0-.202.16-.366.356-.366 3.88 0 6.865-2.983 6.893-3.011a.352.352 0 01.51.008zm-2.047 13.864l6.092-6.065a.565.565 0 00.014-.78.525.525 0 00-.759-.014l-5.333 5.313-1.947-2.001a.525.525 0 00-.759 0 .56.56 0 000 .78l2.692 2.767z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.608 5.328V5.3l-.009-.076a.62.62 0 00-.711-.51c-1.633.258-2.488-.313-3.566-1.036h-.001c-1.062-.712-2.26-1.515-4.324-1.518h-.006c-2.053 0-3.252.798-4.31 1.5l-.017.013-.01.005c-1.073.72-1.925 1.29-3.534 1.037a.595.595 0 00-.74.582c-.002.27-.019 6.617.457 9.362.622 3.61 7.605 6.986 7.902 7.129.163.075.35.075.51 0 .297-.14 7.289-3.516 7.91-7.127.455-2.682.449-8.806.449-9.333zM8.5 11.858l2.006 2.027s4.98-5.041 4.983-5.039l.008-.008a.592.592 0 01.835.008.607.607 0 010 .852l-5.406 5.468-.003.002a.593.593 0 01-.838-.002l-2.428-2.457a.607.607 0 010-.851l.008-.009a.592.592 0 01.835.008z"
                />
            </svg>
        );
    }
};

export default IconShieldCheckedOkFilled;
