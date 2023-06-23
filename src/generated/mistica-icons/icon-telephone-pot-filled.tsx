/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconTelephonePotFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M15.641 9.977v-1.12c0-.76-1.5-1.593-3.607-1.593h-.073c-2.144 0-3.607.833-3.607 1.592v1.12c0 1.413-1.106 2.57-2.427 2.57H4.139V17.5c0 1.7.928 3 2.144 3h11.429c1.216 0 2.144-1.338 2.144-3v-4.954h-1.787c-1.322-.004-2.391-1.162-2.428-2.57zm-5.609 7.99c-.677 0-1.248-.578-1.248-1.263 0-.686.571-1.264 1.248-1.264s1.248.579 1.248 1.264-.567 1.264-1.248 1.264zm-1.248-4.879c0-.685.571-1.264 1.248-1.264s1.248.579 1.248 1.264-.567 1.264-1.248 1.264c-.677 0-1.248-.579-1.248-1.264zm5.18 4.88c-.677 0-1.249-.58-1.249-1.264 0-.686.572-1.264 1.248-1.264.677 0 1.248.579 1.248 1.264s-.571 1.264-1.248 1.264zm-1.249-4.88c0-.685.572-1.264 1.248-1.264.677 0 1.248.579 1.248 1.264s-.571 1.264-1.248 1.264c-.676 0-1.248-.579-1.248-1.264z"
            />
            <path
                fill={fillColor}
                d="M22 8.926c0-.653-.178-1.232-.466-1.773C20.318 4.912 16.82 3.5 12.07 3.5h-.142c-4.75 0-8.251 1.412-9.463 3.616C2.183 7.657 2 8.273 2 8.889v1.05c0 .436.142.834.43 1.121.141.144.283.218.466.287a.908.908 0 00.43.107H5.93c.75 0 1.322-.653 1.358-1.482v-1.12c0-1.519 2.034-2.676 4.677-2.676h.073c2.679 0 4.676 1.157 4.676 2.676v1.125c0 .833.608 1.481 1.322 1.481h2.605c.142 0 .284-.037.43-.074.178-.074.32-.18.466-.287.284-.287.43-.685.43-1.12L22 8.926z"
            />
        </svg>
    );
};

export default IconTelephonePotFilled;
