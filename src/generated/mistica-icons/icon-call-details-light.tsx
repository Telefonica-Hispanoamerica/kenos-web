/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconCallDetailsLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.324 7.9v13.108c0 .44-.387.826-.826.826H7.935c-.432 0-.827-.395-.827-.826v-5.462c0-.045.01-.087.03-.124l-.186-.184-.003-.003-.062-.06-.003-.002c-1.778-1.781-3.07-3.6-3.73-5.258-.623-1.557-.642-2.876-.062-3.72a.05.05 0 01.01-.014l.012-.016c.073-.101.291-.404.515-.617 1.179-1.126 2.348-1.199 3.48-.224V2.983c0-.418.408-.827.826-.827h7.647a.29.29 0 01.106.021.302.302 0 01.093.06L21.243 7.7c.052.052.08.12.081.193V7.9zm-6.022-5.184H7.935c-.107 0-.266.16-.266.267v2.73a.277.277 0 01-.04.143c.112.137.214.282.306.435.442.711.706 1.82-.538 3.064-.12.123-.25.235-.387.342-.196.246.146.823.367 1.148.47.687 1.252 1.49 1.799 2.037l.064.064c.546.546 1.35 1.328 2.037 1.796.324.224.901.563 1.148.367.106-.138.218-.267.342-.387 1.243-1.244 2.35-.98 3.064-.538.272.163.518.356.74.583 1.207 1.207 1.21 2.462.002 3.723a4.685 4.685 0 01-.586.493l-.03.022-.017.011-.014.011c-.406.28-.927.423-1.53.423-.643 0-1.386-.16-2.19-.481-1.435-.573-2.991-1.618-4.537-3.043v5.082c0 .12.145.266.266.266h12.563c.129 0 .266-.137.266-.266V8.178h-2.451c-.88 0-1.633-.288-2.18-.831-.546-.544-.831-1.297-.831-2.18v-2.45zm5.067 4.902l-4.507-4.504v2.053c0 1.488.96 2.451 2.45 2.451h2.057zM7.346 14.84c3.659 3.658 6.92 4.644 8.258 3.73l.025-.019c.241-.173.42-.322.541-.448.994-1.042.997-1.95.006-2.941a3.15 3.15 0 00-.628-.496l-.008-.005c-.796-.496-1.572-.348-2.376.456-.112.112-.218.23-.313.359l-.031.033c-.602.555-1.55-.092-1.857-.305-.726-.496-1.555-1.303-2.118-1.863l-.064-.064c-.563-.563-1.367-1.393-1.863-2.118l-.002-.003c-.216-.315-.859-1.254-.303-1.854a.363.363 0 01.033-.03 3.58 3.58 0 00.359-.315c.8-.8.952-1.58.456-2.375l-.005-.008a3.058 3.058 0 00-.496-.628c-.992-.991-1.9-.989-2.941.006a4.03 4.03 0 00-.448.54l-.02.026c-.913 1.336.073 4.599 3.728 8.257l.037.037.03.028z"
            />
        </svg>
    );
};

export default IconCallDetailsLight;
