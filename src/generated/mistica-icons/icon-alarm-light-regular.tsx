/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconAlarmLightRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.37 3.326c0 .375.304.68.677.68a.68.68 0 00.676-.68V1.679A.678.678 0 0012.047 1a.678.678 0 00-.676.68v1.646zm7.952 14.747c.826 0 1.546.61 1.546 1.305v2.314c0 .698-.723 1.308-1.546 1.308H4.772c-.839 0-1.546-.598-1.546-1.308v-2.314c0-.707.707-1.305 1.546-1.305h.17v-6.399c0-4.601 2.522-7.137 7.102-7.137 4.583 0 7.106 2.536 7.106 7.137v6.399h.172zm-13.029-.025h11.508v-6.374c0-3.887-1.882-5.778-5.757-5.778-3.87 0-5.75 1.89-5.75 5.778v6.374zm13.223 1.44a.362.362 0 00-.194-.06H4.772a.385.385 0 00-.194.053v2.11c.06.035.125.05.194.05h14.55a.355.355 0 00.194-.059v-2.094zM3.989 9.283a.68.68 0 01-.676.68H1.676a.68.68 0 010-1.36h1.64c.373 0 .677.304.673.68zM23 9.314a.678.678 0 00-.676-.68h-1.64a.678.678 0 00-.677.68c0 .376.304.68.677.68h1.64a.678.678 0 00.676-.68zM4.929 5.254L3.77 4.09a.678.678 0 01.952-.964l.003.003 1.158 1.164a.682.682 0 01-.479 1.161.692.692 0 01-.475-.2zm12.205-.623a.679.679 0 00.673.686c.178 0 .35-.072.479-.2l1.158-1.165a.68.68 0 000-.958l-.003-.003a.673.673 0 00-.952.003l-1.158 1.165a.668.668 0 00-.197.472z"
            />
        </svg>
    );
};

export default IconAlarmLightRegular;
