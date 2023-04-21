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

const IconTechServiceFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.035 6.752l-.374-1.004-4.791 5.02a.609.609 0 01-.882 0l-1.833-1.92a.657.657 0 01-.183-.46c0-.172.065-.34.183-.46l4.792-5.02-.959-.392c-2.646-1.084-5.654-.428-7.662 1.676C7.42 6.188 6.76 9.116 7.577 11.78L2.48 17.124 7.054 22l5.139-5.384c2.539.856 5.341.164 7.243-1.832 2.008-2.108 2.634-5.256 1.6-8.032z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M18.404 2.415a6.313 6.313 0 00-1.078.11c-.813.15-1.44.442-1.863.865-.426.426-.72 1.064-.871 1.89a6.33 6.33 0 00-.101 1.029.326.326 0 01-.023.056L6.362 14.47a.334.334 0 01-.056.022 6.338 6.338 0 00-1.056.107c-.815.151-1.44.443-1.863.865-.426.426-.72 1.065-.871 1.891-.064.347-.098.7-.1 1.053-.004.202.05.398.15.572.168.28.471.45.796.45.188 0 .47-.055.74-.327l.669-.67.692.099.098.691-.667.67c-.112.11-.199.238-.258.381a.936.936 0 00.502 1.218c.143.062.297.093.45.09h.006a6.563 6.563 0 001.076-.106c.815-.152 1.44-.443 1.863-.866.426-.426.72-1.064.87-1.89a6.24 6.24 0 00.102-1.029.334.334 0 01.022-.056l8.107-8.106a.334.334 0 01.056-.023 6.337 6.337 0 001.056-.106c.812-.151 1.44-.443 1.862-.866.426-.425.72-1.064.872-1.89.064-.348.098-.7.1-1.053a1.08 1.08 0 00-.154-.572.928.928 0 00-.795-.45c-.188 0-.47.055-.74.327l-.67.67-.691-.099-.098-.692.672-.67c.112-.108.2-.237.258-.38a.936.936 0 00-.502-1.219 1.09 1.09 0 00-.45-.09l-.006-.002z"
                />
            </svg>
        );
    }
};

export default IconTechServiceFilled;
