/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconVideoCameraRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.554 6.062a.713.713 0 00-.806.16l-4.672 4.857V7.2c0-.66-.498-1.198-1.11-1.198H3.11C2.498 6.002 2 6.539 2 7.2v9.598c0 .66.498 1.198 1.11 1.198h11.856c.612 0 1.11-.538 1.11-1.198v-3.88l4.672 4.858a.71.71 0 00.801.164.803.803 0 00.45-.738V6.794a.783.783 0 00-.445-.732zm-6.957 10.33H3.48V7.599h11.117v8.795zm2.736-4.397l3.192-3.317v6.634l-3.192-3.317z"
            />
        </svg>
    );
};

export default IconVideoCameraRegular;