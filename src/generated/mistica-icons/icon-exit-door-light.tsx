/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconExitDoorLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.424 17.821l-2.964 2.965V5.714l2.857-2.857v10.929c0 .214.143.357.357.357s.357-.143.357-.357V2H7.96v7.857h-2L7.138 8.68a.345.345 0 000-.5.345.345 0 00-.5 0l-2.036 2.035 2.036 2.036a.386.386 0 00.25.107.386.386 0 00.25-.107.345.345 0 000-.5l-1.178-1.18h7c.214 0 .357-.142.357-.357 0-.214-.143-.357-.357-.357H8.674V2.714h8.786l-2.608 2.607a.324.324 0 00-.107.25v12.143H8.674V12c0-.214-.143-.357-.357-.357-.215 0-.357.143-.357.357v6.429h6.785v3.214c0 .143.072.286.215.321.035.036.107.036.142.036a.324.324 0 00.25-.107l3.572-3.572a.345.345 0 000-.5.345.345 0 00-.5 0z"
            />
            <path fill={fillColor} d="M18.674 16.643a.714.714 0 100-1.429.714.714 0 000 1.429z" />
        </svg>
    );
};

export default IconExitDoorLight;
