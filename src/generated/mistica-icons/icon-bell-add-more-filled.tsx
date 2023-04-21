/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconBellAddMoreFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.623 17.87a.622.622 0 01.187.677.606.606 0 01-.577.395h-5.24c-.04.546-.197 1.359-.763 1.994-.543.603-1.325.908-2.305.908-.992 0-1.77-.305-2.314-.908-.568-.635-.722-1.448-.753-1.994H4.62a.602.602 0 01-.392-1.07c.462-.37.846-.885 1.145-1.496-1.512-.543-3.218-1.854-3.218-5.087 0-4.198 2.843-5.148 4.42-5.347 1.532-3.885 5.927-3.807 6.35-3.781.373-.017 3.014-.09 4.93 1.68 1.283 1.182 1.933 2.897 1.933 5.093v3.819c-.01.26-.125 3.534 1.835 5.116zm-18.25-6.58c0 3.635 2.518 4.215 4.02 4.23h.456c1.51-.023 4.028-.611 4.028-4.2 0-3.594-2.54-4.19-4.053-4.23h-.479c-1.487.009-3.972.572-3.972 4.2zm4.247 3.313a.607.607 0 00.61-.602h.003v-2.104h2.12a.61.61 0 00.608-.605.607.607 0 00-.607-.605h-2.12V8.612a.607.607 0 00-.611-.603.606.606 0 00-.608.603v2.075H4.897a.604.604 0 100 1.208h2.115V14a.608.608 0 00.608.602z"
            />
        </svg>
    );
};

export default IconBellAddMoreFilled;
