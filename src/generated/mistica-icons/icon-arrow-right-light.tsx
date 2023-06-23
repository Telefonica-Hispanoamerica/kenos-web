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

const IconArrowRightLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M10.854 21.852c.232.099.476.148.72.148.456 0 .892-.185 1.232-.535L22 11.992l-9.194-9.465a1.733 1.733 0 00-1.96-.374 1.89 1.89 0 00-1.16 1.741v4.422h-7.33a.367.367 0 000 .732h8.05V3.894c0-.556.364-.91.712-1.058.324-.14.812-.156 1.176.218L20.988 12l-8.694 8.946c-.364.375-.844.358-1.176.218a1.139 1.139 0 01-.712-1.058v-5.154H4.68a.365.365 0 00-.355.366c0 .198.16.367.355.367h5.015v4.425c0 .758.456 1.441 1.16 1.742zm-8.142-5.809a.723.723 0 00.712-.733.723.723 0 00-.712-.733.723.723 0 00-.712.733c0 .405.319.733.712.733z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.43 21.757c.111.045.23.067.35.067.313 0 .641-.148.902-.423l8.974-8.93c.135-.129.205-.271.205-.426.003-.173-.084-.344-.264-.518L12.694 2.57c-.367-.375-.801-.496-1.185-.33-.41.173-.67.641-.653 1.165l.023 3.518c0 .081-.079.146-.174.146l-6.908-.003c-.554.008-.958.154-1.238.443-.302.313-.437.764-.425 1.425v6.219c-.017.574.134 1.042.44 1.353.293.3.705.448 1.229.44h6.9c.094 0 .173.064.173.145l.005 3.779c-.005.415.2.745.55.888zm-.729-5.404H3.797v.006c-.356.006-.625-.084-.802-.263-.24-.247-.28-.639-.271-.925V8.928c-.009-.488.075-.818.26-1.009.165-.17.434-.257.82-.263l6.9.003a.75.75 0 00.762-.737l-.023-3.524V3.39c-.01-.275.113-.53.295-.608.201-.087.42.09.532.205l8.907 8.96.003.003a.51.51 0 01.076.087c-.003.003-.006.008-.011.011l-.006.006-8.975 8.935-.003.003-.002.003c-.236.25-.474.272-.608.218-.12-.047-.185-.168-.182-.336v-.005l-.006-3.782a.75.75 0 00-.762-.736z"
                />
            </svg>
        );
    }
};

export default IconArrowRightLight;
