/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCancellationRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M22.372 8.429a4.468 4.468 0 00-3.75-4.4V2H9.04L3.622 7.418V22h15v-9.171a4.468 4.468 0 003.75-4.4zm-13.75-3.99V7h-2.56l2.56-2.56zM5.051 20.571V8.43h5v-5h7.143v.6a4.457 4.457 0 000 8.8v7.742H5.05zm12.857-8.75a3.393 3.393 0 110-6.786 3.393 3.393 0 010 6.786z"
            />
            <path
                fill={fillColor}
                d="M19.598 6.74a.54.54 0 00-.758 0l-.932.931-.932-.932a.534.534 0 00-.927.375.534.534 0 00.17.382l.932.933-.932.932a.54.54 0 000 .757.547.547 0 00.583.116.532.532 0 00.174-.116l.932-.932.932.932a.533.533 0 00.913-.379.54.54 0 00-.155-.378l-.933-.932.933-.933a.54.54 0 000-.757zm-4.547 9.903H7.194a.714.714 0 100 1.428h7.857a.714.714 0 100-1.428zm0-3.572H7.194a.714.714 0 100 1.429h7.857a.714.714 0 100-1.428z"
            />
        </svg>
    );
};

export default IconCancellationRegular;
