/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconArrowLineUpLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12.38 19.529V5.518l6.783 6.448a.47.47 0 00.829-.208.477.477 0 00-.19-.473L12.23 4.084a.128.128 0 00-.066-.048.414.414 0 00-.075 0 .463.463 0 00-.357 0 .414.414 0 00-.075 0 .263.263 0 00-.075.048l-7.43 7.069a.454.454 0 00-.15.35.46.46 0 00.79.33l6.65-6.315v14.01c0 .26.21.472.47.472a.472.472 0 00.469-.471c-.003 0-.003 0 0 0z"
            />
        </svg>
    );
};

export default IconArrowLineUpLight;
