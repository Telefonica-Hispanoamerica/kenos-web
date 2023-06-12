/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconChemistryLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.705 21.3c.19-.337.182-.726-.05-1.082l-6.808-8.989V3.002h1.026a.434.434 0 00.431-.423.428.428 0 00-.431-.423H8.128a.426.426 0 00-.432.423c0 .23.2.423.432.423h.997v7.356a.237.237 0 000 .11v.761l-6.826 9.14a.936.936 0 00-.017.98c.173.306.498.49.851.49h17.633c.395 0 .748-.201.939-.54zM9.898 11.617a.414.414 0 00.087-.249v-.905a.54.54 0 01.002-.041.21.21 0 00-.002-.068V3h4.003v8.373c0 .087.033.18.086.246l.524.695c-1.49.356-3.7.373-5.25.042l.55-.737zm11.059 9.27a.222.222 0 01-.19.111H3.132a.114.114 0 01-.103-.067c-.017-.028-.026-.07-.017-.095L8.797 13.1c.86.23 1.944.356 3.081.356 1.222 0 2.384-.143 3.28-.406l5.79 7.652a.18.18 0 01.009.185zm-6.608-1.553h-.112c-.25-.002-1.182-.092-1.182-1.238 0-1.145.921-1.23 1.17-1.232h.121c.241.006 1.185.1 1.185 1.238 0 1.14-.947 1.227-1.182 1.232zm2.042-1.232c0-1.406-1.02-2.062-2.025-2.084h-.146c-1.011.008-2.028.653-2.028 2.076 0 1.42 1.02 2.07 2.03 2.084h.144c1.008-.017 2.025-.667 2.025-2.076zm-6.487-1.38h-.018l-.022.002h-.022c-.137-.003-.658-.053-.658-.69 0-.635.515-.683.652-.685h.065c.137.002.66.056.66.686 0 .636-.526.683-.657.686zm1.515-.684c0-1.026-.776-1.516-1.499-1.533l-.067-.002h-.025c-.723.005-1.504.487-1.504 1.529 0 1.04.778 1.524 1.504 1.535h.09c.722-.011 1.501-.496 1.501-1.53z"
            />
        </svg>
    );
};

export default IconChemistryLight;
