/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconHandLeftRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M9.732 17.388c-.078.233-.118.49-.118.774 0 1.255.79 2.036 2.062 2.039h6.997c.972 0 1.745-.272 2.303-.81.557-.54.865-1.378.865-2.361V9.243c0-.782-.742-1.126-1.059-1.272a179.45 179.45 0 01-2.396-1.17l-.08-.04a415.654 415.654 0 00-5.647-2.748c-.854-.4-1.742-.24-2.263.41a1.79 1.79 0 00-.398 1.13c0 .42.146.85.432 1.208.29.367.694.672 1.271 1.011a5541.468 5541.468 0 00-7.384 0h-.044c-1.348.087-2.118.863-2.118 2.129 0 1.317.83 2.135 2.162 2.135H7.22c-.058.207-.09.437-.09.683 0 1.003.502 1.703 1.354 1.944-.079.23-.118.493-.118.776 0 1.008.51 1.711 1.367 1.95zm10.381 1.13c-.32.31-.793.462-1.44.462v.008h-7.005c-.589 0-.83-.238-.83-.818 0-.149.02-.28.057-.39a1.21 1.21 0 00-.085-.957 1.222 1.222 0 00-.753-.603c-.154-.042-.468-.131-.468-.773 0-.151.02-.283.056-.395a1.209 1.209 0 00-.081-.955 1.228 1.228 0 00-.748-.602c-.137-.04-.462-.132-.462-.77 0-.135.017-.252.045-.356a1.218 1.218 0 00-.202-1.067 1.24 1.24 0 00-.983-.485H4.312c-.653 0-.93-.274-.93-.916 0-.527.16-.86.964-.91h7.35a1.231 1.231 0 001.232-1.219c0-.432-.23-.832-.602-1.05-.482-.283-.762-.499-.936-.717a.728.728 0 01-.165-.451.59.59 0 01.129-.373c.224-.28.613-.137.77-.064 1.426.666 3.726 1.798 5.574 2.708l.056.028c1.272.625 2.197 1.079 2.505 1.222.07.03.271.123.347.199v7.753c0 .644-.18 1.185-.493 1.49z"
            />
        </svg>
    );
};

export default IconHandLeftRegular;
