/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconBillInvoicePoundFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M6.718 2h10.584c1.164 0 2.117.965 2.113 2.144V22H4.6V4.144C4.6 2.96 5.553 2 6.718 2zM8.13 17.895h7.757a.533.533 0 00.533-.535.53.53 0 00-.528-.535H8.13a.53.53 0 00-.528.535.53.53 0 00.528.535zm7.757-3.57a.533.533 0 00.533-.535.53.53 0 00-.528-.535H8.13a.53.53 0 00-.528.535.53.53 0 00.528.535h7.757zm-2.998-3.932h2.998a.533.533 0 00.528-.54.53.53 0 00-.528-.534h-1.774c.009-.06.013-.119.013-.178v-.892h.88a.53.53 0 00.529-.535.53.53 0 00-.528-.535h-.88v-.891c0-.293.234-.535.527-.535.145 0 .285.06.384.17a.528.528 0 00.75.022.544.544 0 00.022-.759 1.569 1.569 0 00-1.155-.507c-.877 0-1.59.722-1.59 1.609v.896a.53.53 0 00-.528.535.53.53 0 00.528.535v.891c0 .1-.077.178-.176.178a.53.53 0 00-.528.535.53.53 0 00.528.535z"
            />
        </svg>
    );
};

export default IconBillInvoicePoundFilled;
