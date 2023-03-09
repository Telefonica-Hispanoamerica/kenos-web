/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCircuitsFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M4.559 7.39c-.188.463-.68.807-1.205.807C2.602 8.197 2 7.582 2 6.804c0-.728.564-1.344 1.316-1.344.525 0 .978.306 1.204.768h5.726l1.73-1.767-.008-.024c-.07-.218-.142-.443-.142-.704 0-.96.757-1.733 1.697-1.733.94 0 1.691.773 1.73 1.733 0 .965-.757 1.732-1.696 1.732-.26 0-.526-.078-.752-.192L10.733 7.39H4.558zm3.012 1.92h6.742l4.439-4.504a1.57 1.57 0 01-.15-.694c0-.965.752-1.733 1.697-1.733.944 0 1.696.773 1.658 1.733 0 .965-.757 1.732-1.697 1.732-.299 0-.564-.078-.79-.192l-4.709 4.81h-7.19a1.34 1.34 0 01-1.205.768 1.322 1.322 0 01-1.315-1.344c0-.729.563-1.344 1.315-1.344.526 0 .979.305 1.205.768zM20.3 11.235c-.752 0-1.354.502-1.58 1.151H4.597c-.188-.502-.68-.768-1.244-.768-.752 0-1.315.616-1.315 1.344 0 .768.602 1.344 1.315 1.344.526 0 .979-.305 1.205-.768h14.16c.226.655.866 1.152 1.58 1.152.94 0 1.696-.768 1.696-1.733-.005-.915-.756-1.722-1.696-1.722zm-.752 7.497c.226-.114.487-.192.752-.192.94 0 1.701.762 1.701 1.727 0 .965-.752 1.733-1.696 1.733-.945 0-1.697-.773-1.697-1.733 0-.265.077-.536.188-.768l-2.824-2.884H7.576a1.34 1.34 0 01-1.205.768 1.322 1.322 0 01-1.316-1.344c0-.729.564-1.344 1.316-1.344.525 0 .978.345 1.205.807v-.039h8.771l3.2 3.269z"
            />
        </svg>
    );
};

export default IconCircuitsFilled;
