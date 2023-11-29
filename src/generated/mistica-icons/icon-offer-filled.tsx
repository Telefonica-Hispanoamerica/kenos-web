/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '@hooks/hooks';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconOfferFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.338 14.383a.725.725 0 01.155.706.706.706 0 01-.54.481l-3.17.637.37 3.217a.713.713 0 01-1.005.734L14.21 18.81l-1.587 2.823a.711.711 0 01-1.244 0L9.791 18.81l-2.937 1.348a.701.701 0 01-.718-.074.708.708 0 01-.288-.66l.375-3.217-3.17-.637a.72.72 0 01-.54-.481.711.711 0 01.156-.706L4.86 12 2.67 9.617a.724.724 0 01-.156-.706.706.706 0 01.54-.481l3.17-.637-.375-3.217a.723.723 0 01.288-.66.723.723 0 01.718-.074L9.792 5.19l1.587-2.823a.711.711 0 011.244 0l1.588 2.823 2.937-1.348a.712.712 0 01.718.074c.21.15.32.403.288.66l-.37 3.217 3.17.637a.72.72 0 01.54.481.712.712 0 01-.156.706L19.147 12l2.19 2.383z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M12 21.815c-.535 0-.871-.432-.98-.575-.194-.249-.365-.557-.527-.854-.137-.25-.387-.706-.527-.807-.179.014-.644.294-.899.448-.672.407-1.367.827-1.975.474-.616-.356-.6-1.174-.582-1.966.005-.292.017-.827-.056-.986-.16-.073-.695-.062-.986-.056-.793.016-1.61.033-1.967-.583-.35-.61.068-1.305.474-1.978.154-.255.434-.72.448-.899-.104-.14-.558-.39-.81-.526-.297-.163-.605-.334-.854-.527-.574-.443-.574-.846-.574-.978 0-.535.431-.87.574-.98.25-.193.557-.364.854-.527.25-.137.706-.386.807-.526-.014-.18-.294-.645-.448-.9-.406-.672-.826-1.366-.473-1.974.355-.616 1.173-.6 1.966-.583.291.006.826.017.986-.056.073-.16.062-.695.056-.986-.017-.793-.034-1.61.583-1.966.61-.353 1.305.067 1.974.473.255.154.72.434.897.448.14-.103.39-.557.526-.806.163-.297.334-.605.527-.855.445-.574.849-.574.98-.574.535 0 .872.431.98.574.194.25.365.558.527.855.14.249.39.703.53.806.179-.014.644-.294.899-.448.672-.406 1.367-.826 1.977-.473.617.355.6 1.173.583 1.966-.005.291-.017.826.056.986.16.073.695.062.986.056.793-.017 1.61-.033 1.966.583.354.61-.067 1.305-.473 1.975-.154.254-.434.72-.448.899.104.14.557.39.807.526.297.163.605.334.854.527.574.445.574.849.574.98 0 .535-.431.871-.574.98-.25.194-.557.365-.854.527-.25.138-.706.387-.807.527.014.18.294.644.448.896.406.673.827 1.367.474 1.975-.356.616-1.177.6-1.967.583-.291-.006-.826-.017-.986.056-.073.16-.061.694-.056.986.017.793.034 1.61-.582 1.966-.611.353-1.303-.067-1.975-.473-.255-.154-.72-.434-.897-.448-.14.103-.389.557-.526.806-.163.297-.334.605-.527.855-.448.577-.851.577-.983.577z"
                />
            </svg>
        );
    }
};

export default IconOfferFilled;