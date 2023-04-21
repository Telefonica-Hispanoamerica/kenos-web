/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconAccessoriesLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M13.116 21.288a.71.71 0 01-.708.712.71.71 0 01-.708-.712.71.71 0 01.708-.712.71.71 0 01.708.712zM8.496 4.144h2.131c.588 0 1.061.476 1.061 1.068 0 .592-.473 1.068-1.061 1.068h-2.13a1.062 1.062 0 01-1.062-1.068c0-.592.473-1.068 1.061-1.068zm0 1.428h2.131a.356.356 0 000-.712h-2.13a.356.356 0 000 .712z"
            />
            <path
                fill={fillColor}
                d="M16.662 4.86v1.716a2.13 2.13 0 011.061 1.852v5.36a1.062 1.062 0 11-2.123 0v-3.216c-.596 0-1.626-.268-2.059-.86a.35.35 0 01-.072-.212V7.356a.35.35 0 01.072-.212c.441-.592 1.463-.86 2.06-.86.118 0 .242.016.353.032V4.86a2.14 2.14 0 00-2.13-2.144H8.141a2.14 2.14 0 00-2.13 2.144v13.932a2.14 2.14 0 002.13 2.144h2.131a.356.356 0 010 .712h-2.13a2.85 2.85 0 01-2.843-2.86V4.86C5.3 3.28 6.58 2 8.142 2h5.677a2.85 2.85 0 012.843 2.86zm.004 9.284c.194 0 .353-.16.353-.356V8.42c0-.784-.636-1.424-1.415-1.424-.449 0-1.125.208-1.415.492v1.88c.29.28.966.492 1.415.492h.354c.195 0 .354.16.354.356v3.572c0 .196.159.356.354.356zm5.959-7.004c-.434-.592-1.463-.86-2.06-.86a2.14 2.14 0 00-2.13 2.144v5.36a1.062 1.062 0 102.123 0v-3.216c.596 0 1.617-.268 2.059-.86a.35.35 0 00.071-.212V7.36a.283.283 0 00-.063-.22zM20.57 9.86h-.354a.356.356 0 00-.354.356v3.572a.356.356 0 01-.354.356.356.356 0 01-.354-.356v-5.36c0-.784.636-1.424 1.416-1.424.449 0 1.125.212 1.415.492v1.872c-.29.284-.966.492-1.415.492z"
            />
            <path
                fill={fillColor}
                d="M16.308 15.928a.356.356 0 00-.354.356v2.504c0 .94-.628 1.788-1.53 2.056a.36.36 0 00.095.704c.032 0 .063-.008.103-.016a2.865 2.865 0 002.036-2.736v-2.504a.352.352 0 00-.35-.364z"
            />
        </svg>
    );
};

export default IconAccessoriesLight;
