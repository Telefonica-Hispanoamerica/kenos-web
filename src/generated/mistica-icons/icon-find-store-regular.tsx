/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconFindStoreRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.989 4.772c-.001-.008-.003-.016-.003-.025a.757.757 0 00-.044-.174c0-.002-.002-.003-.003-.004l-.002-.005a.606.606 0 00-.096-.155l-.007-.01-1.756-2.143A.695.695 0 0019.539 2H5.509a.71.71 0 00-.538.256L3.215 4.399a.063.063 0 00-.007.01l-.007.009a.792.792 0 00-.09.146c0 .002 0 .003-.002.005l-.002.004a.702.702 0 00-.045.174c-.004.018-.004.032-.004.05 0 .012-.002.022-.003.032l-.002.032v3.926H5.16v3.13a3.758 3.758 0 00-1.4 2.94c0 .84.278 1.613.74 2.239l-2.344 2.381a.542.542 0 000 .759.518.518 0 00.373.155c.134 0 .27-.05.372-.155l2.26-2.3V22h15.084V8.787H22V4.861l-.002-.01a.235.235 0 01-.007-.054.178.178 0 00-.002-.025zM5.837 3.43h13.379l.75.892H5.083l.754-.892zm3 17.14H6.56v-2.076a3.572 3.572 0 002.277-.174v2.25zm-1.4-3.035c-1.451 0-2.632-1.202-2.632-2.678 0-1.477 1.18-2.679 2.631-2.679 1.45 0 2.632 1.202 2.632 2.678 0 1.477-1.181 2.679-2.632 2.679zm2.456 3.035v-2.926a3.78 3.78 0 000-5.576v-.603h5.613v9.105H9.893zm6.664 0V10.39H8.842v.997a3.59 3.59 0 00-2.277-.174V8.778h12.278V20.57h-2.286zM4.454 5.39h16.14v1.965H4.454V5.391z"
            />
        </svg>
    );
};

export default IconFindStoreRegular;
