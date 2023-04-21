/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconCancellationLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.35 3.804V2H8.56l-.106.104L3.35 7.21V22h14.643a.357.357 0 100-.714H4.064V7.714h5v-5h8.572v1.09a4.643 4.643 0 10.714 0zM4.568 7L8.35 3.218V7H4.568zm13.425 5.357a3.929 3.929 0 110-7.858 3.929 3.929 0 010 7.858z"
            />
            <path
                fill={fillColor}
                d="M19.675 6.746a.357.357 0 00-.507 0l-1.175 1.179-1.175-1.179a.358.358 0 10-.507.508l1.178 1.175-1.178 1.175a.356.356 0 000 .507.358.358 0 00.507 0l1.175-1.179 1.175 1.179a.357.357 0 00.613-.254.358.358 0 00-.106-.253l-1.178-1.175 1.178-1.175a.36.36 0 00.078-.391.36.36 0 00-.078-.117zm-1.682 13.468a.714.714 0 100-1.428.714.714 0 000 1.428zm.357-2.857v-3.214a.357.357 0 10-.714 0v3.214a.357.357 0 10.714 0zM14.78 17H6.922a.357.357 0 100 .714h7.857a.357.357 0 100-.714zm0-3.571H6.922a.357.357 0 100 .714h7.857a.357.357 0 000-.714z"
            />
        </svg>
    );
};

export default IconCancellationLight;
