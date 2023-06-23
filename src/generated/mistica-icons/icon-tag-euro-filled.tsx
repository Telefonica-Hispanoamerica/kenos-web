/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconTagEuroFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.097 7.68c.472 0 .92-.184 1.252-.52l1.224-1.228v7.554a2.12 2.12 0 01-.624 1.504l-6.388 6.39a2.11 2.11 0 01-1.505.62 2.116 2.116 0 01-1.504-.62l-7.928-7.934A2.103 2.103 0 012 11.94c0-.568.22-1.104.624-1.504l6.392-6.393c.4-.405.936-.625 1.504-.625h7.553l-1.228 1.233c-.336.332-.52.776-.52 1.252s.188.924.52 1.256c.332.336.776.52 1.252.52zM13.3 10.521a.53.53 0 00-.533-.532L9.8 9.997a3.374 3.374 0 012.968-1.776c.657 0 1.289.188 1.84.548a.534.534 0 10.585-.897 4.408 4.408 0 00-2.42-.72 4.446 4.446 0 00-4.137 2.841H7.8a.53.53 0 00-.532.532.53.53 0 00.532.532h.568a4.63 4.63 0 00-.036.532c0 .18.016.36.036.532H7.8a.526.526 0 00-.532.529.53.53 0 00.532.532h.836a4.446 4.446 0 004.137 2.84c.86 0 1.696-.248 2.42-.716a.535.535 0 00-.584-.896 3.358 3.358 0 01-1.84.548A3.38 3.38 0 019.8 13.182h2.968a.53.53 0 00.533-.532.53.53 0 00-.533-.533H9.444a2.925 2.925 0 010-1.064h3.324a.53.53 0 00.533-.532z"
            />
            <path
                fill={fillColor}
                d="M18.093 6.616a.713.713 0 01-.5-1.212l3.196-3.197a.712.712 0 011.004 0 .713.713 0 010 1.004l-3.196 3.197a.705.705 0 01-.504.208z"
            />
        </svg>
    );
};

export default IconTagEuroFilled;
