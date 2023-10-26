/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconAppointmentFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.834 7.889s.288-3.6-3.639-3.6c0 0-1.14 0-1.146.003V2.766a.613.613 0 00-.616-.611.613.613 0 00-.616.61v1.527l-7.63.003v-1.53a.613.613 0 00-.616-.61.613.613 0 00-.617.61v1.53h-1.19s-.073-.006-.2-.006c-.753 0-3.408.239-3.408 3.58v10.373s-.247 3.585 3.619 3.585h12.423s.118.014.314.014c.882 0 3.325-.3 3.325-3.619L21.834 7.89zm-3.322 12.734c-.047 0-.085-.002-.114-.003-.029 0-.047-.002-.054 0a.917.917 0 00-.152-.011H5.772c-.818 0-1.431-.202-1.812-.6-.622-.647-.577-1.683-.577-1.683.003-.028.003-.056.003-.084v-7.527h17.218l.003 7.507c0 .594 0 2.4-2.095 2.4zM14.89 14.04c.476 0 .896.381.896.815v1.406c0 .443-.409.816-.896.816h-1.364l.002 1.35c0 .479-.378.882-.823.882h-1.42c-.448 0-.824-.403-.824-.882v-1.353H9.097c-.482 0-.89-.373-.89-.815v-1.401c0-.443.408-.815.89-.815h1.364v-1.35c0-.482.378-.888.824-.888h1.414c.449 0 .824.406.824.888v1.347h1.367z"
            />
        </svg>
    );
};

export default IconAppointmentFilled;