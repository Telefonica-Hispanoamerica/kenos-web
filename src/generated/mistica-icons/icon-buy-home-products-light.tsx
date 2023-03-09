/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconBuyHomeProductsLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M17.184 16.918H10.63c-.765 0-1.443-.255-1.956-.74-.546-.515-.899-1.263-1.053-2.226-.143-.9-1.479-8.933-1.638-9.827a1.61 1.61 0 00-.64-.997 2.103 2.103 0 00-1.268-.412H2.436a.28.28 0 01-.28-.28.28.28 0 01.28-.28h1.639c.588 0 1.16.185 1.608.524.456.342.759.82.854 1.347.057.32.265 1.553.514 3.045h3.338L13.96 3.32a.303.303 0 01.443 0l1.378 1.454v-.698c0-.168.137-.305.305-.305h1.639c.168 0 .305.137.305.305v3h3.524a.28.28 0 01.272.35l-.393 1.57-.364 1.458a618.18 618.18 0 01-.882 3.53c-.252.974-.616 1.689-1.106 2.182-.507.498-1.143.753-1.897.753zm1.314-9.283l1.087 1.146a.305.305 0 01-.222.515H18.03v3.519c0 .54-.31.851-.851.851H11.17c-.54 0-.851-.31-.851-.851V9.296H8.985a.306.306 0 01-.22-.515l1.092-1.149H7.145c.433 2.594.947 5.694 1.03 6.233.253 1.608 1.127 2.496 2.455 2.496h6.554c.608 0 1.098-.196 1.499-.597.414-.414.737-1.061.96-1.924.075-.285.256-1.01.474-1.887l.409-1.637.015-.062c.253-1.014.492-1.98.654-2.619h-2.697zm-7.785-.017L9.697 8.686h.927c.168 0 .305.137.305.305v3.824c0 .198.042.24.241.24h6.009c.199 0 .24-.042.24-.24V8.99c0-.168.138-.305.306-.305h.927l-1.148-1.213a.306.306 0 01-.084-.21V4.38h-1.03v1.157a.306.306 0 01-.526.21L14.18 3.974l-3.287 3.454a.282.282 0 01-.18.19zm-.083 14.216c-.872 0-1.373-.501-1.373-1.372 0-.872.501-1.373 1.373-1.373.87 0 1.372.501 1.372 1.373 0 .87-.498 1.372-1.372 1.372zm-.813-1.372c0 .563.25.812.813.812s.812-.25.812-.812c0-.564-.25-.813-.812-.813-.563 0-.813.25-.813.813zm6.275 1.372c-.871 0-1.373-.501-1.373-1.372 0-.872.502-1.373 1.373-1.373s1.372.501 1.372 1.373c0 .87-.498 1.372-1.372 1.372zm-.812-1.372c0 .563.249.812.812.812.563 0 .812-.25.812-.812 0-.564-.25-.813-.812-.813-.563 0-.812.25-.812.813z"
            />
        </svg>
    );
};

export default IconBuyHomeProductsLight;
