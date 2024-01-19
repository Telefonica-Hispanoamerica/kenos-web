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

const IconPenFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.14 8.805l.323-.34c1.406-1.477 1.406-3.881 0-5.358a3.493 3.493 0 00-5.102 0l-.324.34 5.102 5.358zm-15.597 5.66l9.762-10.25 5.101 5.355-9.762 10.25-5.1-5.356zm-2.05 6.627l1.455-5.718 4.832 5.07-5.445 1.532a.67.67 0 01-.663-.188.747.747 0 01-.18-.696z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.348 3.404c.08.078.173.17.249.249 1.339 1.392 2.011 3.625-.12 5.728L9.234 20.558a.05.05 0 01-.01.007l-.01.007c-.002.001-.004.004-.005.007a.031.031 0 01-.005.007c-.02.02-.044.033-.067.046a.567.567 0 00-.034.02l-.007.006a.611.611 0 01-.324.104l-.017-.003-.016-.002-5.866 1.075a.612.612 0 01-.535-.157.6.6 0 01-.176-.524l.94-6.095a.276.276 0 01.017-.052c.004-.01.009-.02.012-.032a.63.63 0 00.022-.067.615.615 0 01.123-.182l11.311-11.19c2.154-2.132 4.39-1.465 5.76-.13zM13.905 5.91l-9.336 9.24 1.686 1.667 9.336-9.238-1.686-1.67zM7.112 17.667l1.664 1.644 9.314-9.26-1.639-1.622-9.339 9.238zm-3.37 1.221l1.373 1.342 2.398-.468-3.384-3.347-.387 2.473z"
                />
            </svg>
        );
    }
};

export default IconPenFilled;