/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconPrinterLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M22 14.483c0 .403-.314.73-.701.73a.716.716 0 01-.702-.73c0-.402.314-.729.701-.729.388 0 .702.327.702.73z"
            />
            <path
                fill={fillColor}
                d="M21.334 16.383h-4.57V12H6.92v4.383H2.702V7.98c0-.62.457-1.096 1.054-1.096h16.167c.598 0 1.055.475 1.055 1.096v4.384c0 .22.14.366.352.366.213 0 .353-.146.353-.366V7.979c0-1.025-.773-1.825-1.756-1.825h-3.162V2.5H6.919v3.654H3.756C2.774 6.154 2 6.958 2 7.98v9.134h4.923V21.5h9.841v-4.383h4.57c.213 0 .353-.146.353-.367a.36.36 0 00-.353-.367zM7.624 3.23h8.439v2.925H7.624V3.23zm0 17.542V12.73h8.439v8.042H7.624z"
            />
        </svg>
    );
};

export default IconPrinterLight;
