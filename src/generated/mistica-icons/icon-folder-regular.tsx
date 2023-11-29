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

const IconFolderRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2 21h20V7.92c0-1.239-1-2.251-2.224-2.251h-8.294a.728.728 0 01-.52-.227l-1.74-1.766A2.066 2.066 0 007.668 3H4.224C3 3 2 4.012 2 5.252V21zm18.516-1.498H3.48V5.215a.75.75 0 01.744-.75h3.479c.188 0 .372.078.52.228l1.74 1.761c.407.45.963.676 1.555.676h8.258c.408 0 .74.337.74.75v11.622z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M3.62 20.207h16.76c.806 0 1.461-.656 1.461-1.463V7.46c0-.807-.655-1.462-1.462-1.462h-8.154v-.732c0-.806-.658-1.462-1.465-1.462H3.62c-.81 0-1.465.656-1.465 1.462v13.477c0 .81.658 1.465 1.465 1.465zM3.432 5.265c0-.106.082-.187.188-.187h7.14c.107 0 .188.081.188.187v1.37c0 .353.285.639.638.639h8.793c.107 0 .188.081.188.188v11.282a.188.188 0 01-.188.188H3.62a.184.184 0 01-.188-.188V5.265z"
                />
            </svg>
        );
    }
};

export default IconFolderRegular;