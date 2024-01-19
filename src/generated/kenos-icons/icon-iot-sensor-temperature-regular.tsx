/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconIotSensorTemperatureRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M14.91 4.963v10.185c.69.74 1.09 1.74 1.09 2.779C16 20.184 14.216 22 12 22c-2.217 0-4-1.811-4-4.073 0-1.038.4-2.039 1.09-2.779V4.963C9.09 3.333 10.398 2 12 2s2.91 1.332 2.91 2.963zM9.453 17.927c0 1.446 1.127 2.594 2.547 2.594 1.42 0 2.547-1.148 2.547-2.594 0-.74-.33-1.442-.838-1.925a.67.67 0 01-.256-.555V4.963c0-.81-.657-1.479-1.453-1.479s-1.453.664-1.453 1.48v10.483c0 .223-.112.408-.256.555a2.669 2.669 0 00-.838 1.925zm3.092-1.74V4.963A.566.566 0 0012 4.41a.566.566 0 00-.545.554v11.224a1.829 1.829 0 00-1.271 1.74c0 1.038.8 1.854 1.82 1.854s1.821-.816 1.821-1.854a1.843 1.843 0 00-1.28-1.74zm-1.271 1.74c0-.408.326-.74.726-.74.4 0 .726.332.726.74s-.326.74-.726.74a.734.734 0 01-.726-.74z"
            />
        </svg>
    );
};

export default IconIotSensorTemperatureRegular;