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

const IconEyeOffRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.649 16.924l3.672 3.856a.719.719 0 01.004 1.004.654.654 0 01-.476.216.785.785 0 01-.476-.18l-3.947-4.144a9.836 9.836 0 01-4.424 1.036c-4.046 0-7.757-2.536-9.418-6.42a.82.82 0 010-.572c.579-1.355 1.394-2.571 2.45-3.535a.64.64 0 01.952.036.717.717 0 01-.034 1 8.421 8.421 0 00-2.008 2.784c1.497 3.211 4.625 5.283 8.062 5.283a8.446 8.446 0 003.402-.716l-.78-.82a4.253 4.253 0 01-2.622.892c-2.45 0-4.423-2.072-4.423-4.643a4.75 4.75 0 01.85-2.752l-5.75-6.036a.717.717 0 010-1 .639.639 0 01.952 0L7.58 6.317a9.944 9.944 0 014.423-1.036c4.08 0 7.757 2.536 9.422 6.428a.82.82 0 010 .572c-.85 1.927-2.14 3.535-3.775 4.643zm-8.71-4.928c0 1.788 1.364 3.216 3.063 3.216a2.83 2.83 0 001.63-.504l-4.217-4.427a3.242 3.242 0 00-.476 1.715zm5.65 1.716a3.24 3.24 0 00.476-1.716c0-1.787-1.364-3.215-3.063-3.215-.613 0-1.158.18-1.634.5l4.221 4.431zm1.837-1.716a4.757 4.757 0 01-.85 2.752l1.12 1.136a9.154 9.154 0 003.368-3.892C18.567 8.781 15.44 6.71 12.002 6.71c-1.192 0-2.313.252-3.402.716l.78.82a4.253 4.253 0 012.622-.892c2.45 0 4.424 2.072 4.424 4.643z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.668 12.376c-1.608 1.608-3.244 2.813-4.894 3.608l4.88 4.88a.561.561 0 01-.395.958.558.558 0 01-.395-.166l-5.2-5.198c-1.226.453-2.458.68-3.694.68-3.266 0-6.51-1.588-9.644-4.723a.562.562 0 010-.793C3.934 10.016 5.57 8.81 7.222 8.016L2.34 3.133a.561.561 0 010-.793.558.558 0 01.79 0l5.202 5.199a10.576 10.576 0 013.694-.68c3.266 0 6.51 1.587 9.642 4.725a.562.562 0 010 .793zm-1.196-.397c-2.788-2.656-5.625-4-8.446-4-.935 0-1.874.148-2.812.445l.515.513c.572-.34 1.283-.513 2.123-.513 2.325 0 3.659 1.339 3.659 3.675 0 .84-.171 1.549-.504 2.118l.924.924c1.518-.672 3.036-1.728 4.54-3.162zm-8.499-1.37c.846 0 1.392.549 1.392 1.395 0 .193-.028.358-.073.498l1.09 1.09c.19-.409.286-.91.286-1.496 0-.955-.252-1.68-.751-2.154-.473-.45-1.168-.678-2.065-.678-.59 0-1.092.098-1.5.294l1.122 1.124c.152-.048.32-.073.499-.073zm-8.448 1.409c2.787 2.655 5.624 4 8.445 4 .933 0 1.871-.149 2.813-.443l-2.171-2.17-.012.01-.4-.4c-.123-.123-.328-.33-.54-.55-.261-.265-.53-.54-.684-.694l-.41-.406.004-.003-2.505-2.504c-1.52.672-3.036 1.728-4.54 3.16z"
                />
            </svg>
        );
    }
};

export default IconEyeOffRegular;
