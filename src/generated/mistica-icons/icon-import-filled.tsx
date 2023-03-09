/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconImportFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.994 19.144l-5.852-5.928c-.464-.464-.608-1.216-.36-1.86.252-.608.783-.964 1.39-.964h2.144V2h5.356v8.392h2.143c.608 0 1.143.356 1.391.964.252.644.108 1.392-.355 1.856l-5.857 5.932z"
            />
            <path
                fill={fillColor}
                d="M19.845 22H4.143A2.149 2.149 0 012 19.856V12a.715.715 0 111.431 0v7.856c0 .392.32.716.716.716h15.706c.392 0 .716-.32.716-.716V12A.715.715 0 1122 12v7.856A2.167 2.167 0 0119.845 22z"
            />
        </svg>
    );
};

export default IconImportFilled;
