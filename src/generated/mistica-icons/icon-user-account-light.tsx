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

const IconUserAccountLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.822 19.454a.373.373 0 00.154-.497c-1.168-2.28-3.672-3.916-6.698-4.5 2.29-.98 3.9-3.289 3.9-5.977 0-3.574-2.852-6.48-6.362-6.48-3.51 0-6.362 2.906-6.362 6.48 0 2.688 1.61 4.997 3.905 5.978C5.132 15.283 2 18.184 2 21.63c0 .204.163.37.363.37.2 0 .363-.166.363-.37 0-3.674 4.077-6.665 9.09-6.665 3.766 0 7.187 1.745 8.513 4.338a.366.366 0 00.493.151zM6.18 8.48c0-3.166 2.527-5.74 5.636-5.74 3.11 0 5.637 2.574 5.637 5.74 0 3.167-2.528 5.74-5.637 5.74-3.109 0-5.636-2.573-5.636-5.74zm15.094 13.515c.4 0 .726-.332.726-.74a.734.734 0 00-.726-.739c-.4 0-.726.332-.726.74 0 .407.326.74.726.74z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.998 12.007c-3.161 0-4.833-1.642-4.833-4.747 0-1.577.43-2.783 1.278-3.589.818-.776 2.013-1.171 3.556-1.171 1.542 0 2.74.395 3.563 1.171.854.806 1.284 2.015 1.284 3.59 0 3.104-1.675 4.746-4.848 4.746zM3.675 21.5h16.65a.273.273 0 00.275-.268v-2.11c0-1.44-.455-2.669-1.32-3.55-.941-.96-2.349-1.47-4.067-1.47H8.787c-1.719 0-3.126.51-4.068 1.467-.862.882-1.32 2.11-1.32 3.55v2.11c0 .15.125.271.276.271zm16.374-.54H3.951v-1.84c0-1.301.402-2.396 1.165-3.175.848-.863 2.082-1.301 3.671-1.301h6.426c1.589 0 2.823.438 3.671 1.3.763.78 1.165 1.878 1.165 3.176v1.84zM8.826 4.06c-.736.701-1.11 1.778-1.11 3.2 0 1.423.374 2.497 1.11 3.192.71.673 1.779 1.011 3.172 1.011 1.394 0 2.468-.34 3.182-1.014.74-.698 1.115-1.772 1.115-3.192 0-1.42-.375-2.499-1.115-3.2-.716-.673-1.785-1.016-3.181-1.016-1.394 0-2.463.343-3.173 1.02z"
                />
            </svg>
        );
    }
};

export default IconUserAccountLight;
