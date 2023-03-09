/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconRoadSignFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.841 12.001c0-6.44-3.406-9.846-9.846-9.846-6.437 0-9.84 3.406-9.84 9.846 0 6.437 3.403 9.84 9.84 9.84 6.44 0 9.846-3.403 9.846-9.84zm-8.627-5.854a.656.656 0 01.703.084l3.123 3.025c.132.12.21.291.207.47a.657.657 0 01-.232.493l-3.068 2.97c-.232.19-.5.22-.733.112a.647.647 0 01-.37-.583v-1.011h-.868v5.448a.41.41 0 01-.41.409h-2.96a.41.41 0 01-.41-.409V8.71a.942.942 0 01.28-.681.965.965 0 01.682-.28h3.683v-1.02c0-.252.146-.479.373-.582z"
            />
        </svg>
    );
};

export default IconRoadSignFilled;
