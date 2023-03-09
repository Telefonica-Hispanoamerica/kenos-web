/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconAngelRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.898 3.669c0 1.588-4.078 1.668-4.895 1.668-.816 0-4.894-.08-4.894-1.668C7.109 2.08 11.187 2 12.003 2c.817 0 4.895.08 4.895 1.669zm-1.239 0c-.468-.237-1.73-.555-3.656-.555-1.925 0-3.187.318-3.656.555.469.237 1.73.554 3.656.554 1.926 0 3.188-.317 3.656-.554zm-.622 11.737a5.222 5.222 0 002.042-4.148c0-2.858-2.278-5.186-5.076-5.186-2.797 0-5.075 2.328-5.075 5.186 0 1.697.802 3.2 2.041 4.148-3.025.91-5.182 3.143-5.298 5.821a.735.735 0 00.691.773h.033a.735.735 0 00.723-.706c.116-2.674 3.202-4.845 6.885-4.845 3.68 0 6.77 2.176 6.885 4.845a.732.732 0 00.724.706h.033a.735.735 0 00.69-.773c-.115-2.678-2.273-4.91-5.298-5.821zm-3.034-7.845c2 0 3.624 1.659 3.624 3.702s-1.624 3.702-3.624 3.702-3.623-1.664-3.623-3.702c0-2.043 1.624-3.702 3.623-3.702z"
            />
        </svg>
    );
};

export default IconAngelRegular;
