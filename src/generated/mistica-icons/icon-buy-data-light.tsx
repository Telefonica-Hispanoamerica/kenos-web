/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconBuyDataLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M17.274 17.004h-6.662c-.777 0-1.466-.26-1.987-.752-.555-.524-.914-1.284-1.07-2.263C7.408 13.075 6.05 4.909 5.888 4a1.637 1.637 0 00-.65-1.013 2.138 2.138 0 00-1.289-.419H2.285A.286.286 0 012 2.285C2 2.128 2.128 2 2.285 2H3.95a2.72 2.72 0 011.634.532c.464.348.772.835.869 1.37.058.325.269 1.577.522 3.094h3.649V5.5c0-.88 1.864-1.281 3.595-1.281s3.596.401 3.596 1.28V7h3.9a.286.286 0 01.276.356l-.398 1.596-.37 1.482a623.86 623.86 0 01-.897 3.587c-.256.99-.626 1.717-1.125 2.218-.515.506-1.161.766-1.927.766zm.54-9.435v5.879c0 .88-1.861 1.278-3.595 1.278-1.73 0-3.595-.401-3.595-1.281v-5.88H7.07c.44 2.636.963 5.788 1.048 6.335.256 1.634 1.145 2.537 2.494 2.537h6.662c.618 0 1.116-.2 1.523-.606.421-.422.749-1.08.977-1.956.075-.29.259-1.027.481-1.918.13-.522.273-1.097.416-1.664l.015-.064.002-.006c.256-1.028.499-2.006.663-2.654h-3.536zm-3.355 4.507l-.24.002h-.028c-1.133-.003-2.318-.176-2.998-.543v1.913c0 .04.136.242.766.43.598.179 1.4.279 2.26.279.86 0 1.66-.1 2.26-.28.633-.19.767-.392.767-.43v-1.912c-.636.344-1.72.518-2.787.54zm2.787-1.276V8.887c-.64.346-1.73.52-2.803.541l-.224.003c-.83 0-1.688-.092-2.36-.285a3.353 3.353 0 01-.666-.261v1.912c0 .04.136.242.766.43.598.182 1.4.282 2.26.282.86 0 1.66-.1 2.26-.28.633-.19.767-.392.767-.429zm0-4.56c-.684.37-1.885.543-3.027.543-1.141 0-2.34-.177-3.026-.547V8.15c0 .04.136.242.766.43.598.18 1.4.282 2.26.282.86 0 1.66-.1 2.26-.279.633-.19.767-.393.767-.43V6.24zm0-.741c0-.04-.137-.242-.766-.433-.601-.176-1.401-.276-2.26-.276-.858 0-1.66.1-2.261.279-.63.19-.766.393-.766.433 0 .04.136.242.766.43.598.179 1.4.279 2.26.279.86 0 1.66-.1 2.26-.28.633-.19.767-.392.767-.432zM10.612 22c-.885 0-1.395-.51-1.395-1.395s.51-1.395 1.395-1.395c.886 0 1.395.51 1.395 1.395S11.5 22 10.612 22zm0-2.22c-.572 0-.826.253-.826.825s.254.826.826.826.826-.254.826-.826-.254-.826-.826-.826zM16.164 22c-.886 0-1.395-.51-1.395-1.395s.51-1.395 1.395-1.395 1.395.51 1.395 1.395S17.052 22 16.164 22zm0-2.22c-.573 0-.826.253-.826.825s.254.826.826.826.825-.254.825-.826-.253-.826-.825-.826z"
            />
        </svg>
    );
};

export default IconBuyDataLight;
