/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconFragranceFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.203 13.914c0-3.316-1.941-5.835-5.213-6.83V4.262a2.103 2.103 0 00-2.095-2.106h-2.129a2.102 2.102 0 00-2.095 2.106v2.953c-2.69.952-4.871 3.123-4.871 6.7 0 2.375.941 4.336 2.672 5.625-.19.243-.31.546-.31.88 0 .784.635 1.422 1.42 1.422h8.876c.782 0 1.417-.638 1.417-1.423a1.41 1.41 0 00-.294-.857c1.717-1.274 2.622-3.204 2.622-5.647zM10.766 3.36h2.129a.9.9 0 01.9.902V6.82a10.536 10.536 0 00-1.793-.171c-.712 0-1.43.076-2.132.227V4.26h-.003a.9.9 0 01.9-.902zM7.58 20.637a.222.222 0 010-.443h8.876a.221.221 0 010 .443H7.58zm1.344-5.21V12.58c0-.395.32-.717.714-.717h4.482c.395 0 .714.322.714.717v2.846a.716.716 0 01-.714.717H9.637a.716.716 0 01-.714-.717zm.714 1.918a1.917 1.917 0 01-1.913-1.918V12.58a1.92 1.92 0 011.913-1.922h4.482c1.053 0 1.913.863 1.913 1.922v2.846a1.917 1.917 0 01-1.913 1.918H9.637zm.983-4.187c0 .221.18.4.401.4h1.672a.4.4 0 100-.8h-1.672a.4.4 0 00-.4.4zm-.23 1.991h2.928a.4.4 0 100-.8h-2.927a.4.4 0 000 .8zm2.01-9.787c.173 0 .316-.157.316-.347 0-.19-.143-.35-.317-.35-.173 0-.316.157-.316.35 0 .19.143.347.316.347zm1.114-.347c0 .633-.501 1.151-1.115 1.151-.616 0-1.115-.518-1.115-1.151 0-.636.502-1.151 1.115-1.151.617-.003 1.115.515 1.115 1.15zm2.252-.947a.592.592 0 00.849-.003l.711-.714a.602.602 0 00-.848-.851l-.712.717a.602.602 0 000 .851zm.602.782a.6.6 0 01.6-.603h1.305a.6.6 0 01.6.603.6.6 0 01-.6.602h-1.305a.603.603 0 01-.6-.602zm.297.784a.599.599 0 00-.848 0 .604.604 0 00.002.851l.754.757a.594.594 0 00.846 0 .602.602 0 000-.852l-.754-.756z"
            />
        </svg>
    );
};

export default IconFragranceFilled;
