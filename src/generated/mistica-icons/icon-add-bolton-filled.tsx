/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconAddBoltonFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M7 3h10l5 9-5 9H7l-5-9 5-9zm5.705 9.733h2.826a.718.718 0 00.705-.733c0-.404-.317-.733-.705-.733h-2.826v-2.94c0-.404-.316-.733-.705-.733-.389 0-.705.33-.705.734v2.939H8.469c-.389 0-.705.329-.705.733 0 .404.316.733.705.733h2.826v2.94c0 .404.316.733.705.733.389 0 .705-.33.705-.734v-2.939z"
            />
        </svg>
    );
};

export default IconAddBoltonFilled;
