/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconFilePsdRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M7.973 15.021l.129-.644c.325.115.75.185 1.022.185.499 0 .731-.129.731-.47 0-.283-.314-.367-.687-.466-.54-.143-1.2-.319-1.2-1.179 0-.75.59-1.081 1.377-1.081a3.4 3.4 0 011.034.151l-.129.628a3.612 3.612 0 00-.888-.13c-.454 0-.6.163-.6.396 0 .3.325.39.706.497.536.149 1.183.329 1.183 1.175 0 .33-.115.594-.308.779-.26.243-.611.353-1.143.353a3.625 3.625 0 01-1.227-.194zm-1.944-3.585H4.757v3.703H5.6v-1.277h.594c.488 0 .824-.115 1.04-.359.184-.207.277-.504.277-.9 0-.394-.098-.68-.297-.865-.238-.22-.605-.302-1.185-.302zm.482 1.65c-.11.1-.222.14-.493.14v.003H5.6v-1.18h.398c.258 0 .415.037.518.13.098.089.14.237.14.436 0 .216-.047.373-.145.47zm5.929-1.65h-1.142v3.703h1.255c.66 0 1.087-.137 1.364-.417.302-.314.448-.78.448-1.451 0-.667-.151-1.126-.448-1.418-.308-.308-.773-.417-1.476-.417zm.062 3.084h-.358v-2.468h.26c.412 0 .661.065.83.244.179.196.26.445.26.975 0 .453-.05.703-.196.918-.146.216-.418.33-.796.33z"
            />
            <path
                fill={fillColor}
                d="M21.794 7.912c.03.073.047.154.047.238v12.306c0 .75-.644 1.383-1.409 1.383H8.25c-.75 0-1.409-.647-1.409-1.383l.034-2.774h-2.3a2.427 2.427 0 01-2.42-2.425V11.16a2.427 2.427 0 012.42-2.425h2.266V3.534c0-.726.673-1.384 1.41-1.384h7.414a.86.86 0 01.613.25l5.297 5.126a.892.892 0 01.219.386zm-1.362 12.712c.098 0 .194-.096.194-.168V9.02h-2.314c-1.014 0-1.89-.33-2.535-.952-.65-.63-.995-1.487-.995-2.482V3.37H8.247c-.072 0-.187.109-.193.168v5.201h6.364c1.336 0 2.42 1.09 2.42 2.426v4.095a2.427 2.427 0 01-2.42 2.426h-6.33l-.034 2.779c0 .05.101.16.193.16h12.185zM3.368 15.258c0 .667.54 1.21 1.207 1.21h9.846a1.21 1.21 0 001.207-1.21v-4.095c0-.666-.54-1.21-1.207-1.21H4.575a1.21 1.21 0 00-1.207 1.21v4.095zM16 3.822v1.765c0 .658.216 1.213.622 1.608.414.4.997.61 1.692.61h1.8L16 3.822z"
            />
        </svg>
    );
};

export default IconFilePsdRegular;
