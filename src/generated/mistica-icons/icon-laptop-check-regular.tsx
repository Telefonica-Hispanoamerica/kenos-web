/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconLaptopCheckRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.217 7.212v8.473H22v.552C22 17.746 20.82 19 19.394 19H4.501C3.106 19 2 17.783 2 16.237v-.552h1.787V7.212C3.787 5.995 4.752 5 5.931 5h12.142c1.18 0 2.144.995 2.144 2.212zm-9.641 4.861l3.785-3.904a.672.672 0 01.997 0 .733.733 0 010 1.032l-4.787 4.937-2.285-2.357a.733.733 0 010-1.033.681.681 0 011 0l1.29 1.325zM5.218 7.212v8.473h13.568V7.212a.726.726 0 00-.713-.736H5.931a.726.726 0 00-.713.736zm-.717 10.685h14.893c.645 0 1.216-.481 1.431-1.104H3.143c.178.66.713 1.104 1.358 1.104z"
            />
        </svg>
    );
};

export default IconLaptopCheckRegular;
