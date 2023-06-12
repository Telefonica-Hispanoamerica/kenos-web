/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconAppsBusinessLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.076 2h-5.384a1.927 1.927 0 00-1.924 1.925V9.31c0 1.058.86 1.925 1.924 1.925h5.384A1.927 1.927 0 0022 9.31V3.92A1.93 1.93 0 0020.076 2zm1.151 7.305c0 .635-.516 1.152-1.151 1.152h-5.384a1.153 1.153 0 01-1.152-1.152V3.92c0-.635.517-1.152 1.152-1.152h5.384c.635 0 1.151.517 1.151 1.152v5.385zM2 14.69c0-1.063.866-1.925 1.924-1.925h5.384c1.063 0 1.924.862 1.924 1.925v5.385A1.927 1.927 0 019.308 22H3.924A1.927 1.927 0 012 20.075V14.69zm8.465 5.38h-.005v-5.38c0-.635-.517-1.152-1.152-1.152H3.924c-.635 0-1.151.517-1.151 1.152v5.38c0 .635.516 1.152 1.151 1.152h5.389c.635 0 1.152-.517 1.152-1.152zm10.378 1.541a.769.769 0 000-1.536.769.769 0 000 1.536zm1.152-6.92v3.844a.384.384 0 01-.768 0V14.69c0-.635-.516-1.152-1.151-1.152h-5.384c-.635 0-1.152.517-1.152 1.152v5.385c0 .635.517 1.152 1.152 1.152h3.843a.384.384 0 010 .768h-3.843a1.927 1.927 0 01-1.924-1.925v-5.38c0-1.058.86-1.925 1.924-1.925h5.384c1.058 0 1.92.862 1.92 1.925zM8.89 3.92h.418c1.063 0 1.924.861 1.93 1.924v3.46a1.927 1.927 0 01-1.925 1.926H3.929a1.927 1.927 0 01-1.924-1.925v-3.46c0-1.064.866-1.925 1.924-1.925h.418a2.306 2.306 0 012.27-1.915c1.14 0 2.086.827 2.273 1.915zM6.616 2.773c-.713 0-1.314.487-1.486 1.147h2.972a1.537 1.537 0 00-1.486-1.147zm2.697 7.684c.635 0 1.152-.517 1.152-1.152h-.01v-3.46c0-.636-.517-1.152-1.152-1.152H8.92v.005H4.31v-.005h-.385c-.635 0-1.151.516-1.151 1.151v3.46c0 .636.516 1.153 1.151 1.153h5.389z"
            />
        </svg>
    );
};

export default IconAppsBusinessLight;
