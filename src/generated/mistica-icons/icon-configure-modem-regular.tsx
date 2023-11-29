/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconConfigureModemRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M9.587 10.926a.562.562 0 00.952.403c1.054-1.022 1.589-2.537 1.589-4.504 0-1.974-.538-3.493-1.6-4.515a.559.559 0 00-.793.014.559.559 0 00.014.793c.832.804 1.255 2.05 1.255 3.708 0 1.653-.42 2.897-1.246 3.7a.553.553 0 00-.171.401zM7.9 10.089a.562.562 0 01-.56-.56c0-.152.062-.298.171-.401.507-.493.765-1.266.765-2.3 0-1.034-.258-1.815-.77-2.305a.559.559 0 01-.014-.793.559.559 0 01.792-.014c.737.712 1.113 1.76 1.113 3.112 0 1.35-.373 2.395-1.104 3.107a.58.58 0 01-.392.154zm8.754 3.705c-.56 0-1.005-.15-1.316-.45-.325-.311-.488-.768-.488-1.353 0-.586.166-1.04.488-1.353.31-.3.753-.451 1.316-.451.563 0 1.003.15 1.317.45.325.311.487.768.487 1.354 0 .585-.165 1.039-.487 1.353-.314.3-.756.45-1.317.45zm0-2.907c-.764 0-1.103.339-1.103 1.104 0 .764.338 1.103 1.103 1.103.765 0 1.104-.339 1.104-1.103 0-.765-.342-1.104-1.104-1.104zm-8.496 8.056c-.29 0-.532-.09-.7-.258-.168-.168-.25-.397-.25-.686 0-.583.365-.944.95-.944.586 0 .95.361.95.944 0 .289-.084.518-.25.686-.165.168-.411.258-.7.258zm-3.442-.258c.168.168.409.258.7.258s.535-.09.7-.258c.166-.168.25-.397.25-.686 0-.583-.364-.944-.95-.944-.585 0-.95.361-.95.944 0 .289.082.518.25.686z"
            />
            <path
                fill={fillColor}
                d="M6.27 13.887h6.762l.28-.28a3.3 3.3 0 01-.126-.398h-.627a.7.7 0 01-.7-.7v-1.037a.7.7 0 01.7-.7h.63a3.3 3.3 0 01.126-.398l-.42-.42a.7.7 0 010-.991l.731-.732a.7.7 0 01.992 0l.42.42c.129-.05.263-.092.398-.125v-.63a.7.7 0 01.7-.701h1.036a.7.7 0 01.698.7v.63c.134.034.269.076.398.127l.42-.42a.7.7 0 01.991 0l.734.728a.7.7 0 010 .991l-.42.42c.05.132.093.264.126.398h.63a.7.7 0 01.7.7v1.037a.7.7 0 01-.7.7h-.63a3.281 3.281 0 01-.126.398l.42.42c.114.114.18.257.2.405.598.405 1.235 1.202 1.235 2.746v1.373c0 1.028-.278 1.835-.824 2.403-.572.594-1.403.891-2.47.891H5.44c-1.07 0-1.899-.3-2.467-.888-.547-.569-.824-1.375-.824-2.403v-1.373c0-1.028.277-1.835.824-2.403.515-.536 1.246-.83 2.176-.88v-7.07c0-.308.252-.56.56-.56.308 0 .56.252.56.56v7.062zm7.359.56a.565.565 0 01-.06.253l.553.554.77-.77c.345.207.762.333 1.244.386v1.216h1.036V14.87c.485-.05.9-.18 1.244-.386l.77.77.411-.411a.562.562 0 01.186-.455l-.636-.636c.202-.336.334-.75.387-1.243h1.216v-1.037h-1.213c-.05-.493-.182-.907-.387-1.243l.77-.77-.734-.732-.77.77c-.344-.207-.762-.333-1.244-.386V7.895h-1.036v1.216c-.485.05-.9.18-1.244.387l-.77-.77-.731.73.77.77c-.201.337-.333.751-.386 1.244h-1.216v1.037h1.216c.05.493.182.907.386 1.243l-.55.551a.554.554 0 01.018.144zm-8.188.56c-.753 0-1.31.185-1.66.547-.34.35-.51.896-.51 1.624v1.373c0 .728.17 1.274.51 1.624.35.362.907.547 1.66.547h13.112c.754 0 1.311-.185 1.662-.547.338-.35.51-.896.51-1.624v-1.373c0-.853-.228-1.44-.692-1.784l-.354.353a.7.7 0 01-.991 0l-.42-.42c-.13.05-.264.092-.398.126v.633a.7.7 0 01-.7.7h-1.037a.7.7 0 01-.7-.7v-.63a3.28 3.28 0 01-.398-.127l-.42.42a.7.7 0 01-.992 0l-.73-.73-.012-.012h-7.44z"
            />
        </svg>
    );
};

export default IconConfigureModemRegular;