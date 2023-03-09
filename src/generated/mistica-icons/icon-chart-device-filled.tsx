/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconChartDeviceFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M13.64 5.391H4.532a3.572 3.572 0 013.561-3.387h6.428a3.56 3.56 0 012.976 1.614c-.042 0-.078-.005-.12-.005a4.8 4.8 0 00-3.739 1.778zM8.093 22.004h6.428a3.572 3.572 0 003.56-3.388H4.534a3.575 3.575 0 003.561 3.388zm9.285-8.754a4.827 4.827 0 01-4.823-4.823c0-.7.155-1.367.425-1.97H4.524v11.08h13.572V13.19c-.237.037-.475.06-.717.06zm4.11-4.819a4.11 4.11 0 01-4.106 4.106 4.115 4.115 0 01-4.11-4.106 4.115 4.115 0 014.106-4.11 4.116 4.116 0 014.11 4.11zm-3.575-1.293L19.11 5.94a2.987 2.987 0 00-1.197-.494v1.692zm-.535 4.329c.644 0 1.239-.201 1.732-.544L17 8.81a.533.533 0 01-.155-.38V5.446a3.042 3.042 0 00-2.5 2.985 3.04 3.04 0 003.035 3.036zm3.035-3.036c0-.644-.2-1.239-.544-1.732L18.138 8.43l1.732 1.733a3.021 3.021 0 00.544-1.733z"
            />
        </svg>
    );
};

export default IconChartDeviceFilled;
