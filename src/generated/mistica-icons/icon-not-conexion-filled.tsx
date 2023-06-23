/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconNotConexionFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.605 15.41a5.12 5.12 0 00-1-.788c-.543-.336-1.1-.504-1.661-.504a2.73 2.73 0 00-.473.042c-.72.12-1.423.524-2.096 1.196-.17.171-.277.291-.442.496a.277.277 0 01-.118.025c-.185 0-.54-.115-1.132-.518-.882-.605-1.921-1.614-2.627-2.322l-.084-.082c-.706-.705-1.714-1.747-2.32-2.63-.523-.762-.562-1.134-.495-1.252.204-.165.322-.269.496-.442.672-.673 1.075-1.379 1.199-2.096.12-.72-.034-1.44-.465-2.134a4.86 4.86 0 00-.788-1c-.81-.807-1.65-1.224-2.495-1.241H6.05c-.86 0-1.73.415-2.582 1.23-.3.283-.59.684-.69.822l-.005.007-.014.017-.017.025c-.795 1.154-.776 2.941.056 5.033.874 2.188 2.569 4.58 4.908 6.92l.005.002.079.078c2.339 2.34 4.731 4.037 6.919 4.908 1.07.426 2.061.641 2.93.641.826 0 1.54-.193 2.103-.582l.025-.02.017-.011c.135-.095.54-.39.832-.692.832-.871 1.247-1.759 1.227-2.639-.017-.845-.431-1.683-1.238-2.49zm-3.826-3.342c-3.053 0-4.832-1.544-4.832-4.838 0-3.3 1.779-4.843 4.832-4.843s4.834 1.543 4.834 4.843-1.781 4.838-4.834 4.838zM15.56 9.3l1.22-1.22L18 9.303a.604.604 0 00.852.003l.002-.003a.605.605 0 000-.854l-1.221-1.222 1.221-1.224a.604.604 0 00-.851-.854L16.782 6.37l-1.216-1.218a.605.605 0 00-.855.854l1.216 1.218-1.216 1.219a.603.603 0 10.85.857z"
            />
        </svg>
    );
};

export default IconNotConexionFilled;
