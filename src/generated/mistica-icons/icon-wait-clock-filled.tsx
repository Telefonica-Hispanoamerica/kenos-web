/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconWaitClockFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.168 17.381a.75.75 0 01.82.618.686.686 0 01-.604.806l-3.805.581-.532-3.89c-.072-.401.212-.765.604-.839a.75.75 0 01.82.618l.216 1.562a8.861 8.861 0 001.457-4.835c0-4.729-3.73-8.546-8.36-8.546-4.63 0-8.363 3.813-8.363 8.542 0 4.729 3.737 8.546 8.36 8.509 1.244 0 2.456-.254 3.557-.798a.754.754 0 01.96.364c.14.364 0 .802-.356.982A9.704 9.704 0 0111.78 22C6.374 22 2 17.529 2 12.002 2 6.475 6.382 2 11.784 2c5.403 0 9.78 4.475 9.777 9.998 0 2-.605 3.927-1.673 5.563l1.28-.18z"
            />
            <path
                fill={fillColor}
                d="M11.072 5.453c0-.397.316-.724.708-.724.393 0 .713.327.713.728v6.246l2.633 2.692a.715.715 0 010 1.019.686.686 0 01-.496.22.693.693 0 01-.497-.22l-2.845-2.909a.716.716 0 01-.216-.507V5.453z"
            />
        </svg>
    );
};

export default IconWaitClockFilled;
