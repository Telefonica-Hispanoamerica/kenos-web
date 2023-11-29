/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconDisturbFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.7 17.692l3.087 3.088a.703.703 0 010 1.008.693.693 0 01-.504.212.738.738 0 01-.508-.208L2.21 3.222A.715.715 0 113.222 2.21l2.375 2.376a9.24 9.24 0 016.391-2.564c5.116 0 9.275 4.164 9.275 9.277 0 2.476-.98 4.728-2.564 6.393zM2.718 11.295c0-1.732.484-3.352 1.316-4.74l12.69 12.697a9.199 9.199 0 01-4.74 1.316 9.28 9.28 0 01-3.859-.836l-5.683 1.52a.336.336 0 01-.408-.412l1.524-5.685a9.2 9.2 0 01-.84-3.86z"
            />
        </svg>
    );
};

export default IconDisturbFilled;