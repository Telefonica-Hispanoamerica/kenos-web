/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconEsimRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M15.067 2.68l3.616 3.64c.413.428.726 1.144.722 1.752V22H4.625L4.59 4.32C4.59 3 5.49 2 6.658 2h6.893c.586 0 1.103.248 1.516.68zM6.002 20.572h12.033v-12.5c0-.216-.135-.572-.309-.752l-3.62-3.644c-.173-.176-.343-.248-.551-.248H6.662c-.482 0-.69.464-.69.892l.03 16.252z"
            />
            <path
                fill={fillColor}
                d="M9.587 15.536c-.104-.32-.139-.644-.173-1.036 0 0 0-.036-.008-.068v-.144c0-1.464 1.173-2.644 2.586-2.644 1.516 0 2.585 1.14 2.585 2.784 0 .284-.243.536-.517.536h-3.55a.516.516 0 01.034.126c.01.045.018.09.035.126.035.104.104.248.174.356.243.396.69.644 1.173.68.517.072 1.034-.144 1.412-.5a.487.487 0 01.726 0 .53.53 0 010 .752c-.482.536-1.239.82-1.964.82h-.274a2.639 2.639 0 01-1.93-1.144 2.882 2.882 0 01-.309-.644zm3.894-1.64c-.174-.716-.725-1.18-1.482-1.18-.721 0-1.343.5-1.516 1.18h2.998z"
            />
            <path
                fill={fillColor}
                d="M8.553 9.68h6.892c.757 0 1.378.64 1.378 1.428v8.212H7.176v-8.212c0-.784.62-1.428 1.377-1.428zm0 8.212h6.892v-6.784H8.553v6.784z"
            />
        </svg>
    );
};

export default IconEsimRegular;
