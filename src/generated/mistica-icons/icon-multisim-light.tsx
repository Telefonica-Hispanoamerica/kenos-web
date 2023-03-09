/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconMultisimLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20 19.5c0 .395-.32.716-.713.716a.714.714 0 01-.713-.716.714.714 0 111.426 0z"
            />
            <path
                fill={fillColor}
                d="M12.171 4.5c.418 0 .833.172 1.127.468l3.397 3.416c.294.3.462.712.462 1.132V22H4V6.1c0-.884.713-1.6 1.593-1.6h.896v-.896A1.6 1.6 0 018.082 2h5.507c.418 0 .828.172 1.127.468l4.46 4.496c.294.3.466.712.466 1.136v9.256c0 .196-.16.356-.355.356a.356.356 0 01-.354-.356V8.1a.903.903 0 00-.259-.628L14.21 2.976a.885.885 0 00-.621-.26H8.082a.883.883 0 00-.88.888V4.5h4.97zM4.713 21.284h11.731V9.516a.91.91 0 00-.259-.628l-3.389-3.412a.885.885 0 00-.62-.26H5.592a.882.882 0 00-.88.884v15.184z"
            />
            <path
                fill={fillColor}
                d="M7.464 11.644h6.228c.538 0 .976.436.976.98v6.88h-8.18v-6.88c0-.54.439-.98.976-.98zm-.262 7.14h6.753V12.62a.266.266 0 00-.263-.264H7.464a.266.266 0 00-.262.264v6.164z"
            />
        </svg>
    );
};

export default IconMultisimLight;
