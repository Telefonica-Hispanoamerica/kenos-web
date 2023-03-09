/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCareRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.387 2.593a1.46 1.46 0 011.457 1.467v4.715c0 .812-.65 1.476-1.457 1.476h-1.24c-.471 0-.888-.232-1.152-.571-2.442-.042-3.255-.507-3.395-.597-.921-.58-1.963-.566-2.515-.55h-.255c-.748-.008-1.342-.587-1.428-1.344l-1.908.673a1.578 1.578 0 01-1.91-.711c-.446-.872-.23-1.612.543-2.107 1.185-.748 4.779-2.555 4.933-2.63.823-.373 1.997-.331 2.73.1l2.911 1.404a1.46 1.46 0 011.448-1.32h1.238v-.005zm-2.705 2.694l-3.47-1.683c-.256-.14-.536-.199-.88-.199-.303 0-.552.042-.748.132-.017.008-3.675 1.843-4.793 2.557-.272.174-.255.216-.149.406a.352.352 0 00.446.182l2.983-1.044c.034-.009.064-.009.098-.009.23-.148.501-.232.781-.232h3.751a.62.62 0 01.616.621c0 .34-.28.622-.616.622h-3.75c-.157 0-.337.182-.337.34 0 .148.073.307.238.307h.197c.641-.016 1.963-.042 3.224.745.008.012.594.328 2.409.393V5.287zm2.93 3.488V4.06a.223.223 0 00-.224-.224h-1.241a.227.227 0 00-.233.224v4.715c0 .123.101.232.233.232h1.24a.232.232 0 00.225-.232zm-5.093 7.367a1.572 1.572 0 011.908.714c.445.863.23 1.61-.552 2.106-1.177.748-4.77 2.555-4.925 2.63-.378.166-.798.25-1.274.25-.569 0-1.062-.115-1.457-.347L6.31 20.09a1.461 1.461 0 01-1.448 1.32H3.62a1.467 1.467 0 01-1.465-1.468v-4.714c0-.813.658-1.477 1.465-1.477h1.24c.471 0 .88.224 1.152.572 2.443.042 3.255.507 3.395.596.9.567 1.915.556 2.476.55h.04c.098-.009.19-.009.246-.009.748.017 1.342.588 1.44 1.345l1.91-.664zm-10.426-.913a.227.227 0 00-.232-.233H3.62c-.123 0-.232.1-.232.233v4.714a.23.23 0 00.232.224h1.24c.135 0 .233-.1.233-.224v-4.714zm11.278 2.28l-.003-.006c-.098-.182-.272-.24-.443-.182l-2.986 1.045c-.017.004-.033.004-.049.004s-.032 0-.049.004c-.238.14-.501.233-.79.233H8.31a.62.62 0 01-.616-.622c0-.34.28-.622.616-.622h3.742c.166 0 .345-.182.345-.347 0-.14-.073-.3-.238-.308l-.205.008h-.036c-.646.01-1.945.027-3.18-.748-.008-.008-.599-.325-2.408-.39v3.138l3.47 1.683c.247.14.535.2.88.2.305 0 .552-.043.748-.132l.217-.111c.803-.409 3.613-1.836 4.575-2.447.27-.172.247-.215.152-.4zM4.735 16.075a.472.472 0 00-.488-.49.476.476 0 00-.493.49c0 .285.21.495.493.495.286 0 .488-.21.488-.495zM20.278 7.92c0-.282-.199-.49-.479-.49-.277 0-.476.208-.479.49 0 .28.202.482.48.482.28 0 .478-.201.478-.482zm-9.585 2.807a.483.483 0 01.277-.098h.034c.134 0 .274.04.409.115l.423.232.333-.008.381-.224a.866.866 0 01.445-.115c.11.006.21.042.275.098.143.123.106.387.073.532-.087.37-.264.762-.518 1.163-.21.328-.367.53-.664.837l-.037.038-.109.114-.034-.008a.536.536 0 01-.03-.006 1.04 1.04 0 01-.14-.126l-.012-.012a4.713 4.713 0 01-.664-.837 3.843 3.843 0 01-.518-1.163c-.033-.145-.07-.406.076-.532zm-.527 2.325c.252.395.462.661.81 1.023.042.042.185.184.302.268.143.104.306.18.465.213.056.012.115.02.238.026h.003l.23-.026c.162-.036.328-.109.468-.213.12-.09.266-.232.313-.283a5.97 5.97 0 00.796-1.008c.328-.51.552-1.022.67-1.52.162-.687 0-1.3-.446-1.684a1.598 1.598 0 00-.964-.376 1.987 1.987 0 00-1.061.258l-.006.003a.014.014 0 00-.005.003l-.009-.006a2 2 0 00-1.062-.258c-.366.02-.708.152-.966.376-.442.383-.605.997-.442 1.683.114.496.341 1.008.666 1.521z"
            />
        </svg>
    );
};

export default IconCareRegular;
