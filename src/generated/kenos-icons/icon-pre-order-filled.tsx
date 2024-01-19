/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconPreOrderFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.503 5.242c.104-.396-.138-.792-.484-.865a.665.665 0 00-.83.505l-2.112 8.309H8.023L5.665 3.472c-.104-.72-.938-1.3-1.837-1.3h-.657c-.38 0-.691.323-.691.72 0 .396.311.72.691.72h.657c.208 0 .415.109.484.18L7.574 17.2c-.868.396-1.456 1.265-1.456 2.31 0 .685.242 1.302.726 1.77.45.469 1.076.72 1.698.72 1.352 0 2.424-1.12 2.424-2.526 0-.396-.07-.756-.242-1.085h4.99a2.747 2.747 0 00-.242 1.085c0 1.41 1.076 2.527 2.424 2.527.657 0 1.249-.252 1.733-.757.45-.468.691-1.121.691-1.77 0-1.41-1.076-2.526-2.424-2.526H8.922v-.108L8.37 14.6h10.74l2.393-9.358z"
            />
            <path
                fill={fillColor}
                d="M11.074 5.427c0-.289-.242-.54-.52-.54h-.518c.519-.83 1.283-1.41 2.182-1.663 2.044-.576 4.122.685 4.68 2.82a3.947 3.947 0 01-.381 2.998c-.519.905-1.318 1.59-2.32 1.842-2.044.577-4.122-.684-4.68-2.819a6.947 6.947 0 01-.138-.905c0-.288-.242-.54-.518-.54-.277 0-.519.252-.519.54 0 .397.07.793.173 1.158.588 2.238 2.532 3.756 4.68 3.756a5.01 5.01 0 001.248-.18c1.248-.361 2.285-1.194 2.946-2.347a5.07 5.07 0 00.484-3.828c-.668-2.679-3.334-4.269-5.9-3.544-1.038.289-1.906.901-2.563 1.77v-.252c0-.288-.242-.54-.518-.54-.277 0-.52.252-.52.54v2.274h2.183c.277 0 .519-.252.519-.54z"
            />
            <path
                fill={fillColor}
                d="M13.221 3.765c-.277 0-.519.252-.519.54V7.27l1.422 1.553c.103.108.242.18.38.18a.434.434 0 00.346-.144.575.575 0 00.034-.756L13.74 6.836v-2.53c0-.289-.242-.541-.519-.541z"
            />
        </svg>
    );
};

export default IconPreOrderFilled;