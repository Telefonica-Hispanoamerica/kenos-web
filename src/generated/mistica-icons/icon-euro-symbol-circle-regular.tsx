/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '@hooks/hooks';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconEuroSymbolCircleRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M7.536 13.788a.718.718 0 01-.716-.716c0-.396.32-.716.72-.724h.356c-.036-.104-.036-.252-.036-.356 0-.052.009-.113.018-.175.009-.063.018-.127.018-.181H7.54a.718.718 0 01-.716-.716c0-.392.32-.716.716-.716h.716c.712-1.676 2.356-2.856 4.284-2.856.824 0 1.608.248 2.324.644a.69.69 0 01.252.964.69.69 0 01-.964.252 3.205 3.205 0 00-1.608-.428 3.24 3.24 0 00-2.68 1.428h2.68c.392 0 .716.32.716.716 0 .392-.32.716-.716.716h-3.18c-.036.104-.036.252-.036.356 0 .051.009.113.018.175.009.063.018.127.018.181h3.176c.392 0 .716.32.716.716 0 .392-.32.716-.716.716H9.86a3.24 3.24 0 002.68 1.428c.572 0 1.108-.144 1.608-.428.32-.212.748-.104.964.252.212.32.104.748-.252.964-.716.428-1.5.644-2.324.644-1.928 0-3.568-1.176-4.284-2.856h-.716z"
                />
                <path
                    fill={fillColor}
                    d="M12 2C6.5 2 2 6.5 2 12s4.464 10 10 10c5.5 0 10-4.464 10-10 0-5.5-4.5-10-10-10zm0 18.568A8.548 8.548 0 013.428 12 8.552 8.552 0 0112 3.428c4.752 0 8.572 3.856 8.572 8.572A8.548 8.548 0 0112 20.568z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.995 2.155c6.44 0 9.846 3.403 9.846 9.846 0 6.437-3.403 9.84-9.846 9.84-6.437 0-9.84-3.403-9.84-9.84 0-6.443 3.403-9.846 9.84-9.846zm0 18.479c5.732 0 8.639-2.905 8.639-8.633 0-5.734-2.905-8.639-8.639-8.639-5.728 0-8.633 2.905-8.633 8.639 0 5.728 2.905 8.633 8.633 8.633zm4.684-4.339a.6.6 0 00-.801-.283c-.7.33-1.575.499-2.603.496-2.459 0-3.95-.916-4.526-2.773h3.563a.604.604 0 100-1.21H8.528a72.502 72.502 0 00-.007-.066c-.023-.241-.047-.485-.047-.755 0-.077.006-.147.012-.217.004-.048.009-.095.01-.144h3.81a.601.601 0 100-1.205H8.642C9.107 7.976 10.626 6.9 13.275 6.9c1.014 0 1.883.163 2.577.485a.603.603 0 10.508-1.096c-.855-.397-1.894-.596-3.085-.596-3.316 0-5.352 1.566-5.873 4.445H6.374a.602.602 0 000 1.205h.901c0 .03-.003.06-.004.09-.005.09-.01.179-.01.271.003.275.014.546.04.82h-.927a.604.604 0 100 1.21h1.12c.65 2.583 2.644 3.981 5.779 3.981 1.207 0 2.255-.204 3.117-.61h.003a.603.603 0 00.289-.804l-.003-.006z"
                />
            </svg>
        );
    }
};

export default IconEuroSymbolCircleRegular;