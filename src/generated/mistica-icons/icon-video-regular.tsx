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

const IconVideoRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2 12c0 5.517 4.488 10 10 10s10-4.488 10-10S17.512 2 12 2 2 6.484 2 12zm1.43 0c0-4.726 3.844-8.57 8.57-8.57 4.726 0 8.57 3.844 8.57 8.57 0 4.726-3.844 8.57-8.57 8.57-4.726 0-8.57-3.844-8.57-8.57zm5.535 5.713A.71.71 0 018.252 17V7c0-.256.137-.494.357-.617a.708.708 0 01.717.005l8.57 4.995a.714.714 0 010 1.234l-8.57 5a.737.737 0 01-.36.096zm.713-1.96L16.118 12l-6.44-3.757v7.51z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.834 6.677s.288-3.7-3.639-3.7c-3.927 0-12.437.005-12.437.005s-.07-.005-.196-.005c-.754 0-3.41.244-3.41 3.68 0 4.003.004 10.664.004 10.664s-.247 3.687 3.619 3.687h12.423s.12.016.314.016c.882 0 3.324-.31 3.324-3.722l-.002-10.625zM6.458 19.753V4.235l4.167-.003h.002l6.907-.003v15.524H6.458zM4.237 4.585c.333-.216.706-.297.992-.33V6.39h-1.83c.073-1.294.64-1.68.838-1.806zm16.361 13.067c-.039.74-.288 1.977-1.834 2.1v-2.1h1.834zM3.962 19.137c-.43-.463-.54-1.113-.568-1.468h1.835v2.047c-.55-.075-.972-.266-1.267-.58zM20.047 4.859c.453.488.54 1.182.557 1.518H18.76V4.268c.56.079.991.275 1.286.591zM18.764 16.4v-2.086h1.843V16.4h-1.843zm1.84-6.68h-1.84V7.63h1.84v2.09zm-1.84 3.339v-2.09h1.84v2.09h-1.84zM3.385 16.417V14.33H5.23v2.087H3.385zm1.844-6.69H3.385v-2.08H5.23v2.08zM3.385 10.98H5.23v2.095H3.385V10.98zm6.359 3.602V9.417l4.392 2.582-4.392 2.583zm6.238-2.583a.63.63 0 00-.308-.543L9.436 7.789a.607.607 0 00-.616 0 .63.63 0 00-.309.544v7.333a.63.63 0 00.309.543.607.607 0 00.616 0l6.238-3.666a.63.63 0 00.308-.544z"
                />
            </svg>
        );
    }
};

export default IconVideoRegular;
