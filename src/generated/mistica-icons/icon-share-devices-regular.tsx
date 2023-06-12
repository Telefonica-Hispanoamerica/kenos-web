/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconShareDevicesRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.044 2h-4.41c-1.286 0-2.293 1.097-2.293 2.5H4.587c-1.128 0-2.117 1-2.117 2.144v13.213c0 1.142.989 2.143 2.117 2.143h10.052c1.128 0 2.117-1 2.117-2.143v-3.748h2.293c1.385 0 2.469-1.02 2.469-2.322V4.5C21.513 3.147 20.385 2 19.044 2zM14.64 3.43h4.41c.555 0 1.056.512 1.056 1.07v.178H13.76V4.5c0-.53.302-1.07.88-1.07zm5.466 2.322v6.605H13.76V5.752h6.346zM4.587 5.93h7.759v1.248H3.883v-.535c0-.36.352-.713.704-.713zm0 14.64c-.357 0-.704-.352-.704-.714v-.534h11.46v.534c0 .361-.348.713-.704.713H4.587zm10.756-2.322H3.883V8.252h8.463v5.535c0 1.344.966 2.322 2.293 2.322h.704v2.139zm-.709-3.57c-.56 0-.88-.324-.88-.891v-.357H20.1v.357c.005.585-.528.891-1.056.891h-4.41zm4.121-6.412l-2.74-1.604a.782.782 0 00-.798 0 .812.812 0 00-.402.7v3.203a.806.806 0 00.803.809c.14 0 .276-.037.402-.11l2.79-1.64.085-.065a.818.818 0 00.262-.685.825.825 0 00-.402-.608zm-2.884-.448l1.963 1.147-1.963 1.152V7.818zm-4.636 4.552l-2.798-1.6a.81.81 0 00-.808.005.802.802 0 00-.397.7v3.199c0 .288.149.548.397.699a.814.814 0 00.808.005l2.848-1.637.086-.06a.813.813 0 00.266-.69.802.802 0 00-.402-.62zm-2.942-.452l2.017 1.156-2.017 1.156v-2.312z"
            />
        </svg>
    );
};

export default IconShareDevicesRegular;
