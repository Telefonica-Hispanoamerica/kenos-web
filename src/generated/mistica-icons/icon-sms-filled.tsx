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

const IconSmsFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M5.928 3.5h12.144c2.168 0 3.933 1.826 3.928 4.064v5.915c0 2.238-1.76 4.064-3.928 4.064h-9.14L6.179 20.39a.351.351 0 01-.388.08.367.367 0 01-.22-.34v-2.607C3.573 17.339 2 15.594 2 13.479V7.564C2 5.326 3.76 3.5 5.928 3.5zm.686 9.245c.274.123.567.18.905.18.914 0 1.55-.615 1.55-1.51 0-.945-.767-1.295-1.274-1.527h-.002c-.462-.209-.462-.327-.462-.403 0-.255.449-.265.499-.265.036 0 .229.005.416.057.283.08.58-.095.658-.388a.56.56 0 00-.375-.681 2.714 2.714 0 00-.7-.095c-.927 0-1.572.568-1.572 1.377 0 .918.8 1.282 1.102 1.42.608.279.64.378.64.515 0 .095 0 .388-.48.388-.192 0-.348-.028-.485-.09a.53.53 0 00-.704.294c-.114.283.01.61.284.728zm7.709-.374V8.676a.553.553 0 00-.412-.54.532.532 0 00-.603.294L12 11.137 10.692 8.43a.535.535 0 00-.603-.293.549.549 0 00-.412.54v3.694c0 .308.238.554.535.554a.542.542 0 00.535-.554v-1.348l.773 1.595a.53.53 0 00.48.307.532.532 0 00.48-.308l.773-1.594v1.348c0 .308.238.554.535.554a.542.542 0 00.535-.554zm.95.374c.275.123.568.18.906.18.915 0 1.555-.615 1.55-1.51 0-.945-.767-1.295-1.274-1.527h-.001c-.462-.209-.462-.327-.462-.403 0-.255.448-.265.498-.265.037 0 .229.005.416.057a.537.537 0 00.659-.388.56.56 0 00-.375-.681 2.713 2.713 0 00-.7-.095c-.928 0-1.573.568-1.573 1.377 0 .918.8 1.282 1.102 1.42.608.279.64.378.64.515 0 .095 0 .388-.48.388-.192 0-.347-.028-.484-.09a.53.53 0 00-.705.294c-.114.283.01.61.284.728z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.841 6.134c0-1.74-1.468-3.154-3.272-3.154H5.43c-1.806 0-3.274 1.415-3.274 3.154v8.765a3.113 3.113 0 002.053 2.955v1.686c0 .804.717 1.485 1.569 1.485.66 0 1.07-.353 1.291-.639l1.888-2.333h9.613c1.804 0 3.272-1.415 3.272-3.154V6.134zM5.872 9.092c0 .44.286.594.983.863.69.266 1.633.63 1.633 1.835 0 1.064-.75 1.675-2.056 1.675-.557 0-1.106-.113-1.406-.222a.384.384 0 01-.246-.454l.053-.21a.39.39 0 01.193-.246.399.399 0 01.32-.034c.355.11.716.166 1.08.166.466 0 .695-.087.805-.16.103-.064.22-.207.22-.507 0-.48-.293-.639-1.016-.919l-.005-.002c-.67-.26-1.586-.617-1.586-1.754 0-.49.174-.9.504-1.18.55-.47 1.53-.546 2.588-.246.205.053.328.26.278.465l-.054.205a.405.405 0 01-.5.28 3.072 3.072 0 00-.883-.132c-.905 0-.905.39-.905.577zm8.316-1.479a.394.394 0 01.401.39v4.969c0 .215-.18.389-.4.389h-.21a.395.395 0 01-.401-.39V9.989l-1.129 2.068a.406.406 0 01-.356.207h-.227a.4.4 0 01-.355-.21l-1.076-2.025v2.944c0 .215-.18.389-.4.389h-.213a.396.396 0 01-.401-.39V8c0-.216.18-.39.4-.39h.227a.4.4 0 01.356.21l1.588 2.986 1.63-2.986a.406.406 0 01.356-.207h.21zm2.423 1.479c0 .44.283.594.98.863.69.266 1.634.63 1.634 1.835 0 1.064-.75 1.675-2.056 1.675-.558 0-1.107-.113-1.406-.222a.384.384 0 01-.247-.454l.053-.21a.39.39 0 01.194-.246.399.399 0 01.319-.034c.356.11.72.166 1.081.166.465 0 .695-.087.804-.16.107-.064.224-.207.224-.507 0-.48-.294-.639-1.017-.919l-.005-.002c-.669-.26-1.586-.617-1.586-1.754 0-.49.174-.9.505-1.18.549-.47 1.53-.546 2.588-.246.204.053.328.26.277.465l-.053.205a.391.391 0 01-.188.243.41.41 0 01-.313.037 3.073 3.073 0 00-.883-.132c-.904 0-.904.39-.904.577z"
                />
            </svg>
        );
    }
};

export default IconSmsFilled;
