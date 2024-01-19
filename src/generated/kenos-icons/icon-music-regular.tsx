/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';
import {useTheme} from '@hooks/hooks';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconMusicRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.528 2.72a.762.762 0 00-.276-.576.648.648 0 00-.622-.108L8.528 5.64a.688.688 0 00-.518.684v9.187a3.257 3.257 0 00-2.075-.72c-1.902 0-3.455 1.623-3.455 3.6C2.48 20.37 4.03 22 5.931 22c1.902 0 3.456-1.622 3.456-3.6V6.867l10.722-3.209v8.612a3.257 3.257 0 00-2.075-.72c-1.902 0-3.455 1.623-3.455 3.6 0 1.979 1.557 3.601 3.455 3.601 1.898 0 3.455-1.622 3.455-3.6.039-.036.039-12.432.039-12.432zM5.966 20.556c-1.143 0-2.075-.975-2.075-2.161 0-1.187.936-2.162 2.075-2.162 1.139 0 2.074.975 2.074 2.162 0 1.186-.931 2.161-2.074 2.161zm10.028-5.406c0-1.187.936-2.162 2.075-2.162 1.139 0 2.074.975 2.074 2.162 0 1.19-.936 2.162-2.074 2.162-1.143 0-2.075-.975-2.075-2.162z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.64 4.656c.543.054.972.507.972 1.056h-.003V18.25h-.014c.001.02.004.04.007.058.003.026.007.05.007.08 0 2.504-1.812 3.425-3.367 3.453l-.201.003h-.079c-1.557-.022-3.373-.947-3.373-3.473 0-2.53 1.807-3.443 3.353-3.454l.292.003a3.737 3.737 0 012.092.686V8.668L10.4 6.28v7.877c0 .014.002.026.004.039.002.013.004.025.004.04a.257.257 0 01-.004.04.271.271 0 00-.004.04v.21h-.02c-.142 2.272-1.851 3.135-3.341 3.163h-.286c-1.552-.022-3.367-.944-3.367-3.47 0-2.53 1.807-3.443 3.353-3.454.092 0 .202 0 .291.002.712.017 1.465.23 2.087.681V3.217a1.07 1.07 0 011.076-1.062l.168.022 9.28 2.48zM10.399 3.5v1.467l8.927 2.387V5.886L10.4 3.5zm6.58 17.075l.238-.003c.79-.014 2.11-.316 2.112-2.187 0-1.869-1.33-2.18-2.123-2.2l-.255-.002c-.776.008-2.076.303-2.076 2.188 0 1.893 1.317 2.193 2.104 2.204zm-9.964-4.151c.776-.017 2.06-.317 2.101-2.106v-.163c-.042-1.793-1.336-2.104-2.115-2.12l-.249-.003c-.776.005-2.081.3-2.081 2.188 0 1.89 1.316 2.193 2.103 2.204.084.003.168.003.241 0z"
                />
            </svg>
        );
    }
};

export default IconMusicRegular;