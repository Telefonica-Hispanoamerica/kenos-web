/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconTrendUpLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.837 5.442v3.675c0 .23-.193.412-.423.412a.414.414 0 01-.423-.406V6.615l-5.972 8.28a.44.44 0 01-.515.14l-7.53-3.226-4.028 6.958a.446.446 0 01-.582.157.414.414 0 01-.16-.563l4.218-7.28a.427.427 0 01.544-.174l7.554 3.238 5.98-8.289h-2.817a.424.424 0 01-.423-.414.418.418 0 01.423-.412h3.731c.23 0 .423.18.423.412z"
            />
        </svg>
    );
};

export default IconTrendUpLight;
