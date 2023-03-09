/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCallLandlineFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.553 4.063l-1.382-1.375c-.898-.882-2.305-.922-3.134-.084l-2.08 2.088c-.381.39-.594.91-.594 1.472 0 .61.261 1.219.714 1.664l1.455 1.43c.236.237.356.562.364.96.008 1.021-.745 2.405-2.008 3.671-1.266 1.26-2.64 2.01-3.662 2.01h-.009c-.404 0-.72-.121-.957-.366l-1.431-1.455a2.345 2.345 0 00-1.663-.714h-.008c-.561 0-1.074.213-1.455.594l-2.1 2.084c-.838.83-.797 2.233.088 3.136l1.375 1.39c.918.927 2.176 1.424 3.63 1.432h.033c2.793 0 6.188-1.78 9.326-4.9l.048-.047C20.229 13.9 22.008 10.486 22 7.69c-.016-1.447-.513-2.71-1.447-3.628z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.63 21.826c-.866 0-1.858-.213-2.925-.639-2.182-.87-4.572-2.566-6.908-4.902l-.005-.005-.076-.073-.005-.006C5.374 13.865 3.68 11.48 2.809 9.294c-.832-2.09-.852-3.874-.056-5.028l.028-.042.068-.09c.135-.178.379-.498.632-.74.868-.829 1.753-1.24 2.633-1.224.846.017 1.683.432 2.487 1.236.303.297.569.633.785 1 .431.694.588 1.412.465 2.131-.124.72-.524 1.423-1.197 2.096a5.71 5.71 0 01-.495.442c-.065.118-.026.488.495 1.25.603.88 1.611 1.918 2.317 2.624l.084.084c.706.706 1.745 1.712 2.625 2.317.759.52 1.131.56 1.249.495.137-.173.283-.338.443-.495.672-.672 1.375-1.073 2.095-1.196.72-.124 1.437.033 2.131.465.367.218.7.481 1 .787.804.804 1.219 1.641 1.236 2.487.017.877-.395 1.765-1.227 2.633a6.29 6.29 0 01-.813.68l-.02.015-.016.011c-.008.006-.017.011-.025.02-.563.38-1.277.574-2.104.574z"
                />
            </svg>
        );
    }
};

export default IconCallLandlineFilled;
