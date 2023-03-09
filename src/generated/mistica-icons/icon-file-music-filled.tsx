/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconFileMusicFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.387 8.152a.612.612 0 00-.047-.238.842.842 0 00-.213-.384l-5.213-5.126a.85.85 0 00-.605-.249h-7.3c-.725 0-1.386.658-1.386 1.384v16.919c0 .736.647 1.383 1.386 1.383h11.992c.75 0 1.386-.633 1.386-1.384V8.152zM13.64 5.59V3.824l4.05 3.984h-1.772c-.684 0-1.258-.213-1.664-.611-.4-.395-.614-.95-.614-1.608zm1.19 6.885l-3.742-1.03v-.611l3.743 1.03v.611zm-.876 6.09h.104c.512-.011.773-.291.773-.838 0-.543-.26-.826-.779-.84h-.112c-.756.009-.756.63-.756.835 0 .552.258.835.77.843zM9.29 16.556h-.115c-.51-.009-.77-.292-.77-.844 0-.204 0-.826.756-.832h.11c.518.012.781.297.781.844 0 .54-.26.82-.762.832zm1.62-6.866l4.327 1.193c.353.045.63.353.639.734v6.115c0 1.37-.964 1.871-1.79 1.888h-.143c-.824-.011-1.79-.515-1.79-1.896 0-1.381.96-1.88 1.784-1.888l.143.002c.25.006.51.062.756.168V13.57l-3.742-1.034-.014 3.33c-.07 1.253-.983 1.729-1.776 1.746H9.16c-.826-.012-1.79-.516-1.79-1.897 0-1.38.961-1.88 1.785-1.888h.143c.249.006.51.062.756.168v-3.59c0-.407.322-.735.72-.735l.134.02z"
            />
        </svg>
    );
};

export default IconFileMusicFilled;
