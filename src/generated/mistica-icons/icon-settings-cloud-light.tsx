/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconSettingsCloudLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.837 13.852c0-4.216-3.28-4.922-4.697-5.028-1.176-3.605-5.26-3.793-6.084-3.793-1.059 0-6.291.286-6.403 5.877-1.05.381-2.502 1.364-2.502 3.885 0 3.084 2.185 4.182 4.23 4.182l10.286-.056c.862 0 5.17-.244 5.17-5.067zm-.823-.003c0 3.947-3.328 4.252-4.35 4.252l-10.291.056c-1.023 0-3.404-.327-3.404-3.367 0-1.705.742-2.781 2.207-3.196.18-.047.3-.21.3-.392l-.005-.112c0-4.865 4.271-5.244 5.582-5.244.74 0 4.485.168 5.376 3.474a.413.413 0 00.386.302c1.263.034 4.199.518 4.199 4.227zm-9.02-.246c-.764 0-1.12-.356-1.12-1.112 0-.762.356-1.115 1.12-1.115.765 0 1.12.356 1.12 1.115s-.355 1.112-1.12 1.112zm1.942-1.115c0-1.207-.726-1.93-1.942-1.93-1.215 0-1.94.723-1.94 1.93 0 1.207.725 1.93 1.94 1.93 1.216 0 1.942-.723 1.942-1.93zm.843.277a.42.42 0 00-.412.345c-.045.269-.118.51-.221.714a.405.405 0 00.078.47l.546.522-.414.434-.546-.54a.42.42 0 00-.474-.08c-.221.107-.45.18-.723.222a.41.41 0 00-.347.403v.72l-.557.02v-.731a.41.41 0 00-.348-.404 2.493 2.493 0 01-.72-.22.414.414 0 00-.473.078l-.521.54-.437-.412.543-.54a.411.411 0 00.068-.49c-.082-.143-.166-.426-.21-.7a.41.41 0 00-.407-.345l-.714.02-.02-.575h.737a.407.407 0 00.406-.342c.045-.277.132-.557.21-.7a.403.403 0 00-.067-.49l-.543-.518.414-.434.547.54a.41.41 0 00.473.079c.207-.101.448-.177.72-.219a.407.407 0 00.347-.403l-.02-.712.578-.022v.73a.41.41 0 00.347.404c.272.042.501.112.723.222.16.075.35.044.473-.079l.524-.54.437.411-.546.54a.405.405 0 00-.079.472c.104.204.177.445.222.714a.41.41 0 00.406.344l.714-.022.022.574h-.736zm1.538-.574a.798.798 0 00-.802-.796v-.005h-.403a4.126 4.126 0 00-.106-.33l.347-.345a.797.797 0 000-1.132l-.437-.434a.808.808 0 00-1.14 0l-.347.344a3.09 3.09 0 00-.334-.106v-.4a.798.798 0 00-.8-.796h-.598a.8.8 0 00-.8.795v.401a3.088 3.088 0 00-.334.104l-.347-.345a.799.799 0 00-.569-.235h-.003a.805.805 0 00-.571.235l-.437.434a.797.797 0 000 1.132l.344.342a3.185 3.185 0 00-.1.336h-.404a.8.8 0 00-.801.795v.594a.8.8 0 00.801.796h.404a3 3 0 00.1.336l-.341.341a.797.797 0 00-.003 1.135l.437.434a.799.799 0 00.571.236h.003a.8.8 0 00.569-.236l.347-.344c.106.039.218.072.333.103v.4c0 .44.359.796.801.796h.597a.798.798 0 00.801-.795v-.398a3.09 3.09 0 00.334-.106l.347.344a.808.808 0 001.14 0l.437-.434a.797.797 0 000-1.132l-.347-.344c.042-.104.075-.216.106-.33h.403a.798.798 0 00.802-.796v-.594z"
            />
        </svg>
    );
};

export default IconSettingsCloudLight;
