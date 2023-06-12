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

const IconDatabaseFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M17.912 2H4v5.713h16v-3.57C20 2.965 19.06 2 17.912 2zM20 13.787H4v-5h16v5zM9.738 10.213H7.303a.544.544 0 00-.52.535c0 .283.244.534.52.534h2.435c.277 0 .521-.25.521-.534a.544.544 0 00-.52-.535zM4 22h16v-7.143H4V22zm5.738-5.713c.277 0 .521.251.521.535a.544.544 0 01-.52.535H7.302a.544.544 0 01-.52-.535c0-.284.244-.535.52-.535h2.435zM7.303 4.861a.544.544 0 01-.52-.535c0-.283.244-.534.52-.534h2.435c.277 0 .521.251.521.534a.54.54 0 01-.52.535H7.302z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.84 9.768l-.006 4.46c0 .314-.101.602-.266.84.17.241.271.532.271.849l-.005 4.46a1.46 1.46 0 01-1.451 1.464H3.6a1.462 1.462 0 01-1.45-1.465l.005-4.46c0-.313.098-.601.266-.84a1.46 1.46 0 01-.272-.848l.006-4.46c0-.313.098-.602.266-.84a1.46 1.46 0 01-.272-.849l.006-4.459c0-.807.65-1.465 1.448-1.465h16.782a1.46 1.46 0 011.448 1.465l-.006 4.46c0 .313-.1.602-.266.84.177.24.277.532.277.848zm-2.01-3.963c0-1.034-.61-1.65-1.63-1.65-1.023 0-1.63.616-1.63 1.65 0 1.033.607 1.65 1.63 1.65 1.022 0 1.63-.617 1.63-1.65zm-.017 6.199c0-1.034-.61-1.65-1.63-1.65-1.022 0-1.633.616-1.633 1.65 0 1.033.61 1.65 1.633 1.65 1.022 0 1.63-.617 1.63-1.65zm-1.63 7.851c1.022 0 1.63-.616 1.63-1.65 0-1.033-.61-1.65-1.63-1.65-1.022 0-1.633.617-1.633 1.65 0 1.034.61 1.65 1.633 1.65zM11.19 5.802a.617.617 0 00-.614-.622H4.893a.617.617 0 00-.614.622c0 .345.275.622.614.622h5.683a.617.617 0 00.614-.622zm-.614 6.824a.617.617 0 00.614-.622.617.617 0 00-.614-.622H4.893a.617.617 0 00-.614.622c0 .344.275.622.614.622h5.683zm.614 5.619a.617.617 0 00-.614-.622H4.893a.617.617 0 00-.614.622c0 .341.275.621.614.621h5.683a.617.617 0 00.614-.621zm7.66-12.44c0-.485-.17-.658-.65-.658-.478 0-.649.17-.649.658 0 .484.17.658.65.658.479 0 .65-.174.65-.658zm-.666 5.54c.479 0 .65.174.65.659 0 .484-.171.658-.65.658s-.65-.174-.65-.658c0-.485.171-.659.65-.659zm.65 6.86c0-.484-.171-.658-.65-.658s-.65.174-.65.658c0 .485.171.659.65.659s.65-.174.65-.659z"
                />
            </svg>
        );
    }
};

export default IconDatabaseFilled;
