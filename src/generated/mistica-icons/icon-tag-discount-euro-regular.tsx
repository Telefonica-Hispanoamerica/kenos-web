/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTagDiscountEuroRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.34 2.213a.674.674 0 01.984 0 .751.751 0 010 1.028l-1.188 1.243v8.423a.746.746 0 01-.21.521l-7.743 7.94a2.019 2.019 0 01-2.946-.01L3.09 14.93a2.254 2.254 0 010-3.085l7.503-8.167a.68.68 0 01.503-.224h8.055l1.188-1.242zm-9.136 18.116l7.539-7.725h-.005V5.94l-.899.94a.67.67 0 01-.98 0 .751.751 0 01.001-1.028l.9-.945h-6.37l-7.307 7.958a.754.754 0 00-.009 1.038l6.146 6.426a.674.674 0 00.984 0z"
            />
            <path
                fill={fillColor}
                d="M14.226 9.998c.28 0 .551.07.8.205a.51.51 0 00.704-.233.555.555 0 00-.223-.735c-.4-.219-.832-.33-1.286-.33-1.357 0-2.488 1.019-2.732 2.364h-.4a.53.53 0 00-.522.544.53.53 0 00.521.545h.4c.245 1.345 1.376 2.364 2.733 2.364.45 0 .881-.112 1.286-.33a.56.56 0 00.223-.736.516.516 0 00-.703-.233c-.25.135-.521.205-.801.205-.775 0-1.429-.54-1.651-1.27h1.65a.53.53 0 00.521-.545.53.53 0 00-.52-.544h-1.651c.222-.73.872-1.27 1.65-1.27zM9.01 11.274H7.27a.53.53 0 00-.521.544.53.53 0 00.52.544h1.74a.53.53 0 00.522-.544.53.53 0 00-.521-.544z"
            />
        </svg>
    );
};

export default IconTagDiscountEuroRegular;
