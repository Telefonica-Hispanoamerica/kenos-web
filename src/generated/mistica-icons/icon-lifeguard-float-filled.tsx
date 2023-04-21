/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconLifeguardFloatFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.665 2.155c.255 0 .518.003.745.011 1.93.045 9.431.807 9.431 9.86 0 9.073-7.512 9.776-9.392 9.813-.3.005-.602.005-.902.002-1.975-.03-9.392-.745-9.392-9.874 0-9.117 7.347-9.795 9.325-9.812h.185zM9.63 6.48l-.577-2.784c-2.1.526-4.507 1.924-5.35 5.442l2.75.569C7.06 7.785 8.41 6.889 9.632 6.48zm2.283 10.157c.115 0 .23 0 .328-.003 3.969-.07 4.395-3.252 4.395-4.619s-.432-4.555-4.423-4.65a19.193 19.193 0 00-.418-.005h-.098c-1.621.014-4.338.633-4.338 4.621 0 2.236.817 3.642 2.504 4.297a5.681 5.681 0 001.882.359h.168zm2.423.86l.572 2.773c2.086-.538 4.459-1.922 5.341-5.291l-2.756-.57c-.633 1.813-1.96 2.679-3.157 3.088zm-5.25 2.784l.575-2.779a1.993 1.993 0 00-.095-.03c-.048-.014-.097-.028-.146-.048-1.129-.437-2.316-1.317-2.907-3.014l-2.76.569c.888 3.383 3.253 4.767 5.334 5.302zm5.841-16.52l-.571 2.764c1.213.428 2.549 1.325 3.165 3.185l2.745-.566c-.863-3.404-3.238-4.818-5.339-5.384z"
            />
        </svg>
    );
};

export default IconLifeguardFloatFilled;
