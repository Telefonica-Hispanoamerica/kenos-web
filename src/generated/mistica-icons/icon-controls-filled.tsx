/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '@hooks/hooks';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconControlsFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.523 13.995V2.528c0-.28-.24-.528-.52-.528a.537.537 0 00-.522.528v11.467a2.281 2.281 0 00-1.733 2.211 2.28 2.28 0 001.733 2.211v3.051c0 .28.24.528.521.528a.537.537 0 00.521-.528v-3.05a2.281 2.281 0 001.733-2.212 2.28 2.28 0 00-1.733-2.21zm6.924-4.806a2.253 2.253 0 00-1.733-2.211v-4.45c0-.28-.24-.528-.52-.528a.537.537 0 00-.522.528v4.454a2.281 2.281 0 00-1.733 2.211 2.28 2.28 0 001.733 2.211v10.068c0 .28.241.528.521.528a.537.537 0 00.521-.528V11.4a2.253 2.253 0 001.733-2.21zm-10.379 0a2.253 2.253 0 00-1.733-2.211v-4.45c0-.28-.24-.528-.521-.528a.537.537 0 00-.521.528v4.454A2.281 2.281 0 004.56 9.193a2.28 2.28 0 001.733 2.211v10.068c0 .28.24.528.521.528a.537.537 0 00.521-.528V11.4a2.253 2.253 0 001.733-2.21z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2.797 6.284a.597.597 0 01-.602-.591c0-.325.269-.588.602-.588h1.05c.07-.345.2-.675.396-.984a2.996 2.996 0 011.88-1.3 3.022 3.022 0 012.265.382 2.912 2.912 0 011.328 1.84.155.155 0 01.004.037c0 .008 0 .017.002.025h11.504c.33 0 .602.266.602.59a.597.597 0 01-.602.592H9.725c-.07.35-.205.68-.398.98a2.967 2.967 0 01-1.88 1.3 3.022 3.022 0 01-2.266-.381 2.938 2.938 0 01-1.328-1.84.219.219 0 01-.006-.042l-.002-.02H2.797zm18.406 5.132c.334 0 .603.263.603.59a.595.595 0 01-.603.589h-1.08c-.278 1.342-1.494 2.356-2.945 2.356-1.45 0-2.664-1.014-2.944-2.356H2.772a.597.597 0 01-.602-.591c0-.325.269-.591.602-.591h11.46c.28-1.342 1.493-2.356 2.944-2.356 1.45 0 2.666 1.014 2.944 2.356h1.083v.003zm.6 6.887a.595.595 0 00-.602-.59l-8.782.002c-.28-1.341-1.493-2.355-2.944-2.355-1.45 0-2.664 1.014-2.944 2.355H2.772a.595.595 0 00-.602.588.598.598 0 00.602.592h3.76c.28 1.341 1.492 2.355 2.943 2.355s2.664-1.014 2.944-2.355h8.782a.597.597 0 00.602-.591z"
                />
            </svg>
        );
    }
};

export default IconControlsFilled;
