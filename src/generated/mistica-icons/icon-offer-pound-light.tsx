/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconOfferPoundLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.91 11.993l2.518-2.74a.356.356 0 00-.192-.59l-3.646-.737.43-3.7a.355.355 0 00-.146-.329.354.354 0 00-.361-.037l-3.38 1.55-1.823-3.242c-.128-.224-.494-.224-.621 0L9.866 5.411l-3.38-1.55a.36.36 0 00-.502.366l.429 3.7-3.646.736a.365.365 0 00-.27.238.356.356 0 00.078.352l2.522 2.74-2.517 2.74a.356.356 0 00.192.59l3.645.736-.43 3.7a.355.355 0 00.147.33.347.347 0 00.356.036l3.38-1.55 1.823 3.242a.355.355 0 00.621 0l1.823-3.243 3.38 1.55a.36.36 0 00.507-.366l-.2-1.737a.36.36 0 00-.713.082l.128 1.107-3.102-1.422a.356.356 0 00-.461.15l-1.672 2.973-1.672-2.977a.36.36 0 00-.461-.151l-3.102 1.422.393-3.393a.358.358 0 00-.284-.394l-3.343-.672 2.311-2.516a.354.354 0 000-.484L3.535 9.23l3.343-.672a.355.355 0 00.284-.394l-.393-3.393L9.87 6.193c.168.078.37.014.46-.15l1.673-2.97 1.676 2.978a.36.36 0 00.462.151l3.101-1.422-.392 3.393c-.023.183.1.357.283.394l3.343.672-2.311 2.516a.354.354 0 000 .485l2.311 2.515-1.132.229a.358.358 0 00.142.7l1.753-.353a.365.365 0 00.27-.237.356.356 0 00-.078-.353l-2.521-2.748zm-1.552 3.215a.714.714 0 010 1.427.714.714 0 010-1.427zm-7.94 0c0-.197.16-.357.357-.357a.708.708 0 00.712-.713v-1.789h-.356a.357.357 0 010-.713h.356v-1.61c0-1.084.882-1.967 1.964-1.967.448 0 .887.156 1.234.44A.357.357 0 0113.74 9a.356.356 0 01-.503.055 1.25 1.25 0 00-2.033.97v1.61h1.787a.357.357 0 010 .713h-1.787v1.789a1.4 1.4 0 01-.192.713h3.226a.357.357 0 010 .714H9.774a.357.357 0 01-.357-.357z"
            />
        </svg>
    );
};

export default IconOfferPoundLight;
