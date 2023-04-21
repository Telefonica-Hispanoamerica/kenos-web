/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconCloudRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M6.208 18.966h10.42c2.874 0 5.219-2.334 5.219-5.21A5.22 5.22 0 0016.63 8.54h-.059a6.224 6.224 0 00-5.594-3.51c-1.658 0-3.165.636-4.238 1.793-1.005 1.08-1.58 2.563-1.633 4.19a4.241 4.241 0 00-2.045 1.395 3.95 3.95 0 00-.907 2.504 4.06 4.06 0 004.053 4.054zM9.048 6.53a4.84 4.84 0 011.928-.383 5.098 5.098 0 014.647 3.008l.002.008c.185.468.56.507.712.502.02-.002.041-.002.061-.003l.062-.003a4.1 4.1 0 014.263 4.09 4.1 4.1 0 01-4.095 4.095H6.208a2.937 2.937 0 01-2.933-2.933c0-.815.359-1.431.656-1.8.409-.505.96-.875 1.552-1.043.61-.17.739-.535.739-.812 0-1.44.473-2.742 1.336-3.672.418-.451.925-.81 1.49-1.054z"
            />
        </svg>
    );
};

export default IconCloudRegular;
