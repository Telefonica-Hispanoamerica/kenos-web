/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconCarLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M17.276 9.652c.673.086 2.76.512 3.933 2.423 1.429 2.328-.014 3.497-.105 3.57l-.004.004a.412.412 0 01-.241.078h-2.787c-.163 1.252-1.048 2.014-2.406 2.014-1.359 0-2.247-.762-2.407-2.014H9.447c-.165 1.247-1.05 2.006-2.406 2.006s-2.24-.76-2.406-2.006h-1.91a.41.41 0 01-.401-.314c-.011-.042-.238-1-.154-2.45-.009-1.034.667-2.863 2.168-4.368 1.064-1.07 2.916-2.341 5.686-2.341 4.555 0 6.74 2.67 7.252 3.398zm.793 5.252h2.628c.207-.23.68-.975-.194-2.4-1.133-1.847-3.385-2.045-3.49-2.054h-.003a.417.417 0 01-.328-.199c-.078-.129-1.983-3.177-6.66-3.177a7.047 7.047 0 00-5.099 2.101c-1.277 1.278-1.938 2.883-1.93 3.807a9.378 9.378 0 00.073 1.922h1.569c.154-1.26 1.042-2.031 2.406-2.031s2.252.77 2.406 2.03h3.81c.157-1.254 1.045-2.022 2.406-2.022 1.364 0 2.25.768 2.406 2.023zm-4.02.406c0 1.05.558 1.608 1.614 1.608s1.613-.558 1.613-1.608-.557-1.608-1.613-1.608-1.614.557-1.614 1.608zm-7.008 1.6c1.056 0 1.613-.555 1.613-1.609 0-1.05-.557-1.607-1.613-1.607s-1.616.557-1.616 1.607c0 1.054.56 1.608 1.616 1.608z"
            />
        </svg>
    );
};

export default IconCarLight;
