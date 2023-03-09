/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconTagPoundLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.428 2.603l-1.26 1.322v9.407c0 .472-.185.925-.516 1.276l-3.654 3.828a.34.34 0 01-.502 0 .381.381 0 010-.527l3.65-3.828a1.09 1.09 0 00.308-.748V4.67l-1.816 1.904a.33.33 0 01-.476 0 .37.37 0 010-.504l1.816-1.904h-8.225a.874.874 0 00-.696.305l-6.559 6.883a1.109 1.109 0 000 1.535l7.678 8.052a1.001 1.001 0 001.433.028.34.34 0 01.502.019.381.381 0 01-.017.527 1.69 1.69 0 01-1.186.485c-.45 0-.9-.176-1.234-.532l-7.678-8.052a1.88 1.88 0 010-2.589l6.54-6.86c.287-.342.723-.54 1.217-.54h8.934l1.261-1.323a.33.33 0 01.48 0 .364.364 0 010 .5zm-7.127 16.36c-.379 0-.687.323-.687.721 0 .398.308.721.687.721.38 0 .688-.323.688-.721 0-.398-.309-.721-.688-.721zM9.823 14.88c0-.199.154-.36.344-.36.392 0 .692-.31.683-.722v-1.807h-.344a.353.353 0 01-.344-.36c0-.2.155-.361.344-.361h.344V9.648c0-1.095.85-1.987 1.895-1.987.441 0 .873.161 1.19.448a.37.37 0 01.04.508.335.335 0 01-.485.037 1.13 1.13 0 00-.74-.272c-.675 0-1.204.554-1.204 1.262v1.627h1.724c.19 0 .344.162.344.36 0 .2-.155.361-.344.361h-1.723v1.807c0 .264-.067.509-.181.722h3.107c.19 0 .344.161.344.36 0 .199-.154.36-.344.36h-4.306a.353.353 0 01-.344-.36z"
            />
        </svg>
    );
};

export default IconTagPoundLight;
