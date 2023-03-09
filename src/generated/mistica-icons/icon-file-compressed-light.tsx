/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconFileCompressedLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M13.824 2.345l5.364 5.238a.68.68 0 01.202.487v12.566c0 .652-.56 1.204-1.219 1.204H5.843c-.65 0-1.218-.563-1.218-1.204V3.356c0-.63.58-1.205 1.218-1.205h7.505c.179 0 .347.07.476.194zm-7.98 18.669h12.33c.207 0 .403-.185.4-.384V8.742h-2.548c-.972 0-1.81-.313-2.42-.913-.617-.602-.942-1.426-.942-2.384V2.97H9.177v1.04h1.137a.41.41 0 01.406.411.408.408 0 01-.406.412H9.177v1.966h1.137a.41.41 0 01.406.412.408.408 0 01-.406.412H9.177V9.59h1.137a.41.41 0 01.406.412.408.408 0 01-.406.412H9.177v1.969h1.137a.41.41 0 01.406.412.407.407 0 01-.406.411H9.177v.913h1.112a.41.41 0 01.406.412v2.314a.41.41 0 01-.406.412H7.208a.41.41 0 01-.407-.412v-2.314a.41.41 0 01.407-.412h1.154v-2.308H7.196a.41.41 0 01-.406-.412.41.41 0 01.406-.411h1.166V9.022H7.196a.41.41 0 01-.406-.411.41.41 0 01.406-.412h1.166V6.232H7.196a.41.41 0 01-.406-.411.41.41 0 01.406-.412h1.166V2.975H5.843c-.184 0-.403.207-.403.38v17.278c0 .19.202.381.403.381zm4.039-4.58v-1.04H7.617v1.04h2.266zm8.482-8.51l-4.886-4.773v2.297c0 .731.241 1.35.695 1.793.457.448 1.098.683 1.854.683h2.337z"
            />
        </svg>
    );
};

export default IconFileCompressedLight;
