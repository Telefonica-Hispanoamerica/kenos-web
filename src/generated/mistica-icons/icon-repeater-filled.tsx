/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconRepeaterFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.498 4.143A2.143 2.143 0 0017.355 2H6.64a2.143 2.143 0 00-2.142 2.143v15.714A2.143 2.143 0 006.64 22h10.715a2.143 2.143 0 002.143-2.143V4.143zM13.069 17.07h-.536v.536a.536.536 0 01-1.071 0v-.536h-.536a.536.536 0 110-1.071h.536v-.536a.535.535 0 011.071 0V16h.536a.536.536 0 110 1.071zm1.518-5.357l-.05.047h-.04a.537.537 0 01-.25.057.527.527 0 01-.396-.175 2.584 2.584 0 00-3.7.021.532.532 0 01-.757-.735 3.7 3.7 0 012.607-1.072 3.661 3.661 0 012.59 1.125l.02.022a.514.514 0 01-.024.7v.01zm1.428-1.55a.534.534 0 01-.357.218.54.54 0 01-.396-.093 4.464 4.464 0 00-3.268-1.428 4.521 4.521 0 00-3.243 1.428.529.529 0 01-.753.007.514.514 0 01-.161-.375.525.525 0 01.153-.357 5.486 5.486 0 014-1.739A5.482 5.482 0 0116.02 9.5a.536.536 0 01.014.654l-.018.01zm1.04-1.832a.55.55 0 01-.757.05 7.004 7.004 0 00-3.865-1.521 6.354 6.354 0 00-4.721 1.528.436.436 0 01-.336.157h-.068a.54.54 0 01-.479-.579.521.521 0 01.19-.356 7.343 7.343 0 015.557-1.829c.91.072 1.802.3 2.636.672.631.303 1.23.67 1.786 1.096a.548.548 0 01.075.771l-.018.011z"
            />
        </svg>
    );
};

export default IconRepeaterFilled;
