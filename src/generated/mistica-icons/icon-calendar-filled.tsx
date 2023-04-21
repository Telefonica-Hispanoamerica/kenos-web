/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useTheme} from '@hooks/hooks';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconCalendarFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M7.356 6.284c0 .396.324.716.716.716a.72.72 0 00.716-.712V2.716A.718.718 0 008.072 2a.718.718 0 00-.716.716v3.568zm7.856 0a.717.717 0 001.432.004V2.716a.715.715 0 10-1.432 0v3.568zM2 22h20V10.572H2V22zm7.64-1.964H9c-.428 0-1.18-.18-1.608-.464-.252-.18-.284-.5-.108-.752.18-.252.5-.284.752-.108.144.108.644.252.964.252h.644c.608 0 1.108-.464 1.108-1.072 0-.608-.5-1.072-1.108-1.072H8.68a.552.552 0 01-.536-.536c0-.284.252-.536.536-.536h.964c.608 0 1.108-.464 1.108-1.072 0-.608-.5-1.072-1.108-1.072H9c-.32 0-.82.144-.964.252-.252.18-.572.144-.752-.108-.18-.252-.144-.572.108-.752.392-.284 1.18-.464 1.608-.464h.644c1.216 0 2.18.964 2.18 2.144 0 .644-.284 1.216-.752 1.608a2.1 2.1 0 01.748 1.608c0 1.18-.964 2.144-2.18 2.144zm6.112-.536a.552.552 0 01-.536.536.552.552 0 01-.536-.536V14l-.856.464a.502.502 0 01-.716-.216.502.502 0 01.216-.716l1.644-.928a.484.484 0 01.536 0c.18.108.252.284.252.464-.008.004-.008 6.432-.004 6.432z"
                />
                <path
                    fill={fillColor}
                    d="M17.712 4.144h2.144c1.18 0 2.144.964 2.144 2.14V9.5H2V6.284c0-1.176.964-2.14 2.144-2.14h2.144v2.144c0 1 .784 1.784 1.784 1.784s1.784-.784 1.784-1.784V4.144h4.288v2.144c0 1 .784 1.784 1.784 1.784s1.784-.784 1.784-1.784V4.144z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M19.227 3.79H4.767a2.599 2.599 0 00-2.594 2.594v11.23a2.599 2.599 0 002.594 2.594h14.378a2.68 2.68 0 002.675-2.675V6.384a2.599 2.599 0 00-2.593-2.593zM16.38 5.259c.484 0 .812.328.812.816a.81.81 0 01-.219.585.8.8 0 01-.593.23.806.806 0 01-.594-.23c-.104-.104-.219-.286-.219-.585 0-.488.328-.816.813-.816zm-7.942.816a.81.81 0 01-.218.585.801.801 0 01-.594.23.801.801 0 01-.594-.23.81.81 0 01-.218-.585c0-.488.328-.816.812-.816.485 0 .812.328.812.816zm5.435 10.851h-3.788a.929.929 0 01-.033-.277c0-.364.095-.608.347-.91l1.154-1.407c.661-.798.939-1.19.939-1.683 0-.252-.079-.443-.236-.575-.182-.156-.476-.226-.902-.226a6.982 6.982 0 00-1.162.112v-.92a6.208 6.208 0 011.38-.164c.852 0 1.415.19 1.78.554.277.278.425.661.425 1.154 0 .74-.33 1.303-1.269 2.328l-1.033 1.129h2.398v.885zM3.487 8.715c-.277 0-.504-.182-.504-.406 0-.224.227-.406.504-.406h17.017c.277 0 .504.182.504.406 0 .224-.224.406-.501.406H3.487z"
                />
            </svg>
        );
    }
};

export default IconCalendarFilled;
