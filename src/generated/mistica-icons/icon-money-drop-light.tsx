/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconMoneyDropLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M14.417 6.305l3.126 3.21c.02.023.067.07.092.096a.58.58 0 00.359.123c.16 0 .314-.067.403-.185l3.196-3.272a.61.61 0 00.076-.633.57.57 0 00-.513-.333L19.773 5.3l-.003-2.23a.913.913 0 00-.905-.919h-1.75a.913.913 0 00-.905.919l.002 2.23-1.38.01a.565.565 0 00-.516.331c-.098.205-.07.454.1.664zm-11.51.922c0-.235.188-.426.42-.426h.6l-.013-.14a3.94 3.94 0 01-.024-.387c0-.037.004-.073.007-.109a.95.95 0 00.007-.109h-.577a.423.423 0 01-.42-.426c0-.235.188-.426.42-.426h.664c.35-1.918 1.692-2.969 3.877-2.969.787 0 1.473.135 2.039.4a.43.43 0 01.204.567.419.419 0 01-.557.207c-.454-.213-1.022-.322-1.686-.322-1.72 0-2.706.703-3.02 2.117H7.23c.233 0 .42.19.42.426a.423.423 0 01-.42.426H4.742a1.71 1.71 0 01-.007.093c-.004.04-.007.08-.007.125 0 .185.016.351.033.52V6.8H7.23c.233 0 .42.19.42.426a.423.423 0 01-.42.426H4.92c.38 1.21 1.355 1.806 2.949 1.806.672 0 1.246-.112 1.703-.33a.416.416 0 01.557.204.428.428 0 01-.201.566c-.57.272-1.264.412-2.062.412-2.064 0-3.364-.941-3.801-2.658h-.74a.422.422 0 01-.417-.426zm17.322 13.51c-1.047.316-2.854.316-3.9-.003-.232-.07-.77-.266-.77-.54V19.01c.16.081.337.154.536.216.596.182 1.375.283 2.19.283.818 0 1.594-.101 2.19-.283.191-.059.365-.135.524-.219v1.188c0 .275-.54.47-.77.54zm-5.512-.46c-.099.146-.354.334-.768.46-1.034.316-2.86.316-3.894-.003-.437-.132-.691-.314-.778-.448v-1.317c.16.081.333.154.535.216.596.182 1.375.283 2.19.283s1.594-.101 2.19-.283c.191-.059.365-.137.524-.219v1.311zm-7.051.46c-1.034.316-2.86.316-3.9 0-.456-.14-.694-.32-.775-.448v-1.306c.157.079.33.151.535.213.597.182 1.375.283 2.19.283.818 0 1.594-.1 2.191-.283.199-.062.373-.132.527-.21v1.291c-.098.149-.353.334-.768.46zm-4.625-2.765c.073-.1.255-.255.723-.398 1.042-.316 2.857-.316 3.896-.003.194.06.594.205.726.412-.064.095-.238.25-.72.398-1.036.317-2.854.317-3.896 0-.499-.151-.667-.311-.729-.409zm7.006-2.765c1.036-.316 2.863-.316 3.896-.003.194.06.594.205.726.41-.067.097-.241.252-.72.4-1.042.317-2.854.317-3.896 0-.482-.148-.659-.303-.723-.403.095-.146.347-.292.717-.404zm5.56-1.927c.073-.1.255-.255.723-.398 1.042-.316 2.857-.316 3.896 0 .194.06.594.205.726.41-.068.097-.241.254-.72.4-1.04.316-2.857.316-3.896 0-.5-.154-.667-.314-.729-.412zm-.047 3.364c.16.082.333.157.535.216.596.182 1.375.283 2.19.283s1.594-.101 2.19-.283c.191-.059.365-.134.524-.219v1.311c-.098.146-.355.334-.767.46-1.037.316-2.854.316-3.896 0-.435-.132-.69-.311-.776-.448v-1.32zm0-2.35c.156.079.33.151.535.213.594.182 1.372.283 2.187.283.815 0 1.594-.1 2.19-.283.2-.062.373-.132.527-.21v1.291c-.098.149-.353.334-.764.46-1.042.316-2.857.316-3.9 0-.456-.143-.694-.32-.775-.449v-1.305zm-6.283 2.322c.157.082.333.154.538.213.599.182 1.375.283 2.19.283s1.591-.1 2.19-.283c.2-.059.37-.129.524-.207v1.288c-.098.146-.355.334-.767.46-1.04.316-2.857.316-3.897 0-.456-.14-.694-.317-.778-.446v-1.308zm12.563-3.19c0-.429-.238-1.011-1.37-1.359-1.196-.364-3.188-.364-4.387.003-.745.23-1.193.585-1.327 1.059-.026.098-.04.199-.04.3v1.184a3.104 3.104 0 00-.529-.215c-1.19-.364-3.196-.364-4.384 0-.748.224-1.193.582-1.327 1.056v.003a1.13 1.13 0 00-.04.296v1.225a3.12 3.12 0 00-.532-.216c-1.193-.364-3.185-.364-4.38 0-.746.23-1.194.585-1.329 1.059v.002a1.187 1.187 0 00-.039.297v2.359c0 .148.076.272.188.347.232.308.63.56 1.185.729.594.182 1.372.282 2.19.282.818 0 1.597-.1 2.19-.282.385-.118.698-.292.94-.496a2.7 2.7 0 00.963.496c.594.182 1.372.282 2.19.282.818 0 1.594-.1 2.19-.282.384-.118.698-.292.939-.496.207.185.513.358.958.496.6.179 1.378.28 2.19.28.813 0 1.589-.101 2.191-.283 1.132-.345 1.37-.927 1.37-1.356v-6.77zm-5.345-7.28a.582.582 0 00.558-.591l-.003-2.488c0-.036.028-.067.064-.067h1.75c.037 0 .065.03.065.067l.003 2.476a.584.584 0 00.569.603l1.03.008-2.546 2.605-2.535-2.605 1.045-.008z"
            />
        </svg>
    );
};

export default IconMoneyDropLight;