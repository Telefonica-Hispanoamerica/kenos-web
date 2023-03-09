/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconFileJpegFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M11.984 13.267c0-1.014.535-1.703 1.641-1.703.322 0 .706.067.916.157l-.095.54a2.887 2.887 0 00-.767-.117c-.656 0-.925.39-.925 1.095 0 .364.048.664.19.863.118.165.314.26.628.26.118 0 .28-.014.395-.033v-.684h-.457v-.532h1.191v1.655a4.52 4.52 0 01-1.157.166c-1.165.003-1.56-.639-1.56-1.667zm-7.79 1.062l.053.566c.233.03.34.042.499.042.367 0 .602-.068.75-.21.166-.166.233-.384.233-.788v-2.313h-.74v2.296c0 .362-.098.446-.411.446-.07 0-.236-.011-.384-.04zm3.339-2.703H6.42v3.246h.74v-1.12h.52c.426 0 .72-.101.91-.314.16-.18.242-.44.242-.787 0-.348-.084-.597-.26-.76-.211-.195-.533-.265-1.04-.265zm-.011 1.568h-.367v-1.033h.347c.23 0 .367.033.457.114.084.082.123.208.123.384 0 .188-.045.328-.129.412-.095.09-.193.123-.431.123zm4.022-1.568h-2.19v3.24h2.215v-.534h-1.476v-.83h1.115v-.554h-1.115v-.787h1.395l.056-.535z"
            />
            <path
                fill={fillColor}
                d="M21.793 7.914a.61.61 0 01.048.238v12.306c0 .75-.644 1.383-1.409 1.383H8.252c-.75 0-1.408-.647-1.408-1.384l.033-2.773h-2.3a2.427 2.427 0 01-2.422-2.423V11.17a2.43 2.43 0 012.42-2.426h2.266V3.54c0-.726.672-1.384 1.409-1.384h7.415c.23 0 .445.087.61.244l5.3 5.131c.11.104.174.241.218.384zm-5.792-4.09V5.59c0 .658.215 1.213.624 1.608.415.4.997.61 1.69.61h1.803l-4.117-3.983zM4.575 16.471h9.846a1.21 1.21 0 001.207-1.21v-4.095c0-.667-.54-1.21-1.204-1.21H4.575c-.667 0-1.207.54-1.207 1.21v4.095c0 .667.54 1.21 1.207 1.21z"
            />
        </svg>
    );
};

export default IconFileJpegFilled;
