/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconBroadbandFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M13.348 6.827c0 1.653-.42 2.897-1.246 3.7a.561.561 0 00.773.813l.008-.008c1.054-1.023 1.589-2.538 1.589-4.505 0-1.972-.538-3.493-1.597-4.515a.561.561 0 00-.779.807c.83.804 1.252 2.05 1.252 3.708zM9.847 4.52c.51.493.767 1.278.767 2.311 0 1.034-.257 1.807-.764 2.3a.561.561 0 00.781.804c.731-.712 1.104-1.756 1.104-3.107 0-1.355-.373-2.403-1.11-3.114l-.013-.014a.562.562 0 00-.765.82zM21.85 18.553c0 1.028-.278 1.835-.824 2.403-.568.591-1.398.888-2.468.888H5.446c-1.07 0-1.899-.3-2.467-.888-.547-.568-.824-1.375-.824-2.403V17.18c0-1.028.277-1.834.824-2.403.568-.591 1.397-.888 2.467-.888h1.348V6.827c0-.308.252-.56.56-.56.308 0 .56.252.56.56v7.065h10.642c1.07 0 1.899.3 2.467.888.55.566.827 1.375.827 2.4v1.373zm-15.729.134c.166-.168.25-.397.25-.686 0-.583-.364-.944-.95-.944-.585 0-.95.361-.95.944 0 .289.085.518.25.686.165.168.409.258.7.258s.532-.09.7-.258zm2.99-.686c0-.583-.365-.944-.95-.944-.586 0-.95.361-.95.944 0 .289.084.518.25.686.165.168.408.258.7.258.291 0 .535-.09.7-.258.165-.168.25-.397.25-.686z"
            />
        </svg>
    );
};

export default IconBroadbandFilled;
