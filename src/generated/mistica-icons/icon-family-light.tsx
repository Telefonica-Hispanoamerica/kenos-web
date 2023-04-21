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

const IconFamilyLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.395 11.924c-.15 0-.288-.1-.338-.256-.498-1.598-2.322-2.631-4.644-2.631-1.422 0-2.716.36-3.557.995a.345.345 0 01-.498-.08.375.375 0 01.077-.517c.581-.441 1.317-.754 2.154-.944a3.544 3.544 0 01-1.587-2.973C12.002 3.58 13.525 2 15.394 2c1.87 0 3.392 1.579 3.392 3.518 0 1.257-.64 2.362-1.6 2.983 1.774.422 3.095 1.484 3.548 2.94a.368.368 0 01-.339.483zm-5-9.184c-1.477 0-2.68 1.247-2.68 2.778 0 1.532 1.203 2.779 2.68 2.779 1.476 0 2.678-1.247 2.678-2.779 0-1.531-1.202-2.778-2.679-2.778z"
                />
                <path
                    fill={fillColor}
                    d="M11.45 12.052a.38.38 0 01.077.517.353.353 0 01-.503.076c-.864-.66-2.103-1.02-3.488-1.02-2.793 0-4.823 1.475-4.823 3.5v6.49c0 .205-.16.37-.356.37a.364.364 0 01-.357-.37v-6.48c0-1.969 1.5-3.505 3.744-4.036a3.544 3.544 0 01-1.6-2.982c0-1.94 1.522-3.519 3.392-3.519 1.87 0 3.392 1.58 3.392 3.519 0 1.256-.64 2.361-1.6 2.982.814.19 1.536.512 2.121.953zM7.54 5.333c-1.476 0-2.678 1.247-2.678 2.779 0 1.531 1.197 2.778 2.679 2.778 1.476 0 2.678-1.247 2.678-2.778 0-1.532-1.202-2.779-2.678-2.779zm5.738 12.803a2.448 2.448 0 00.868-1.873c0-1.328-1.042-2.409-2.322-2.409s-2.322 1.081-2.322 2.409c0 .758.343 1.436.873 1.877-1.202.38-1.943 1.243-1.943 2.38v1.11c0 .204.16.37.357.37a.364.364 0 00.356-.37v-1.11c0-1.123 1.056-1.853 2.697-1.853 1.619 0 2.66.725 2.66 1.854v1.11c0 .203.16.369.357.369a.364.364 0 00.357-.37v-1.11c0-1.142-.74-2.01-1.938-2.384zm-1.454-3.542c.887 0 1.61.749 1.61 1.669s-.723 1.664-1.61 1.664c-.887 0-1.61-.75-1.61-1.67 0-.919.723-1.663 1.61-1.663zM22 21.26c0 .409-.32.74-.713.74a.727.727 0 01-.713-.74c0-.408.319-.74.713-.74.394 0 .713.332.713.74zm-.713-1.854a.364.364 0 00.356-.37c0-1.161-.868-2.133-2.139-2.55a2.44 2.44 0 00.891-1.892c0-1.328-1.042-2.41-2.322-2.41s-2.322 1.082-2.322 2.41c0 .782.361 1.474.919 1.915a4.1 4.1 0 00-.773.394l-.274.194a.386.386 0 00-.092.517.355.355 0 00.499.095l.256-.185a3.22 3.22 0 011.787-.517c1.6 0 2.857.896 2.857 2.039 0 .2.16.36.357.36zm-4.818-4.812c0-.92.722-1.67 1.609-1.67s1.609.75 1.609 1.67c0 .92-.722 1.669-1.61 1.669-.886 0-1.608-.75-1.608-1.67z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M9.496 3.86c.126.551.378 1.123.74 1.697.29.46.52.756.907 1.173l.01.01c.048.05.172.173.276.251a.85.85 0 00.319.148.501.501 0 00.1.014h.08a.546.546 0 00.1-.014.86.86 0 00.316-.148c.104-.073.222-.193.274-.245l.015-.016a.025.025 0 00.009-.008l.002-.003c.39-.409.622-.706.908-1.162a5.6 5.6 0 00.742-1.698c.14-.6.025-1.098-.322-1.403a1.266 1.266 0 00-.776-.297c-.028-.003-.053-.003-.078-.003-.292 0-.586.081-.863.238a8.6 8.6 0 00-.322.19.087.087 0 01-.037.01.082.082 0 01-.026-.006.141.141 0 00-.01-.003l-.086-.052c-.084-.05-.161-.097-.239-.139a1.75 1.75 0 00-.86-.238c-.028 0-.053 0-.078.003-.297.014-.575.12-.776.297-.35.305-.465.804-.325 1.403zm.798-.197c-.03-.131-.087-.448.059-.574.062-.053.168-.092.325-.098.148 0 .31.045.465.132.06.033.12.07.188.11l.128.077a.901.901 0 00.443.118l.26-.008.194-.118.05-.03c.09-.053.172-.102.255-.147a.93.93 0 01.465-.134h.036a.484.484 0 01.286.098c.143.126.09.443.059.574a4.84 4.84 0 01-.636 1.44 5.808 5.808 0 01-.807 1.036l-.03.031-.028.026a1.19 1.19 0 01-.11.098 1.655 1.655 0 01-.154-.146 5.904 5.904 0 01-.818-1.045c-.31-.496-.524-.983-.63-1.44zM5.611 7.93c.313-.31.804-.467 1.456-.47.658 0 1.151.157 1.465.468.325.322.49.834.49 1.529 0 .692-.162 1.205-.49 1.524-.314.31-.81.465-1.465.465s-1.145-.154-1.46-.462c-.321-.317-.487-.832-.487-1.524 0-.695.166-1.208.49-1.53zm-.572 3.659c.47.465 1.154.697 2.028.697.877 0 1.56-.235 2.034-.697.493-.482.742-1.196.742-2.126 0-.93-.252-1.647-.742-2.132-.474-.465-1.157-.703-2.034-.703-.874 0-1.554.238-2.028.703-.49.485-.74 1.202-.74 2.132 0 .93.25 1.644.74 2.126zM15.454 7.93c.313-.31.804-.467 1.456-.47.659 0 1.152.157 1.465.468.325.322.49.834.49 1.529 0 .692-.162 1.205-.49 1.524-.313.31-.81.465-1.465.465s-1.145-.154-1.459-.462c-.322-.317-.487-.832-.487-1.524 0-.695.165-1.208.49-1.53zm-1.311 1.53c0 .93.25 1.644.74 2.126.47.465 1.153.7 2.027.697.877 0 1.56-.232 2.034-.697.493-.482.742-1.196.742-2.126 0-.93-.252-1.647-.742-2.132-.473-.465-1.157-.703-2.034-.703-.874 0-1.554.238-2.028.703-.49.485-.74 1.202-.74 2.132zm-1.37 3.221c-.154.149-.409.224-.759.224-.353 0-.608-.075-.76-.224-.153-.151-.232-.417-.232-.787 0-.373.079-.639.233-.793.151-.148.406-.224.756-.224.353 0 .61.076.762.224.154.154.233.42.233.793 0 .37-.079.636-.233.787zm.569-2.182c-.311-.305-.757-.46-1.33-.46-.572 0-1.02.155-1.329.46-.319.317-.481.787-.481 1.395s.162 1.076.482 1.392c.31.303.756.457 1.327.457.574 0 1.02-.154 1.33-.457.326-.316.488-.784.488-1.392 0-.608-.162-1.079-.487-1.395zm7.675 10.443h-5.782v-4.113c0-.63-.179-1.17-.52-1.557a1.84 1.84 0 00-.835-.524c.366-.207.815-.327 1.344-.327h3.378c.796 0 1.437.249 1.846.714.373.423.569 1.034.569 1.759v4.048zm-6.605-4.11v4.11h-.006v.022H9.611v-4.132c0-.274.05-.66.29-.935.259-.294.66-.362.965-.367l.021-.002a.163.163 0 01.018-.001h2.213c.31 0 .733.064 1.002.37.241.274.292.66.292.935zm-5.617 0h.003v4.112H2.975v-4.047c0-.729.193-1.34.563-1.762.409-.465 1.045-.712 1.843-.712h3.378c.535 0 .992.12 1.361.334a1.822 1.822 0 00-.806.518c-.34.387-.518.927-.518 1.557zm13.042.062c0-.964-.277-1.787-.8-2.381-.566-.647-1.41-.989-2.44-.992h-3.379c-1.025 0-1.868.345-2.434.992a.62.62 0 00-.042.06c-.012.018-.023.036-.036.052h-1.431c-.013-.016-.024-.033-.035-.05a.972.972 0 00-.047-.065c-.566-.647-1.409-.989-2.437-.989H5.378c-1.025 0-1.868.345-2.434.992-.518.591-.793 1.417-.793 2.38v4.6c0 .19.14.345.314.345h19.056c.174 0 .316-.154.316-.345v-4.6z"
                />
            </svg>
        );
    }
};

export default IconFamilyLight;
