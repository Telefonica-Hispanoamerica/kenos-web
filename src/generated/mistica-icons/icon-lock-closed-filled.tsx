/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconLockClosedFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.912 9.498V8.072C17.912 4.723 15.26 2 12 2S6.088 4.723 6.088 8.07v1.428c-1.153 0-2.088.96-2.088 2.144v8.214C4 21.04 4.935 22 6.088 22h11.824C19.065 22 20 21.04 20 19.856v-8.214c0-1.184-.939-2.143-2.088-2.143zm-2.064 4.308l-4.892 5.019L8.85 16.66a.546.546 0 010-.756.512.512 0 01.736 0l1.371 1.408 4.152-4.263a.505.505 0 01.736 0 .542.542 0 01.004.756zm-8.37-4.307V8.07c0-2.56 2.03-4.643 4.522-4.643 2.493 0 4.522 2.083 4.522 4.643v1.428H7.478z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M7.087 9.2V6.655c0-2.493 2.16-4.521 4.816-4.521h.19c2.655 0 4.815 2.028 4.815 4.52v2.551c.504.137.93.367 1.272.688.619.577.938 1.425.952 2.52v6.096c-.014 1.092-.336 1.941-.952 2.52-.591.555-1.432.836-2.499.836H8.29c-1.067 0-1.908-.283-2.496-.838-.616-.58-.93-1.431-.93-2.526l.003-5.645c0-.308-.003-.431-.003-.431v-.006c0-1.095.314-1.944.93-2.526a2.947 2.947 0 011.294-.695zm8.661-.143V6.656c0-1.852-1.638-3.362-3.655-3.362h-.19c-2.017 0-3.656 1.507-3.656 3.362v2.4h7.501zm-2.501 8.596c.32-.306.476-.737.476-1.28 0-.544-.157-.975-.476-1.28-.305-.295-.723-.443-1.244-.443-.52 0-.938.148-1.243.442-.317.306-.477.737-.477 1.28 0 .544.16.975.477 1.28.305.295.722.443 1.243.443.521 0 .939-.148 1.244-.442z"
                />
            </svg>
        );
    }
};

export default IconLockClosedFilled;
