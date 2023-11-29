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

const IconFootballBallLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.959 11.152a.323.323 0 01.009.114c.018.243.032.485.032.732 0 1.897-.535 3.74-1.54 5.335a.36.36 0 01-.494.11.36.36 0 01-.11-.494 8.93 8.93 0 00.663-1.258l-.997-2.276-2.688-.42-3.661 3.675.228 2.775 2.286 1.07h.003l.001.002.005.002c.43-.188.85-.407 1.253-.658a.355.355 0 01.493.11.354.354 0 01-.11.493A9.978 9.978 0 0112.003 22c-.205 0-.411-.01-.612-.023l-.008.002-.008.002-.008.002a.135.135 0 01-.04.008.328.328 0 01-.133-.028C6.055 21.547 2 17.241 2 11.998a9.993 9.993 0 014.617-8.42.355.355 0 01.178-.115A9.921 9.921 0 0111.998 2c.772 0 1.527.087 2.249.256a.38.38 0 01.137.032c4.1 1.006 7.214 4.549 7.575 8.864zm-2.263 1.568l1.545-1.61a9.295 9.295 0 00-3.159-6.12l-2.354.457-1.138 2.24 2.354 4.603 2.752.43zm-3.867-8.023l1.504-.297a9.367 9.367 0 00-2.355-1.198l.81 1.463c.013.01.027.018.04.032zm-.677.297l-1.138-2.061a9.469 9.469 0 00-2.02-.22 9.223 9.223 0 00-4.787 1.33l-.274 2.231 1.91 1.902 5.107-.814 1.202-2.368zm-8.727-.42a9.533 9.533 0 00-1.87 1.87l1.678-.325.192-1.545zm.032 2.23l-2.455.476a9.238 9.238 0 00-1.047 6.811l2.09.974L7.54 13.79l.8-5.107-1.884-1.878zM4.418 17.352l.206-1.692-1.413-.658c.293.846.7 1.632 1.207 2.35zm.92-1.632l-.298 2.418a9.23 9.23 0 006.149 3.104l1.504-1.609-.238-2.875-4.594-2.332-2.524 1.294zm6.806 5.559a9.299 9.299 0 002.61-.416l-1.545-.723-1.065 1.139zm-3.886-7.452l4.471 2.268 3.543-3.548-2.286-4.466-4.95.79-.778 4.956zm11.955-.612l.662 1.513a9.39 9.39 0 00.407-2.624l-1.07 1.11z"
                />
                <path fill={fillColor} d="M18.782 19.495a.713.713 0 100-1.426.713.713 0 000 1.426z" />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.546 2.156c.3-.006.6-.006.9-.003 1.977.028 9.391.742 9.391 9.871 0 9.118-7.344 9.796-9.322 9.813h-.196c-.252 0-.512-.003-.736-.009-1.928-.047-9.432-.81-9.432-9.86 0-9.073 7.516-9.779 9.395-9.812zm.885.818a30.313 30.313 0 00-.874.003c-.899.02-1.792.15-2.66.392.053.059.106.117.17.165l2.188 1.591c.42.314 1.064.311 1.473.003l2.19-1.591c.056-.04.1-.088.145-.137l.038-.04a11.078 11.078 0 00-2.67-.386zm-4.358.66c-1.017.385-2.067.99-2.95 1.936.205.219.362.482.454.768l.835 2.569c.098.29.123.607.081.921l1.485.686a2.08 2.08 0 01.61-.694l2.185-1.586c.241-.176.518-.291.812-.341V6.139a2.071 2.071 0 01-.815-.356L8.588 4.198a2.016 2.016 0 01-.515-.563zM4.795 6.59a1.267 1.267 0 00-.198-.38c-.964 1.316-1.625 3.162-1.625 5.753 0 .034.002.066.004.098s.004.063.004.095l.005-.003a.015.015 0 00.004-.003l2.187-1.588a1.248 1.248 0 00.457-1.398L4.795 6.59zm7.524 14.426h.188c.272-.003.686-.025 1.177-.084.008-.185.039-.37.095-.546l.829-2.566a2.04 2.04 0 01.468-.785l-.712-1.16a2.068 2.068 0 01-1.022.275H10.61a2.01 2.01 0 01-1.06-.302l-.764 1.157c.213.22.37.487.462.778l.835 2.563a2.1 2.1 0 01.095.527 11.13 11.13 0 001.423.134c.219.006.474.009.717.009zm2.205-.219c.913-.187 1.969-.526 2.955-1.148a6.907 6.907 0 002.28-2.342 1.229 1.229 0 00-.46-.098h-2.708a1.342 1.342 0 00-.74.238c-.22.157-.38.378-.456.622l-.838 2.574a.885.885 0 00-.023.102l-.01.052zm-10.275-3.59a7.105 7.105 0 002.334 2.372c.913.574 1.882.913 2.745 1.12a.42.42 0 01-.008-.042c-.003-.019-.005-.038-.012-.056l-.837-2.571a1.235 1.235 0 00-.457-.63c-.218-.157-.485-.216-.734-.238H4.574c-.123 0-.227.02-.325.044zM18.882 5.572a6.895 6.895 0 00-1.434-1.199 8.325 8.325 0 00-1.524-.748c-.14.219-.305.423-.524.578l-2.18 1.586a1.987 1.987 0 01-.81.353v1.753c.294.05.574.168.815.345l2.18 1.583c.243.179.447.406.593.672l1.451-.61a2.03 2.03 0 01.084-.917l.835-2.563c.1-.314.28-.6.515-.832zm-9.526 8.61l.092.284c.174.524.667.89 1.19.86h2.71c.545 0 1.027-.353 1.195-.871l.838-2.566a1.247 1.247 0 00-.46-1.406l-2.187-1.589c-.423-.313-1.067-.31-1.473-.002l-2.191 1.59a1.25 1.25 0 00-.46 1.407l.743 2.294h.003zm-1.233 2.343s.835-1.264.838-1.264l-.06-.083c-.041-.055-.082-.11-.114-.174h-.025l-.93-2.86a2.058 2.058 0 01-.09-.835l-1.524-.703a2.048 2.048 0 01-.565.625l-2.18 1.585c-.14.1-.294.182-.453.246.098 1.289.375 2.435.834 3.423.233-.086.477-.137.723-.142h2.697c.278-.017.575.053.85.182zm6.871-1.196l.76 1.238c.266-.11.551-.171.843-.188h2.705c.295 0 .583.064.852.188.448-.986.72-2.132.818-3.426a2.107 2.107 0 01-.504-.263l-2.185-1.586a2.037 2.037 0 01-.569-.636l-1.47.62c.03.285.008.582-.087.868l-.835 2.566a2.08 2.08 0 01-.328.619zm6.014-3.079l.004-.076c.002-.05.005-.098.005-.148 0-2.4-.55-4.333-1.616-5.807a1.255 1.255 0 00-.258.437l-.835 2.572a1.226 1.226 0 000 .776c.081.252.238.47.454.624l2.19 1.588c.012.01.026.018.04.025a.927.927 0 01.016.01z"
                />
            </svg>
        );
    }
};

export default IconFootballBallLight;