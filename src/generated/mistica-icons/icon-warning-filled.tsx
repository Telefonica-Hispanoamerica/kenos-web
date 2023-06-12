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

const IconWarningFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10zm.536-14.644A.552.552 0 0012 6.82a.552.552 0 00-.536.536v6.788c0 .284.252.536.536.536a.552.552 0 00.536-.536V7.356zm-1.252 9.468c0 .392.32.716.716.716.392 0 .716-.32.716-.716a.718.718 0 00-.716-.716.718.718 0 00-.716.716z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.621 1c.285 0 .582.006.84.013C14.613 1.063 23 1.914 23 12.028c0 10.14-8.396 10.928-10.496 10.966-.2.003-.432.006-.664.006-.115 0-.231 0-.344-.003C9.286 22.966 1 22.164 1 11.962 1 1.776 9.208 1.02 11.418 1h.203zm-.313 4.72v9.498a.689.689 0 101.377 0V5.721a.689.689 0 00-1.377 0zm.689 12.69c.432 0 .783-.35.783-.785a.784.784 0 10-1.566 0c0 .435.35.786.783.786z"
                />
            </svg>
        );
    }
};

export default IconWarningFilled;
