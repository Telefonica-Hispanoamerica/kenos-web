/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconGasStationFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.834 8.7a.412.412 0 00-.003.051l.003 10.28c0 2.04-1.46 2.79-2.709 2.813h-.143c-1.327-.017-2.79-.768-2.79-2.824v-3.874a1.54 1.54 0 00-1.54-1.535h-.48v6.855c0 .733-.658 1.378-1.408 1.378H3.559c-.75 0-1.409-.645-1.409-1.378V3.552c0-.72.673-1.378 1.41-1.378h9.204c.737 0 1.409.659 1.409 1.378v8.852h.479a2.748 2.748 0 012.748 2.742v3.874c0 1.387.952 1.608 1.52 1.616h.183c.568-.01 1.524-.235 1.524-1.605l-.006-8.098a3.02 3.02 0 01-1.291.322c-.05.003-.11.003-.168.003h-.073c-.527-.008-2.504-.199-2.504-2.63 0-2.076 1.428-2.51 2.173-2.594l-2.823-2.851a.602.602 0 11.86-.846l4.333 4.378c.028.025.053.05.078.078l.009.009c0 .002 0 .002.003.005.355.392.619.97.619 1.84 0 .019-.002.036-.003.052zm-10.065.261v-3.09c0-.616-.484-1.159-1.039-1.159h-5c-.557 0-1.042.543-1.042 1.16v3.09c0 .627.48 1.159 1.042 1.159h5c.563 0 1.04-.532 1.04-1.16zm8.86-.277c0-.011 0-.025-.002-.028 0-.23-.003-.692-.306-1.028l-.047-.05c-.2-.19-.502-.33-.984-.342l-.162-.003h-.045c-1.288.008-1.288 1.022-1.288 1.406 0 .384 0 1.404 1.313 1.423h.056l.149-.003c1.126-.02 1.288-.756 1.31-1.207V8.71a.04.04 0 01.004-.012.04.04 0 00.002-.013z"
            />
        </svg>
    );
};

export default IconGasStationFilled;
