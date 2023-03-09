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

const IconRobotRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.302 9.103l-1.489-1.588h-1.628a1.77 1.77 0 00-.278-.38l-2.832-2.942C14.932 2.953 13.89 2 12.645 2c-.89 0-1.672.468-2.093 1.24l-4.799 8.392a2.972 2.972 0 00-1.554 2.607v3.993c-.973.159-1.698.997-1.698 2.043V22h9.158v-1.725c0-1.041-.72-1.88-1.698-2.043v-3.9l3.778-6.702 1.859 1.888c.039.04.086.088.139.128v2.352l1.628 1.24c.29.22.734.154.95-.137a.694.694 0 00-.134-.966l-1.085-.83v-1.31a1.655 1.655 0 001.216-1.103h.916l1.124 1.173a.7.7 0 00.956 0 .69.69 0 00-.005-.962zM4.537 19.583h5.089c.386 0 .677.295.677.688v.344H3.86v-.345c0-.392.291-.688.678-.688zM8.61 18.2H5.557v-3.96c0-.843.7-1.553 1.529-1.553s1.524.71 1.524 1.553v3.962zm-1.095-6.86l4.234-7.444c.178-.309.539-.516.895-.516.59 0 1.085.503 1.085 1.103a.94.94 0 01-.16.52l-4.152 7.528a2.879 2.879 0 00-1.902-1.192zm9.436-3.235c.07.07.105.15.105.239 0 .145-.144.308-.34.308a.322.322 0 01-.234-.105l-2.088-2.123.36-.613 2.197 2.294z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.823 12.909H13.88v.753h5.877c.697 0 1.263.549 1.263 1.224v5.74c0 .675-.566 1.224-1.263 1.224H4.243c-.697 0-1.263-.547-1.263-1.224v-5.74c0-.675.566-1.224 1.263-1.224h5.877v-.754H6.176c-.697 0-1.263-.546-1.263-1.224v-.689h-.664c-.698 0-1.263-.546-1.263-1.224v-2.89c0-.676.565-1.225 1.263-1.225h.664v-.983c0-.675.566-1.224 1.263-1.224h5.32V3.18a.613.613 0 01-.152-.39c0-.35.294-.635.656-.635.36 0 .655.286.655.636a.62.62 0 01-.151.39v.268h5.32c.697 0 1.262.546 1.262 1.224v.995h.676c.697 0 1.263.546 1.263 1.224v2.89c0 .675-.566 1.225-1.263 1.225h-.676v.677c0 .676-.565 1.225-1.263 1.225zm0-1.225V4.676H6.176v2.123l.003.028a.364.364 0 01.005.056v2.891a.353.353 0 01-.005.056.863.863 0 00-.003.028v1.83h4.543c.006 0 .011-.002.016-.004l.015-.002h2.499c.006-.002.012 0 .018 0a.027.027 0 00.013.002h4.543zm-5.207 1.975v-.753H11.38v.753h1.236zm.65 1.224a.01.01 0 00-.004 0 .05.05 0 00-.004.003c-.003.001-.007.003-.012.003h-2.498a.019.019 0 01-.008-.002.028.028 0 00-.012-.004H4.243v5.74h1.832l-.001-.017-.002-.017v-3.678c0-.675.563-1.224 1.264-1.224h9.33c.698 0 1.264.546 1.264 1.224v3.678l-.002.017a.136.136 0 00-.001.017h1.832v-5.74h-6.493zm3.4 5.706v-3.678h-9.33v3.678h9.33zM4.25 9.771h.664v-2.89H4.25v2.89zm15.513.011v-2.89h-.673v2.89h.673zm-9.687-2.644a.454.454 0 00-.462-.445.454.454 0 00-.462.445c0 .25.204.448.462.448a.456.456 0 00.462-.448zm1.177.003c0 .877-.737 1.588-1.642 1.588-.905 0-1.641-.711-1.641-1.588 0-.874.736-1.588 1.641-1.588s1.642.714 1.642 1.588zm3.596-.017a.454.454 0 00-.462-.445.454.454 0 00-.462.445c0 .244.207.446.462.446a.454.454 0 00.462-.446zm-.462-1.588c.905 0 1.639.711 1.639 1.588 0 .874-.737 1.588-1.639 1.588s-1.641-.711-1.641-1.588c.003-.877.74-1.588 1.641-1.588zm-.134 4.507a.622.622 0 00-.63-.61H10.38a.622.622 0 00-.63.61c0 .336.283.61.63.61h3.241a.62.62 0 00.63-.61z"
                />
            </svg>
        );
    }
};

export default IconRobotRegular;
