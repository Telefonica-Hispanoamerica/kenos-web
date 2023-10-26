/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';
import {useTheme} from '@hooks/hooks';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconRewindRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2 12c0 5.517 4.488 10 10 10s10-4.488 10-10S17.512 2 12 2 2 6.484 2 12zm1.43 0c0-4.726 3.844-8.57 8.57-8.57 4.726 0 8.57 3.844 8.57 8.57 0 4.726-3.844 8.57-8.57 8.57-4.726 0-8.57-3.844-8.57-8.57zm13.716 5.146a.715.715 0 000-1.01L13.01 12l4.136-4.136a.715.715 0 00-1.01-1.01l-4.639 4.643a.714.714 0 000 1.01l4.644 4.644a.702.702 0 001.005-.005zm-6.07-1.01a.714.714 0 010 1.01.718.718 0 01-.507.215.695.695 0 01-.502-.21l-4.644-4.644a.714.714 0 010-1.01l4.644-4.643a.714.714 0 011.01 1.01L6.94 12l4.136 4.136z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M10.727 15.158a.55.55 0 00.286.079.565.565 0 00.56-.56v-2.594a.568.568 0 00.134.112l4.99 2.969a.55.55 0 00.285.078c.095 0 .19-.025.277-.072a.565.565 0 00.283-.488V8.716a.558.558 0 00-.849-.48l-4.989 2.998a.553.553 0 00-.131.11V8.71a.558.558 0 00-.849-.479l-4.989 2.997a.564.564 0 00-.271.482c0 .196.106.378.274.48l4.989 2.968zm-.275-1.465l-3.336-1.988 3.336-2.003v3.991zm2.63-1.983l3.34-2.005v3.991l-3.34-1.986z"
                />
                <path
                    fill={fillColor}
                    d="M4.763 19.424c1.673 1.611 4.107 2.43 7.236 2.43 3.128 0 5.563-.816 7.238-2.427 1.736-1.672 2.616-4.17 2.616-7.423 0-3.255-.88-5.75-2.616-7.425-1.675-1.611-4.11-2.429-7.238-2.429-3.13 0-5.563.818-7.236 2.426C3.03 6.25 2.15 8.749 2.15 12.002c0 3.254.88 5.75 2.613 7.422zm-1.523-7.42c0-5.815 2.946-8.764 8.759-8.764 5.815 0 8.761 2.95 8.764 8.764 0 5.813-2.95 8.76-8.764 8.76-5.813 0-8.76-2.947-8.76-8.76z"
                />
            </svg>
        );
    }
};

export default IconRewindRegular;