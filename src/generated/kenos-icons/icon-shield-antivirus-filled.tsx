/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconShieldAntivirusFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.61 5.303v.028c0 .528.006 6.643-.448 9.323-.611 3.551-7.163 6.773-7.905 7.128a.6.6 0 01-.518 0c-.746-.355-7.289-3.577-7.9-7.128-.462-2.681-.457-8.8-.456-9.323v-.028a.61.61 0 01.756-.593c1.595.258 2.44-.308 3.504-1.02l.026-.017c1.058-.714 2.26-1.518 4.324-1.518H12c2.065.003 3.266.807 4.325 1.518l.004.003c1.074.718 1.925 1.288 3.548 1.03a.645.645 0 01.504.138c.14.112.221.28.23.46zm-8.614 9.653c-1.563 0-1.989-.582-1.989-2.711 0-1.328.185-2.042.625-2.381.286-.222.734-.33 1.367-.33.625 0 1.07.106 1.359.324.442.339.63 1.053.63 2.387-.003 2.129-.429 2.711-1.992 2.711zm1.336-6.386c0-.381 0-.656-1.333-.656-1.331 0-1.333.274-1.336.654v.002l.003.016a4.145 4.145 0 011.327-.196c.521 0 .958.07 1.337.2l.002-.02zm1.535-.653l.042.779-.462.143.001-.008c.011-.087.022-.172.022-.264 0-1.04-.577-1.47-1.208-1.658a.568.568 0 00-.061-.72.561.561 0 00-.793-.009l-.008.009-.395.4a.061.061 0 00-.01.013.068.068 0 01-.013.018l-.008-.015a.063.063 0 00-.011-.016l-.398-.4a.561.561 0 00-.793-.009l-.008.009a.565.565 0 00-.053.728c-.617.193-1.174.625-1.174 1.647 0 .098.011.19.022.28l-.495-.154.042-.779a.572.572 0 00-.535-.602c-.309.006-.58.227-.597.544L7.91 9.079a.575.575 0 00.4.58l.908.28c-.171.41-.26.869-.303 1.336h-.68a.571.571 0 00-.57.572v.815c0 .317.256.574.57.574a.57.57 0 00.565-.574v-.24h.079c.005.579.053 1.142.182 1.646l-.75.233a.574.574 0 00-.401.577l.064 1.227a.571.571 0 00.566.543h.03a.57.57 0 00.536-.602l-.042-.779.484-.148c.457.599 1.21.98 2.451.98 1.235 0 1.989-.378 2.448-.975l.465.143-.042.779a.572.572 0 00.535.602h.031a.571.571 0 00.566-.543l.064-1.227a.57.57 0 00-.4-.577l-.731-.224c.131-.505.179-1.07.185-1.656h.078v.241c0 .317.255.574.566.574a.571.571 0 00.569-.571v-.818a.571.571 0 00-.566-.574h-.687c-.044-.47-.131-.933-.305-1.342l.888-.275a.569.569 0 00.4-.58L16 7.85c-.017-.317-.277-.54-.597-.544a.583.583 0 00-.534.61zM11.4 10.939v3.054c0 .316.252.571.566.571a.569.569 0 00.565-.571v-3.054a.573.573 0 00-.566-.571.567.567 0 00-.565.571z"
            />
        </svg>
    );
};

export default IconShieldAntivirusFilled;