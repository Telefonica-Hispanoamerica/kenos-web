/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconRoadSignRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.841 12.001c0-6.443-3.406-9.846-9.846-9.846-6.437 0-9.84 3.403-9.84 9.846 0 6.437 3.403 9.84 9.84 9.84 6.443 0 9.846-3.403 9.846-9.84zm-1.207 0c0 5.728-2.908 8.633-8.639 8.633-5.728 0-8.633-2.905-8.633-8.633 0-5.731 2.905-8.639 8.633-8.639 5.734 0 8.639 2.908 8.639 8.639zm-6.706.014h-.003v-.482a.705.705 0 00-.664-.653h-1.596a.603.603 0 00-.603.603v5.145H9.37V9.01h3.894c.333 0 .664-.322.664-.655v-.487l2.143 2.075-2.143 2.073zm3.252-2.68l-3.079-2.981a.837.837 0 00-.896-.107.828.828 0 00-.482.754v.793H9.312A1.142 1.142 0 008.169 8.94v8.285c0 .333.269.602.602.602h2.9c.33 0 .601-.269.601-.602v-5.143h.451v.79c0 .325.182.614.477.754.296.143.652.098.857-.073a.387.387 0 00.08-.062.181.181 0 00.012-.011l3.003-2.905a.825.825 0 00.294-.633.812.812 0 00-.266-.608z"
            />
        </svg>
    );
};

export default IconRoadSignRegular;
