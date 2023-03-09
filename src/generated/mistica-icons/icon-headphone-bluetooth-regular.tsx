/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconHeadphoneBluetoothRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path fill={fillColor} d="M12.767 11.674l-.54.568.003-1.136.537.568z" />
            <path
                fill={fillColor}
                d="M9.556 10.506c0-2.715.983-3.427 2.407-3.427 1.425 0 2.408.716 2.408 3.427 0 2.712-.983 3.424-2.408 3.424-1.424 0-2.407-.708-2.407-3.424zm2.19 2.948l1.692-1.776-1.113-1.172 1.116-1.171-1.691-1.776v2.343l-.93-.975-.335.352 1.162 1.231-1.166 1.228.336.352.93-.976v2.34z"
            />
            <path fill={fillColor} d="M12.226 8.77l.541.568-.537.564-.004-1.131z" />
            <path
                fill={fillColor}
                d="M18.729 4.927C16.931 3.04 14.539 2 11.994 2S7.057 3.04 5.259 4.927C3.46 6.815 2.47 9.327 2.47 11.998v6.25c0 1.005.335 1.94.941 2.632A3.235 3.235 0 005.871 22h1.7v-7.502h-1.7c-.757 0-1.466.252-2.041.715v-3.215c0-4.727 3.66-8.57 8.164-8.57 4.503 0 8.164 3.843 8.164 8.57v3.215a3.218 3.218 0 00-2.042-.715h-1.7v7.498h1.7c.956 0 1.832-.396 2.46-1.12.606-.692.942-1.627.942-2.631v-6.247c0-2.671-.99-5.183-2.789-7.07zM5.872 15.925h.339v4.643h-.34c-1.18 0-2.041-.975-2.041-2.32 0-1.343.857-2.323 2.042-2.323zm11.905 4.643v-4.643h.339c1.18 0 2.042.976 2.042 2.32 0 1.344-.858 2.323-2.042 2.323h-.34z"
            />
        </svg>
    );
};

export default IconHeadphoneBluetoothRegular;
