/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconDataAlertRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.85 5.208c0-1.132-.877-1.97-2.617-2.49-1.19-.353-2.759-.555-4.406-.56-1.642 0-3.202.198-4.4.554-1.435.434-2.286 1.092-2.536 1.952v.009a2.027 2.027 0 00-.072.53v4.38a.956.956 0 00-.146.177l-5.41 10.655a.864.864 0 00-.103.451.936.936 0 00.925.925H3.1l10.737.039h.042a.16.16 0 01.039.005l.026.003c.17.008.725.008.885.008 1.636 0 3.204-.193 4.403-.554 1.74-.521 2.616-1.356 2.616-2.482V5.208zM10.784 3.874c1.076-.322 2.518-.507 4.048-.51 1.529 0 2.969.186 4.056.508.683.21 1.479.554 1.697 1.061-.176.404-.77.773-1.689 1.045-1.087.33-2.527.507-4.056.507-1.521 0-2.96-.176-4.048-.507-.932-.272-1.52-.65-1.689-1.059.177-.392.757-.764 1.681-1.044zm9.857 5.77c-.202.32-.748.771-1.748 1.068-1.087.33-2.518.507-4.047.507-1.53 0-2.97-.176-4.056-.507a5.073 5.073 0 01-1.216-.53l-.202-.408a.959.959 0 00-.347-.37V6.527c.378.233.854.44 1.417.61 1.19.362 2.754.555 4.395.555 1.644 0 3.205-.193 4.403-.554a6.224 6.224 0 001.401-.594v3.1zM7.877 17.67a.601.601 0 101.205 0v-3.89a.603.603 0 00-1.205 0v3.89zm1.216 1.552a.613.613 0 10-1.226 0 .613.613 0 001.226 0zm11.55-7.972v3.143c-.203.33-.749.781-1.749 1.072-1.087.323-2.518.508-4.047.508a17.36 17.36 0 01-2.471-.177l-1.964-3.944c.003.005.01.007.015.009a.04.04 0 01.016.008c1.194.353 2.762.555 4.404.555 1.641 0 3.201-.202 4.394-.555a6.037 6.037 0 001.401-.62zm0 7.563c0 .658-.959 1.084-1.76 1.33-1.092.328-2.535.505-4.056.505h-.079a.603.603 0 01-.013-.064.361.361 0 00-.034-.113l-1.69-3.384c.598.054 1.2.096 1.836.096 1.641 0 3.201-.202 4.394-.563a5.703 5.703 0 001.401-.62v2.813zM3.54 20.589l4.98-9.82 4.911 9.859-9.89-.04z"
            />
        </svg>
    );
};

export default IconDataAlertRegular;
