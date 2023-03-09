/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconInternetPendriveFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.905 6.26c-5.75 0-8.549 2.855-8.549 8.731a.607.607 0 01-.599.614.607.607 0 01-.602-.614c0-6.515 3.372-9.958 9.75-9.958a.607.607 0 01.603.614.607.607 0 01-.602.613zm.583 2.703a.607.607 0 01-.6.614c-3.59 0-5.335 1.784-5.335 5.45a.605.605 0 01-.6.614H5.95a.607.607 0 01-.602-.613v-.003c0-4.37 2.26-6.678 6.54-6.678a.615.615 0 01.6.616zm8.151 4.603a.158.158 0 00-.126-.149h-.748v3.241h.737c.076 0 .137-.067.137-.151v-2.942zm-.148-1.376c.728 0 1.333.61 1.35 1.364v2.953c0 .759-.602 1.378-1.339 1.378h-.804a1.542 1.542 0 01-1.462 1.092h-5.852c-2.3-.084-3.619-1.518-3.619-3.93 0-2.417 1.32-3.846 3.622-3.921h5.84c.673 0 1.244.445 1.454 1.064h.81zm-9.415 2.89c0 .247.068.43.188.553.129.134.32.199.552.199.232 0 .423-.065.552-.2.12-.123.187-.305.187-.551 0-.513-.291-.75-.74-.75-.447 0-.739.237-.739.75z"
            />
        </svg>
    );
};

export default IconInternetPendriveFilled;
