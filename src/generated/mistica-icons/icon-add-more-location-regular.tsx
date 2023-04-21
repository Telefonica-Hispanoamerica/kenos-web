/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconAddMoreLocationRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.965 4.043c1.232 1.23 1.885 3.028 1.876 5.216-.008 4.61-5.93 11.58-6.767 12.406a.61.61 0 01-.432.176.59.59 0 01-.43-.176c-.424-.41-1.37-1.51-2.471-3.037-1.272 1.617-3.353 1.802-4.037 1.807-.098.009-.213.009-.32.009h-.17c-1.062-.017-5.059-.395-5.059-5.247 0-4.837 3.955-5.199 5.014-5.207h.367a5.17 5.17 0 01-.05-.779c0-2.176.66-3.978 1.907-5.199 1.25-1.221 3.09-1.849 5.294-1.857 2.213.008 4.04.658 5.278 1.888zm.652 5.207c.009-1.88-.507-3.341-1.526-4.353-1.017-1.014-2.502-1.526-4.41-1.538-1.884 0-3.391.507-4.42 1.513C9.233 5.875 8.71 7.337 8.71 9.22c-.009.275.033.589.09.908 1.573.322 3.954 1.415 3.954 5.1 0 .878-.14 1.609-.367 2.21a34.542 34.542 0 002.253 2.911c1.663-1.88 5.969-7.585 5.977-11.098zm-9.084 5.98c0-3.422-2.437-3.994-3.89-4.033h-.457c-1.429.017-3.81.549-3.81 4.003 0 3.47 2.415 4.017 3.85 4.042h.153l.076-.002c.077-.002.154-.003.221-.01 1.434-.022 3.857-.576 3.857-4zM13.2 8.82c0 .969.479 1.442 1.465 1.442.986 0 1.465-.473 1.465-1.442 0-.97-.482-1.443-1.465-1.443-.986 0-1.465.474-1.465 1.443zm1.465 2.652c-1.658 0-2.69-1.016-2.69-2.65 0-1.632 1.032-2.65 2.69-2.65s2.689 1.018 2.689 2.65c-.003 1.634-1.03 2.65-2.69 2.65zM10.707 15.2a.605.605 0 00-.61-.602v.002H8.062v-1.977a.605.605 0 00-.611-.602.605.605 0 00-.61.602V14.6H4.812a.607.607 0 00-.61.603.605.605 0 00.61.602h2.031v2.008a.605.605 0 00.61.603.605.605 0 00.611-.603v-2.01h2.031a.605.605 0 00.61-.603z"
            />
        </svg>
    );
};

export default IconAddMoreLocationRegular;
