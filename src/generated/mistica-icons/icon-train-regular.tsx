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

const IconTrainRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20 9.929C20 5.561 16.42 2 12.005 2S4 5.556 4 9.929v11.172c0 .396.326.72.726.72.4 0 .727-.324.727-.72V9.929c0-3.575 2.938-6.485 6.547-6.485 3.609 0 6.547 2.91 6.547 6.485v11.172c0 .396.326.72.727.72.4 0 .726-.324.726-.72V9.929zm-2.524 11.914a.537.537 0 000-.765l-1.993-1.97a1.991 1.991 0 001.788-1.97V8.85a1.996 1.996 0 00-2.002-1.984H8.722c-1.104 0-2.003.89-2.003 1.984v8.284c0 1.02.787 1.863 1.789 1.97l-1.993 1.974a.537.537 0 000 .765A.545.545 0 006.9 22c.14 0 .28-.05.387-.157l2.752-2.726h3.911l2.752 2.726a.545.545 0 00.387.157.54.54 0 00.386-.157zm-1.299-5.969a.362.362 0 00-.363-.36c-.2 0-.364.162-.364.36 0 .199.164.36.364.36.2 0 .363-.161.363-.36zm-8.363-3.602V8.85c0-.499.405-.9.908-.9h6.552c.498 0 .908.401.908.9v3.422H7.814zm.908 5.766a.9.9 0 01-.894-.766A1.448 1.448 0 009.63 15.88a1.448 1.448 0 00-1.816-1.389v-1.13h8.363v1.13a1.565 1.565 0 00-.363-.05c-.801 0-1.453.646-1.453 1.44a1.448 1.448 0 001.802 1.392.9.9 0 01-.894.766H8.722zm-.182-2.164c0 .199-.163.36-.363.36a.362.362 0 01-.363-.36.362.362 0 01.726 0z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M2.332 16.98a.757.757 0 01-.177-.492V5.273c0-.384.269-.697.602-.697h10.337c.117-.004 3.392-.094 7.204 4.311 1.135 1.312 1.65 2.668 1.53 4.027-.171 1.936-1.583 3.276-2.407 3.903a1.87 1.87 0 01-1.132.393h-.017c-1.009-.01-4.54-.028-15.515-.028a.568.568 0 01-.425-.203zM3.36 5.965v.824h8.28c.333 0 .602.31.602.697v3.805c0 .383-.269.697-.602.697H3.36v1.413h17.134a2.76 2.76 0 00.137-.627c.02-.231.012-.469-.03-.707h-7.059c-.333 0-.602-.31-.602-.697V5.966H3.36zm16.089 3.907c-2.205-2.544-4.167-3.431-5.301-3.739v4.54h5.892a6.332 6.332 0 00-.591-.801zm-.69 5.782a5.99 5.99 0 00.917-.865H3.36v1.001c10.507 0 13.931.019 14.92.028h.009a.755.755 0 00.47-.164zM5.104 8.185H3.36v2.413h1.743V8.184zm1.205 2.413H8.18V8.184H6.308v2.414zm4.73 0V8.184H9.383v2.414h1.653zm10.807 8.13c0-.387-.27-.697-.603-.697H2.757c-.333 0-.602.31-.602.697 0 .386.269.697.602.697h18.485c.334 0 .603-.31.603-.697z"
                />
            </svg>
        );
    }
};

export default IconTrainRegular;
