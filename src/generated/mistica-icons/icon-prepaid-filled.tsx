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

const IconPrepaidFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M5.509 5.387H18.49C18.4 3.504 16.906 1.995 15.08 2H8.921C7.094 2 5.6 3.504 5.509 5.387zM15.079 22H8.921c-1.827 0-3.32-1.509-3.412-3.387H18.49C18.4 20.496 16.906 22 15.08 22zM18.5 6.457v11.081h-13V6.458h13zm-4.275 8.398H11.4c.057-.17.088-.348.088-.535v-1.61h1.541a.522.522 0 00.513-.534.522.522 0 00-.513-.535h-1.541v-1.426c0-.59.46-1.07 1.024-1.07.237 0 .46.082.644.238a.5.5 0 00.723-.078.553.553 0 00-.074-.754 2.013 2.013 0 00-1.293-.476c-1.13 0-2.054.96-2.054 2.144v1.427h-.17a.522.522 0 00-.513.535c0 .297.228.534.512.534h.171v1.61a.516.516 0 01-.512.534.522.522 0 00-.513.535c0 .297.228.535.513.535h4.28a.529.529 0 00.511-.54.522.522 0 00-.512-.534z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M8.53 8.22v1.453c1.25.188 1.518.916 1.516 1.502 0 .479-.177.885-.507 1.17-.255.222-.6.365-1.009.42v.328a.35.35 0 01-.7 0v-.319a2.88 2.88 0 01-1.32-.493.426.426 0 01-.196-.364.415.415 0 01.418-.41.514.514 0 01.266.085c.274.185.555.303.832.358v-1.537c-1.146-.21-1.395-.905-1.395-1.465 0-.852.538-1.435 1.395-1.552v-.311a.35.35 0 01.7 0v.31c.373.046.717.16.995.331.204.126.235.292.235.379a.403.403 0 01-.404.403.538.538 0 01-.235-.065l-.005-.002a2.213 2.213 0 00-.586-.222zm-1.269.691c0 .163 0 .474.569.642v-1.34c-.362.09-.569.337-.569.698zm1.27 3.04c.433-.093.688-.362.688-.746 0-.277-.09-.546-.689-.683v1.428z"
                />
                <path
                    fill={fillColor}
                    d="M17.463 2.155c1.11 0 1.919.269 2.473.826.552.555.818 1.362.818 2.462v13.11c0 1.114-.269 1.927-.826 2.479-.552.546-1.359.812-2.465.812h-6.555c-1.106 0-1.913-.266-2.465-.812-.554-.552-.826-1.364-.826-2.48V14.99c-1.289-.09-2.314-.493-3.05-1.202-.874-.843-1.317-2.09-1.317-3.709 0-1.619.443-2.865 1.317-3.708.736-.712 1.764-1.112 3.056-1.202.042-.947.31-1.658.817-2.17.563-.567 1.37-.844 2.468-.844h6.555zM8.18 13.892c1.255 0 2.21-.306 2.835-.908.647-.622.974-1.6.974-2.902s-.327-2.28-.974-2.902c-.625-.602-1.58-.907-2.835-.907s-2.21.305-2.835.907c-.647.622-.975 1.6-.975 2.902 0 1.303.328 2.28.975 2.902.625.602 1.58.908 2.835.908zm6.83 5.316c.19-.199.288-.47.293-.81 0-.697-.414-1.114-1.112-1.114-.697 0-1.112.417-1.112 1.115 0 .339.093.61.289.81.196.198.479.305.82.305.342 0 .625-.107.821-.306z"
                />
            </svg>
        );
    }
};

export default IconPrepaidFilled;
