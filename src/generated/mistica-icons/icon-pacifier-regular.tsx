/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconPacifierRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M18.663 10.205a.518.518 0 00.013.017c.465.566.712 1.311.709 2.241 0 .93-.25 1.675-.715 2.241l-.042.05a4.382 4.382 0 01-.336.309 4.94 4.94 0 01-.904.582l-.017 1.107c-.02 2.462-1.443 5.09-5.37 5.09s-5.35-2.628-5.37-5.09l-.016-1.107a4.664 4.664 0 01-1.241-.89l-.042-.051c-.463-.566-.712-1.31-.712-2.24 0-.93.25-1.676.712-2.242a.214.214 0 00.02-.025 1.078 1.078 0 01.135-.14c.017-.015.034-.03.052-.048.05-.05.106-.106.17-.148.737-.6 1.67-.978 2.751-1.12-.406-.65-.613-1.466-.613-2.44 0-1.33.381-2.373 1.132-3.096.72-.697 1.736-1.05 3.022-1.05 1.286 0 2.303.353 3.025 1.05.751.723 1.132 1.765 1.132 3.096 0 .974-.21 1.79-.614 2.44 1.082.142 2.017.52 2.751 1.12.065.045.12.098.171.148l.045.04c.043.039.08.072.123.123.011.011.02.022.029.033zM9.85 4.093c-.502.482-.754 1.224-.754 2.208 0 .798.177 1.428.507 1.896l.013.018c.071.1.144.203.234.287 0 0 .042.031.095.079.17.087.305.238.339.44a.6.6 0 01-.076.389c-.014.042-.025.076-.039.098a1.448 1.448 0 00-.146.398 3.013 3.013 0 00-.098.764c0 .71.18 1.241.533 1.578.339.327.86.493 1.546.493s1.207-.166 1.549-.493c.35-.337.53-.866.53-1.578 0-.285-.037-.535-.096-.764a1.366 1.366 0 00-.146-.398.526.526 0 01-.036-.098.617.617 0 01-.076-.39.608.608 0 01.34-.44c.052-.047.095-.078.095-.078.092-.09.17-.199.246-.305.33-.468.507-1.098.507-1.896 0-.984-.255-1.726-.753-2.208-.482-.462-1.208-.7-2.157-.7-.947 0-1.675.235-2.157.7zm7.905 9.785c.255-.34.389-.807.395-1.415 0-.605-.138-1.075-.393-1.417-.602-.605-1.453-.964-2.479-1.084.034.227.054.462.054.711 0 1.06-.306 1.888-.91 2.468-.58.555-1.39.838-2.413.838-1.02 0-1.832-.283-2.411-.838-.605-.58-.913-1.409-.913-2.468 0-.252.022-.484.056-.711-1.026.117-1.88.479-2.48 1.084-.254.344-.392.812-.392 1.417 0 .608.135 1.076.39 1.415.26.263.577.465.924.638.174.087.347.171.54.236.44.143.936.221 1.471.243.043.002.083.006.123.01.048.005.096.01.146.01h5.087c.059 0 .112-.005.167-.01.033-.004.067-.008.102-.01a5.42 5.42 0 001.47-.243c.194-.065.367-.149.541-.236a3.5 3.5 0 00.925-.638zm-3.673 2.375H9.931l.003.255c.005.726.286 1.936 2.073 1.936s2.067-1.21 2.072-1.936l.003-.255zm-2.075 4.356c3.691 0 4.115-2.703 4.126-3.869l.005-.663a6.88 6.88 0 01-.812.131l-.006.311c-.01 1.46-.888 3.157-3.316 3.157-2.426-.003-3.303-1.7-3.317-3.157l-.005-.31a6.755 6.755 0 01-.813-.132l.012.663c.01 1.166.431 3.869 4.126 3.869z"
            />
        </svg>
    );
};

export default IconPacifierRegular;
