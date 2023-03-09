/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconSingleparentFamilyRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M16.696 3.418c.131.1.08.352.055.46-.093.368-.279.752-.55 1.152a4.902 4.902 0 01-.714.835c-.017.02-.08.08-.135.124a.904.904 0 01-.116-.105 4.779 4.779 0 01-.73-.85 3.739 3.739 0 01-.553-1.152c-.025-.104-.076-.36.055-.46a.44.44 0 01.245-.08.836.836 0 01.44.104c.08.04.155.082.237.128l.029.016.169.092.41.008.194-.092.079-.042c.08-.044.144-.08.209-.11a.928.928 0 01.406-.104h.034a.445.445 0 01.236.076zm.702 2.34c.36-.528.609-1.052.744-1.568.182-.724-.004-1.375-.512-1.787a1.946 1.946 0 00-1.111-.4 2.364 2.364 0 00-1.171.256 2.37 2.37 0 00-1.175-.256c-.415.02-.808.164-1.108.4-.511.408-.693 1.063-.511 1.787.13.516.38 1.04.74 1.568.274.4.507.671.883 1.035.06.056.216.204.355.296.165.112.355.188.55.228l.266.028.287-.032a1.45 1.45 0 00.529-.224c.14-.092.3-.244.346-.288.376-.364.609-.64.888-1.043zm-5.85 3.078c.258.236.389.644.389 1.212s-.131.976-.39 1.208c-.249.224-.676.34-1.263.34-.588 0-1.015-.116-1.268-.344-.258-.232-.393-.64-.393-1.208s.13-.976.393-1.212c.253-.231.68-.347 1.268-.347.583.004 1.01.12 1.264.351zm.917 3.315c.528-.48.795-1.187.795-2.103 0-.92-.267-1.627-.79-2.107-.508-.46-1.24-.696-2.182-.696-.938 0-1.674.232-2.181.696-.528.48-.799 1.187-.799 2.107 0 .916.266 1.624.799 2.103.507.46 1.243.692 2.181.692s1.674-.236 2.177-.692zm2.57.784c-.055-.052-.114-.204-.114-.48 0-.28.06-.432.118-.484.06-.056.224-.108.512-.108.287 0 .452.056.507.104.06.052.118.204.118.484s-.059.428-.114.48c-.055.052-.22.104-.507.104-.296.004-.465-.052-.52-.1zm.516-2.311c-.613 0-1.095.152-1.43.456-.346.312-.523.775-.523 1.375s.177 1.06.524 1.376c.334.3.816.452 1.429.452.613 0 1.09-.152 1.424-.452.347-.312.516-.776.516-1.376 0-.604-.173-1.063-.516-1.375-.334-.304-.811-.456-1.424-.456zm2.895 5.322a2.16 2.16 0 00-.321-.248s-.592-.348-1.784-.348h-1.539c-.03-.036-.054-.076-.084-.104-.609-.596-1.513-.911-2.612-.911H8.479c-1.103 0-2.008.315-2.617.911C5.3 15.794 5 16.554 5 17.442v4.238c0 .176.16.313.347.313l6.91.007 6.405-.007c.19 0 .338-.14.338-.32v-4.295c.004-.576-.186-1.076-.554-1.432zM6.315 17.442c0-.392.088-.944.49-1.336.444-.44 1.154-.532 1.665-.532h3.627c.267 0 .58.028.884.112-.119.076-.237.16-.338.26-.368.36-.559.856-.559 1.435v3.375l-5.77.004v-3.318zm7.097-.06c0-.176.034-.42.194-.576.098-.1.28-.152.486-.184.09-.016.174-.036.275-.036h2.371c.119 0 .212.02.309.036.194.036.355.084.448.176.157.152.19.4.19.576v3.398h-4.269l-.004-.012v-3.379z"
            />
        </svg>
    );
};

export default IconSingleparentFamilyRegular;
