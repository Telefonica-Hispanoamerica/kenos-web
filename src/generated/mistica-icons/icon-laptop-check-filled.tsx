/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconLaptopCheckFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.213 6.942c0-.795-.644-1.442-1.426-1.442H5.217a1.44 1.44 0 00-1.425 1.442v7.947h16.426V6.942h-.005zM2 15.972v.36c0 1.192.964 2.168 2.144 2.168h15.713c1.179 0 2.143-.976 2.143-2.168v-.36H2zm9.109-2.853l-2.18-2.205a.527.527 0 010-.759.512.512 0 01.75 0l1.393 1.41 3.894-3.938a.512.512 0 01.75 0 .58.58 0 01.068.795l-4.675 4.697z"
            />
        </svg>
    );
};

export default IconLaptopCheckFilled;