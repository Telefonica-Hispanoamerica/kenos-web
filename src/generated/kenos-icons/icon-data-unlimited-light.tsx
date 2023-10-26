/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconDataUnlimitedLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.676 19.5a.716.716 0 01-.714.714.716.716 0 01-.714-.714c0-.393.321-.714.714-.714.393 0 .714.321.714.714zM9.498 13.429c.464 0 .893.142 1.214.428.143.107.393.107.5-.071.107-.143.107-.393-.071-.5-.465-.393-1.072-.572-1.679-.572a2.698 2.698 0 00-2.678 2.679 2.698 2.698 0 002.678 2.678 2.698 2.698 0 002.679-2.678c0-.214-.143-.357-.357-.357H9.819c-.214 0-.357.143-.357.357s.143.357.357.357h1.572a1.955 1.955 0 01-1.929 1.607 1.982 1.982 0 01-1.964-1.964c0-1.072.928-1.964 2-1.964zm3.428-2.143l-1.107-1.107-1.107 1.107a2.336 2.336 0 01-1.607.678c-.571 0-1.179-.214-1.607-.678a2.263 2.263 0 010-3.215 2.263 2.263 0 013.214 0L11.82 9.18l1.107-1.108a2.263 2.263 0 013.215 0 2.263 2.263 0 010 3.215 2.336 2.336 0 01-1.607.678c-.572 0-1.179-.214-1.608-.678zM11.32 9.679L10.212 8.57a1.574 1.574 0 00-2.214 0 1.574 1.574 0 000 2.215 1.573 1.573 0 002.214 0l1.107-1.107zm1 0l1.107 1.107a1.574 1.574 0 002.215 0 1.574 1.574 0 000-2.215 1.574 1.574 0 00-2.215 0L12.32 9.68zm.572 8.035v-4.643c0-.214.143-.357.357-.357h1.857c.75.072 1.357.75 1.357 1.5 0 .393-.143.75-.393 1 .465.25.75.75.75 1.322 0 .821-.678 1.5-1.5 1.5h-2.071c-.214.035-.357-.107-.357-.322zm2.428-1.964h-1.714v1.607h1.714a.793.793 0 00.786-.786c0-.428-.357-.821-.786-.821zm-1.714-.714h1.357a.793.793 0 00.786-.786c0-.429-.322-.786-.75-.786h-1.393v1.572zm5.357 6.25H5.034v-17.5c0-.607.464-1.072 1.071-1.072h7.5c.286 0 .607.143.821.322l3.822 3.821c.214.214.357.5.357.75v9.75c0 .214.143.357.357.357s.357-.143.357-.357v-9.75c0-.428-.214-.893-.571-1.25l-3.822-3.821C14.605 2.214 14.07 2 13.605 2h-7.5c-1 0-1.786.786-1.786 1.786V22h14.643c.214 0 .357-.143.357-.357s-.143-.357-.357-.357z"
            />
        </svg>
    );
};

export default IconDataUnlimitedLight;