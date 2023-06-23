/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconCloverFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M15.688 19.735c1.684 1.35 3.566 2.11 5.213 2.11.076 0 .151-.003.224-.006a.89.89 0 00.44-.143.592.592 0 00.162-.849.659.659 0 00-.756-.224c-1.333.04-2.977-.63-4.462-1.823l-.067-.053a10.507 10.507 0 01-2.123-2.325c.215.188.43.353.652.482.885.52 1.765.787 2.544.787.437 0 .843-.084 1.201-.255.54-.258 1.205-.826 1.392-2.07.956-.866 1.06-1.712.967-2.28-.168-1.048-1.123-1.998-2.62-2.603-.845-.344-2.052-.423-3.234-.383.991-.62 1.93-1.35 2.406-2.096.854-1.319 1.056-2.621.557-3.568-.272-.516-.865-1.149-2.174-1.328-.91-.913-1.795-1.011-2.392-.921-1.098.16-2.092 1.072-2.728 2.498-.361.804-.443 1.955-.4 3.084-.65-.944-1.418-1.84-2.2-2.294-1.386-.812-2.75-1.008-3.745-.532-.54.258-1.204.826-1.392 2.07-.955.865-1.058 1.711-.966 2.28.168 1.048 1.126 1.994 2.619 2.6.714.29 1.692.394 2.695.394.182 0 .361-.005.543-.01-.992.618-1.933 1.352-2.409 2.097-.854 1.32-1.056 2.622-.557 3.569.271.515.868 1.148 2.173 1.325.745.748 1.474.947 2.042.947.124 0 .244-.009.35-.026 1.101-.16 2.096-1.073 2.729-2.498.182-.404.291-.9.353-1.429a11.695 11.695 0 002.899 3.418"
            />
        </svg>
    );
};

export default IconCloverFilled;
