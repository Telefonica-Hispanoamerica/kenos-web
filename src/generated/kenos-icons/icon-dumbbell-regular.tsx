/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconDumbbellRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M19.474 6.887h1.095c.706 0 1.28.6 1.28 1.336v7.55c0 .736-.574 1.335-1.28 1.335h-1.095v.112c0 .737-.574 1.337-1.28 1.337h-1.098c-.709 0-1.28-.597-1.28-1.337v-2.812H8.202v2.812c0 .737-.574 1.337-1.28 1.337H5.824c-.706 0-1.28-.597-1.28-1.337v-.114a.01.01 0 00-.004 0l-.007.002H3.435c-.709 0-1.28-.596-1.28-1.336V8.223c0-.736.574-1.336 1.28-1.336h1.098l.003.001.008.002v-.115c0-.737.574-1.336 1.28-1.336h1.098c.706 0 1.28.597 1.28 1.336V9.59h7.614V6.775c0-.737.574-1.336 1.28-1.336h1.098c.706 0 1.28.597 1.28 1.336v.112zm1.098 8.885V8.223h-1.095v7.55h1.095zm-3.473-2.68v4.134h1.098V15.8l-.002-.012-.001-.013V8.226l.001-.014.002-.011V6.775h-1.098v4.142c.002.002.002.005.002.01v2.145l-.001.01a.037.037 0 00-.002.01zm-1.278-.02v-2.146H8.208v2.146h7.613zM5.83 17.22h1.098v-4l-.004-.032a.91.91 0 01-.01-.116v-2.146c0-.037.004-.072.009-.109l.005-.04V6.776H5.83V17.22zm-1.29-1.448V8.223H3.443v7.55h1.098z"
            />
        </svg>
    );
};

export default IconDumbbellRegular;