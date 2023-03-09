/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconPillFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M15.8 2.16c1.378-.027 2.784.628 4.1 1.945 2.555 2.552 2.595 5.367.11 7.927l-7.93 7.933-.003.003a2.304 2.304 0 01-.188.182c-1.207 1.129-2.476 1.694-3.75 1.694-1.364 0-2.734-.65-4.034-1.95-1.32-1.316-1.972-2.694-1.95-4.094.026-1.348.678-2.673 1.945-3.939l.145-.151c.12-.126.238-.247.362-.353l6.776-6.779c.077-.094.197-.208.32-.325l.002-.003.154-.145c1.266-1.263 2.59-1.919 3.94-1.944zm.126 12.225l3.213-3.213c2.017-2.081 1.986-4.112-.104-6.199-1.053-1.053-2.115-1.588-3.154-1.588h-.056c-1.022.017-2.064.552-3.098 1.585l-.174.168a4.127 4.127 0 00-.269.272L9.777 7.917a.24.24 0 00-.004.034.216.216 0 01-.007.047c-.445 1.367.149 2.84 1.815 4.507 1.124 1.124 2.768 2.364 4.25 1.891a.196.196 0 01.058-.008c.012 0 .025 0 .037-.003z"
            />
        </svg>
    );
};

export default IconPillFilled;
