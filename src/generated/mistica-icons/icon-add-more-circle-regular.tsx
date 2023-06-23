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

const IconAddMoreCircleRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^blau/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12.654 11.321h5.254a.679.679 0 010 1.357h-5.254v5.254a.679.679 0 11-1.357 0v-5.254H6.044a.678.678 0 110-1.357h5.253V6.068a.679.679 0 011.357 0v5.253z"
                />
                <path
                    fill={fillColor}
                    d="M1.976 12c0 5.327 4.673 10 10 10s10-4.673 10-10-4.673-10-10-10-10 4.673-10 10zm1.358 0c0-4.604 4.038-8.643 8.642-8.643 4.604 0 8.642 4.039 8.642 8.643 0 4.604-4.038 8.642-8.642 8.642-4.604 0-8.642-4.038-8.642-8.642z"
                />
            </svg>
        );
    } else if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.283 5.94a.722.722 0 01.715-.716.722.722 0 01.716.715v5.346l5.34.006a.722.722 0 01.716.715c0 .198-.08.38-.207.507a.726.726 0 01-.506.206H12.71v5.346a.702.702 0 01-.713.713.722.722 0 01-.715-.716v-5.346H5.937a.722.722 0 01-.716-.715.722.722 0 01.716-.716h5.346V5.94z"
                />
                <path
                    fill={fillColor}
                    d="M12 2C6.484 2 2 6.484 2 12s4.484 10 10 10 10-4.484 10-10S17.516 2 12 2zm0 18.576c-4.728 0-8.576-3.848-8.576-8.576 0-4.728 3.848-8.576 8.576-8.576 4.728 0 8.576 3.848 8.576 8.576 0 4.728-3.848 8.576-8.576 8.576z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M23 12.028C23 1.914 14.617 1.063 12.457 1.01a35.08 35.08 0 00-.82-.009h-.22C9.208 1.019 1 1.776 1 11.966c0 10.201 8.286 11 10.496 11.03.119.004.238.004.357.004.228 0 .454-.003.651-.006C14.601 22.953 23 22.167 23 12.028zM12.476 21.62c-.32.007-.639.007-.958.004-2.749-.038-9.14-1.058-9.14-9.657 0-8.587 6.329-9.567 9.052-9.592h.207c.263 0 .526.003.789.01 2.764.065 9.196 1.14 9.196 9.644 0 8.505-6.395 9.541-9.146 9.591zm5.004-10.34a.689.689 0 010 1.377h-4.799v4.808a.689.689 0 01-1.377 0v-4.81h-4.79a.689.689 0 010-1.378h4.79V6.534a.689.689 0 011.377 0v4.746h4.8z"
                />
            </svg>
        );
    }
};

export default IconAddMoreCircleRegular;
