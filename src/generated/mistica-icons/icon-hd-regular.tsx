/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconHdRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M2 6v12h20V6H2zm4.257 3.2v5.6c0 .333.246.6.555.6.308 0 .554-.267.554-.6v-2.2h2.963v2.2c0 .333.246.6.555.6.308 0 .554-.267.554-.6V9.2c0-.333-.246-.6-.554-.6-.309 0-.555.267-.555.6v2.2H7.366V9.2c0-.333-.246-.6-.554-.6-.309 0-.555.267-.555.6zM18.108 12c0-1.94-1.431-3.4-3.333-3.4h-2.223v6.8h2.223c1.902 0 3.333-1.46 3.333-3.4zm-4.442-2.201h1.11c1.289 0 2.223.926 2.223 2.201s-.934 2.201-2.223 2.201h-1.11V9.8zM3.48 16.398V7.602h17.037v8.796H3.48z"
            />
        </svg>
    );
};

export default IconHdRegular;
