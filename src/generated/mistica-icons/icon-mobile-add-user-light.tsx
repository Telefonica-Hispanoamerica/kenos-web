/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconMobileAddUserLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.5 7.714c0 1.97-1.593 3.57-3.554 3.57-1.961 0-3.559-1.604-3.559-3.574 0-.508.11-.988.3-1.427H6.215v11.429h7.463a.356.356 0 010 .713H6.21v.357c0 1.38 1.115 2.5 2.49 2.5h6.397c1.375 0 2.49-1.12 2.49-2.5V12.71c0-.197.159-.357.354-.357.196 0 .355.16.355.357v6.075A3.208 3.208 0 0115.097 22H8.7c-1.767 0-3.2-1.44-3.2-3.214V5.214A3.208 3.208 0 018.7 2h6.402c1.392 0 2.575.9 3.012 2.153A3.56 3.56 0 0121.5 7.714zm-15.286-2.5v.356h8.892a3.56 3.56 0 012.262-1.376 2.485 2.485 0 00-2.266-1.48H8.704a2.495 2.495 0 00-2.49 2.5zm11.732-.357a2.852 2.852 0 00-2.844 2.857 2.852 2.852 0 002.844 2.857c1.57 0 2.844-1.28 2.844-2.857a2.852 2.852 0 00-2.844-2.857zm-2.134 2.857c0 .197.159.357.355.357h1.42v1.426c0 .197.159.357.354.357.196 0 .355-.16.355-.357V8.071h1.42a.356.356 0 000-.713h-1.42V5.93a.356.356 0 00-.355-.356.356.356 0 00-.354.356v1.427h-1.42a.356.356 0 00-.355.356zm-7.823 8.75c0 .197.16.357.355.357.196 0 .355-.16.355-.357 0-1.138 1.197-1.966 2.844-1.966 1.675 0 2.844.81 2.844 1.966 0 .197.16.357.355.357.196 0 .355-.16.355-.357 0-1.166-.8-2.07-2.066-2.464a2.499 2.499 0 00-1.488-4.498 2.495 2.495 0 00-2.489 2.5c0 .823.396 1.55 1.01 2.007-1.256.393-2.075 1.308-2.075 2.455zm3.559-6.254c.983 0 1.774.805 1.774 1.788s-.796 1.787-1.779 1.787a1.782 1.782 0 01-1.775-1.787c0-.983.797-1.788 1.78-1.788z"
            />
        </svg>
    );
};

export default IconMobileAddUserLight;
