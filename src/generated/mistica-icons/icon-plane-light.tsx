/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '../../hooks';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconPlaneLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M15.453 17.707l2.138 3.793 1.574-1.603c.465-.476.65-1.18.479-1.83l-2.105-8.044 3.864-3.958a2.124 2.124 0 000-2.953 2.002 2.002 0 00-2.883 0L14.657 7.07l-7.85-2.156a1.828 1.828 0 00-1.787.49L3.45 7.012l7.14 4.226-3.688 3.778-2.067-.568a1.828 1.828 0 00-1.787.49L2 16.012l4.911 2.904a1.825 1.825 0 002.238-.301l4.598-4.847a.383.383 0 00-.01-.534.362.362 0 00-.521.01l-4.357 4.599-.237.243a1.092 1.092 0 01-1.341.18l-4.077-2.41.365-.374c.28-.286.687-.403 1.071-.296l2.48.68 4.674-4.789-7.14-4.225.887-.908c.28-.287.687-.404 1.071-.297l8.263 2.268 4.167-4.269c.493-.5 1.346-.5 1.84 0 .506.52.506 1.36 0 1.88l-4.168 4.269 2.214 8.466c.1.388-.01.81-.289 1.097l-.886.908-1.655-2.938a.364.364 0 00-.507-.14.383.383 0 00-.138.519z"
                />
                <path
                    fill={fillColor}
                    d="M14.96 14.642a.75.75 0 00-.74.758.75.75 0 00.74.757.75.75 0 00.74-.757.75.75 0 00-.74-.758z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.42 2.156c.605.033 1.19.344 1.692.902 1.028 1.143.96 2.442-.182 3.473-.244.219-3.006 2.74-3.709 3.384l1.392 8.854a.41.41 0 01-.224.434l-1.442.706c0 .003-.003.003-.003.003a.413.413 0 01-.546-.196l-3.017-6.353a49.813 49.813 0 00-2.174 2.092c-.773.78-1.392 1.401-2.46 2.236l.239 3.103a.408.408 0 01-.23.4l-1.25.603a.41.41 0 01-.528-.16l-1.83-3.078-2.812-1.849a.41.41 0 01-.118-.568l.704-1.073a.406.406 0 01.372-.185l2.854.207c.805-1.024 1.435-1.636 2.217-2.396l.016-.015a49.584 49.584 0 002.117-2.157L4.157 7.59c-.017-.009-.034-.017-.05-.028a.412.412 0 01-.127-.566l.902-1.434a.426.426 0 01.406-.188l8.79 1.294c.706-.764 3.286-3.543 3.566-3.795.555-.502 1.168-.76 1.776-.717zm-3.045 7.67a.41.41 0 01.13-.368S20.103 6.17 20.38 5.92c.795-.717.837-1.518.12-2.313-.358-.398-.736-.611-1.126-.63-.384-.012-.787.15-1.185.51-.21.187-2.305 2.433-3.66 3.898a.417.417 0 01-.36.126L5.432 6.226l-.51.812 6.43 2.972a.412.412 0 01.132.647 49.7 49.7 0 01-2.53 2.608c-.81.787-1.449 1.409-2.292 2.498a.401.401 0 01-.353.16l-2.832-.207-.347.532 2.549 1.675c.05.034.095.079.126.132l1.686 2.837.658-.316-.235-3.042a.411.411 0 01.16-.359c1.13-.867 1.753-1.496 2.541-2.289l.01-.01a51.148 51.148 0 012.62-2.493.405.405 0 01.355-.096c.126.028.233.11.289.227l3.07 6.474.795-.39-1.378-8.773z"
                />
            </svg>
        );
    }
};

export default IconPlaneLight;
