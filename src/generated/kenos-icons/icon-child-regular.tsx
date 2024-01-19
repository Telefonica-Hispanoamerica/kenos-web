/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-kenos-icons"
 */

import * as React from 'react';

import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';
import type {IconProps} from '@utils/types';

const IconChildRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M21.841 15.131c0-1.58-1.129-2.151-2.098-2.16l-.003-.215.003-1.75c-.003-.04-.008-.075-.012-.108a1.664 1.664 0 01-.013-.148c-.137-2.134-.773-5.764-3.983-6.21a4.888 4.888 0 00-.213-.028l-.18-.011a8.178 8.178 0 00-1.013-.003h-1.387c.062-.143.1-.305.1-.498 0-.334-.094-.591-.276-.768-.177-.168-.432-.252-.757-.252s-.58.084-.756.252c-.182.174-.275.434-.275.768 0 .196.043.355.104.498H9.67a6.415 6.415 0 00-.53-.022c-3.89 0-4.722 2.725-4.89 5.843h-1.5a.589.589 0 00-.594.585.59.59 0 00.594.586h1.473l-.005 1.482c-.958.022-2.062.596-2.062 2.157 0 1.58 1.134 2.156 2.106 2.17h.166c.058 0 .142-.005.243-.017.552 2.04 1.77 3.737 4.47 3.737.186 0 .36-.008.491-.02h4.661l.093.005a5.97 5.97 0 00.916-.005h.215a.568.568 0 00.207-.039c2.118-.288 3.101-1.963 3.566-3.683l.004.002a2.149 2.149 0 00.273.023h.166c.975-.014 2.11-.59 2.11-2.17zm-16.4-4.81C5.637 6.847 6.62 5.65 9.14 5.65l.25.009c.369 0 .71.04 1.047.078-.2.146-.39.297-.566.465-1.042.998-1.641 2.384-1.804 4.12H5.441zM18.553 11.9v1.7a.42.42 0 00-.012.104c-.137 5.215-1.832 5.989-3.095 6.114a.846.846 0 00-.084.015h-.1c-.292.02-.57.02-.933-.003l-4.74.003a7.516 7.516 0 01-.448.016c-2.499 0-3.616-1.84-3.731-6.148a.412.412 0 00-.011-.1l.008-2.107h13.12l.007.148.008.154c0 .037.005.07.01.104zm2.1 3.235c0 .653-.316.989-.938.997l-.131-.003h-.02a.379.379 0 00-.034-.002 13.63 13.63 0 00.16-1.506c.003-.04.007-.08.008-.125l.04-.347c.607.011.916.339.916.986zm-6.79 2.129a.595.595 0 00-.837 0c-.339.336-.675.51-1 .515-.328 0-.678-.168-1.03-.518a.595.595 0 00-.838 0 .58.58 0 000 .83c.577.57 1.201.86 1.851.86h.037c.641-.01 1.252-.3 1.818-.858a.58.58 0 000-.83zM12.136 6.156c.55.225 1.042.507 1.437.886.81.773 1.286 1.876 1.437 3.277H9.26c.15-1.4.627-2.501 1.436-3.277.398-.379.891-.661 1.44-.886zm1.808-.433a7.31 7.31 0 01.904-.068h.03c.132 0 .264.003.42.014l.146.014c1.132.115 2.606.756 3 4.639H16.2c-.16-1.737-.762-3.123-1.804-4.12a5.34 5.34 0 00-.563-.466l.11-.013zM4.407 16.131h-.126c-.625-.008-.938-.344-.938-.997 0-.63.3-.955.874-.98l.042.355c0 .046.004.084.008.122a16.572 16.572 0 00.16 1.498h-.01a.055.055 0 01-.01.002zm5.796-1.028a.589.589 0 01-.594.586.59.59 0 01-.594-.586v-1.832c0-.325.266-.585.594-.585a.59.59 0 01.594.585v1.832zm4.728-1.832a.59.59 0 00-.594-.585.59.59 0 00-.594.585v1.832a.59.59 0 00.594.586c.328 0 .594-.26.594-.586v-1.832z"
            />
        </svg>
    );
};

export default IconChildRegular;