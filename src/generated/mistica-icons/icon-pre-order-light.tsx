/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconPreOrderLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M22 4.85a.716.716 0 11-1.432 0 .716.716 0 011.432 0zm-1.18 1.788c-.18-.036-.391.072-.427.252l-1.716 6.895H7.286L4.75 3.635c-.18-.784-.892-1.284-1.715-1.284h-.68c-.216 0-.356.144-.356.356s.144.356.356.356h.68c.5 0 .927.284 1.035.752l3.39 13.574c-.463.072-.855.32-1.179.644a2.36 2.36 0 00-.68 1.643A2.318 2.318 0 007.927 22c.607 0 1.215-.252 1.643-.68a2.36 2.36 0 00.68-1.644 2.4 2.4 0 00-.644-1.607h6.997a2.24 2.24 0 00-.644 1.607A2.318 2.318 0 0018.282 22c.607 0 1.215-.252 1.643-.68a2.36 2.36 0 00.68-1.644 2.318 2.318 0 00-2.323-2.323H8.178l-.716-2.856h11.783l1.855-7.43c.04-.18-.064-.36-.28-.429zM9.501 19.672c0 .428-.18.82-.464 1.144-.32.284-.716.464-1.143.464a1.603 1.603 0 01-1.608-1.608c0-.428.18-.82.464-1.143.32-.284.716-.464 1.144-.464A1.605 1.605 0 019.5 19.672zm9.892 1.144a1.57 1.57 0 01-1.143.464 1.603 1.603 0 01-1.608-1.608c0-.428.18-.82.464-1.143a1.57 1.57 0 011.143-.464 1.605 1.605 0 011.608 1.607c0 .428-.18.82-.464 1.144z"
            />
            <path
                fill={fillColor}
                d="M10.573 5.207c0-.216-.144-.356-.356-.356H9.36c.572-1 1.5-1.716 2.607-2a4.287 4.287 0 015.246 3.036 4.318 4.318 0 01-.428 3.251c-.572 1-1.5 1.716-2.607 2a4.293 4.293 0 01-5.25-3.036c-.072-.32-.144-.644-.144-1a.356.356 0 00-.711 0c0 .392.072.784.18 1.144.571 2.288 2.607 3.752 4.822 3.752.427 0 .855-.072 1.287-.18a5.08 5.08 0 003.035-2.324c.68-1.144.855-2.5.5-3.787-.72-2.676-3.471-4.248-6.15-3.536A5.02 5.02 0 008.75 4.423v-1c0-.216-.144-.356-.356-.356-.215 0-.355.144-.355.356v2.144h2.143c.248 0 .392-.144.392-.36z"
            />
            <path
                fill={fillColor}
                d="M13.072 3.779c-.216 0-.356.144-.356.356v3L14.25 8.67c.072.072.18.108.252.108.072 0 .18-.036.252-.108a.343.343 0 000-.5l-1.32-1.32V4.136c-.008-.212-.148-.356-.363-.356z"
            />
        </svg>
    );
};

export default IconPreOrderLight;