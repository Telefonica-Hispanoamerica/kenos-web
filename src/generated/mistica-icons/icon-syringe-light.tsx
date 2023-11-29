/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconSyringeLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19 2.271l2.716 2.734c.16.17.16.44.009.602a.427.427 0 01-.303.126.408.408 0 01-.294-.126l-.025-.025-2.566 2.591 1.375 1.384a.42.42 0 010 .6.407.407 0 01-.588 0l-.336-.34-8.524 8.594a.426.426 0 01-.302.126.407.407 0 01-.294-.126l-1.09-1.098-1.258 1.258a.394.394 0 01-.294.126.413.413 0 01-.302-.126l-.47-.474-3.59 3.614a.427.427 0 01-.302.126.42.42 0 01-.291-.717l3.588-3.622-.403-.406a.428.428 0 01-.126-.294c0-.12.05-.222.126-.306l1.255-1.255-.947-.955a.435.435 0 010-.6L14.299 5.1l-.31-.314a.42.42 0 01.584-.599l1.275 1.283 2.566-2.583-.009-.017a.42.42 0 010-.599.428.428 0 01.594 0zm-2.555 3.798l1.493 1.502 2.566-2.583-1.494-1.51-2.565 2.591zm-9.79 7.916l3.504 3.53 8.235-8.292-3.504-3.529-.863.868 1.3 1.283a.417.417 0 01-.294.717.435.435 0 01-.294-.117l-1.3-1.292-1.485 1.485a.11.11 0 01.034.025l2.213 2.221c.16.168.16.44 0 .6a.427.427 0 01-.303.126.408.408 0 01-.294-.126L11.4 9.265a.116.116 0 01-.013-.016l-.012-.017-1.477 1.484 1.376 1.37c.168.16.168.431.008.6a.427.427 0 01-.302.126.408.408 0 01-.294-.126l-1.384-1.367-1.476 1.484 2.022 2.025a.42.42 0 010 .6.408.408 0 01-.294.126.427.427 0 01-.303-.126l-2.01-2.034-.586.591zm.568 3.69l.956-.964-.88-.885-.955.972.88.876z"
            />
        </svg>
    );
};

export default IconSyringeLight;