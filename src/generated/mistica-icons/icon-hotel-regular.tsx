/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconHotelRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12.41 2.166a20.49 20.49 0 00-.737-.011h-.196c-1.975.017-9.322.698-9.322 9.812 0 9.13 7.417 9.844 9.395 9.874.1.003.204.003.308.003.196 0 .395-.003.591-.006 1.877-.036 9.392-.739 9.392-9.812 0-9.053-7.504-9.815-9.431-9.86zm-.922 1.219h.185c.236 0 .47.003.706.008 2.476.062 8.23 1.02 8.233 8.63 0 7.611-5.723 8.538-8.182 8.583-.174.003-.37.006-.572.006-.098 0-.196 0-.291-.003-2.46-.034-8.18-.947-8.18-8.642 0-7.68 5.664-8.56 8.101-8.582zm4.34 2.815c.588 0 1.067.476 1.067 1.067v9.465c0 .588-.477 1.067-1.068 1.067h-2.16a1.067 1.067 0 01-1.067-1.067v-2.921h-1.204v2.918c0 .588-.48 1.068-1.067 1.065h-2.16a1.067 1.067 0 01-1.067-1.068V7.267c0-.588.476-1.067 1.067-1.067h2.16c.588 0 1.067.476 1.067 1.064v2.799h1.202V7.267c0-.588.476-1.067 1.067-1.067h2.162zm-2.16 1.067v3.86h-3.34v-3.86H8.17v9.465h2.16v-3.986h3.339v3.986h2.16V7.267h-2.16z"
            />
        </svg>
    );
};

export default IconHotelRegular;
