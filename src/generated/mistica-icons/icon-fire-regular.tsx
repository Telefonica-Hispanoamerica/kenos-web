/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconFireRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.729 9.911c.51.364.98.776 1.409 1.233a6.025 6.025 0 011.647 4.367 6.004 6.004 0 01-1.96 4.218c-1.752 1.617-3.684 1.9-3.765 1.91a8.056 8.056 0 01-1.81.202c-.042 0-.084-.003-.126-.006l-.084-.005-.038.003a.736.736 0 01-.083.006 4.07 4.07 0 01-.549-.045c-2.19-.23-4.277-1.306-5.624-3.028-3.404-4.35-.6-11.042 2.907-13.925 1.572-1.288 3.437-2.238 5.252-2.67a.597.597 0 01.6.203c.145.176.18.42.087.63-.07.165-1.712 4.095 2.137 6.907zm.288 8.925a4.804 4.804 0 001.572-3.373 4.836 4.836 0 00-1.325-3.49 8.16 8.16 0 00-1.232-1.079c-3.292-2.408-3.205-5.582-2.863-7.254a12.556 12.556 0 00-3.757 2.134C6.36 8.281 3.78 14.292 6.687 18.01a6.523 6.523 0 001.762 1.538 3.317 3.317 0 01.594-3.35c.201-.232.428-.445.678-.636 1.512-1.185.881-2.867.852-2.944v-.003a.6.6 0 01.7-.815c.86.221 1.742.7 2.481 1.353 1.6 1.41 2.868 4.628 1.49 6.846.65-.288 1.25-.68 1.773-1.162zm-5.77 1.706l.03.005c.01.002.02.003.029.006l.16.021c.105.015.21.03.32.038.066.002.133.005.198.002.024.002.05.002.075.001h.037a2.734 2.734 0 002.04-1.104c1.178-1.616.078-4.35-1.169-5.448a5.343 5.343 0 00-1.045-.723c.045.983-.255 2.227-1.47 3.182-.19.146-.362.305-.51.476a2.1 2.1 0 00.095 2.866c.571.566 1.205.677 1.21.677z"
            />
        </svg>
    );
};

export default IconFireRegular;
