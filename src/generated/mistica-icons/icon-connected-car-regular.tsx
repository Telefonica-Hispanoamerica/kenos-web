/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconConnectedCarRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M12.17 5.852a3.873 3.873 0 00-2.785-1 .735.735 0 00-.496.229.714.714 0 00.568 1.195A2.413 2.413 0 0112.02 8.59c.007.19.09.368.228.497.11.095.243.159.386.185h.114a.714.714 0 00.492-.228.714.714 0 00.182-.51 3.825 3.825 0 00-1.238-2.67l-.014-.011z"
            />
            <path
                fill={fillColor}
                d="M9.178 4.135A4.234 4.234 0 0113.78 8.35c.01.189.093.366.232.493a.714.714 0 00.482.182h.036a.714.714 0 00.678-.714 5.672 5.672 0 00-1.849-4.116 5.626 5.626 0 00-4.262-1.467.714.714 0 00-.489.229.714.714 0 00-.182.514.714.714 0 00.753.664zM2.714 12.7h1.428a.714.714 0 100-1.427H2.714a.714.714 0 100 1.427zm0 2.142H6.64a.714.714 0 100-1.428H2.714a.714.714 0 100 1.428z"
            />
            <path
                fill={fillColor}
                d="M21.918 14.79l-.325-1.04a1.698 1.698 0 00-1.353-1.116l-7.888-2.003-3.63-3.64H2.713a.714.714 0 100 1.427h5.415l3.509 3.498 8.302 2.11h.093a.269.269 0 01.218.157l.31 1.053a.285.285 0 010 .203l-.714 2.277h-2.673a3.399 3.399 0 00-6.782 0H2.714a.714.714 0 100 1.428h7.906a3.401 3.401 0 006.318 0h3.927L21.85 16c.173-.381.197-.813.068-1.21zm-6.193 3.412v.043c-.02.1-.048.197-.082.293v.046a2.383 2.383 0 01-.133.271.144.144 0 010 .032 1.973 1.973 0 01-3.391 0l-.02-.032a3.148 3.148 0 01-.13-.271v-.046a1.956 1.956 0 01-.082-.293.18.18 0 000-.043 2.374 2.374 0 01-.028-.325 1.23 1.23 0 010-.16 1.974 1.974 0 013.926 0c.004.053.004.107 0 .16a1.93 1.93 0 01-.06.325z"
            />
        </svg>
    );
};

export default IconConnectedCarRegular;
