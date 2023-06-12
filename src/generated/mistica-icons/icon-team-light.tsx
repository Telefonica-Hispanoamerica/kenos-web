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

const IconTeamLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M20.91 15.528c0 .205.164.371.364.371.2 0 .363-.166.363-.37v-2.873c0-1.155-.754-2.059-1.95-2.463a2.624 2.624 0 001.042-2.092c0-1.436-1.14-2.601-2.546-2.601-1.405 0-2.546 1.165-2.546 2.6a2.6 2.6 0 001.029 2.084c-.554.176-1.029.451-1.373.813a.374.374 0 00.01.523.356.356 0 00.511-.01c.48-.508 1.364-.813 2.365-.813 1.606 0 2.727.804 2.727 1.954v2.877h.005zm-4.542-7.427c0-1.022.815-1.86 1.82-1.86 1 0 1.82.833 1.82 1.86 0 1.027-.815 1.86-1.82 1.86-1.005-.006-1.82-.838-1.82-1.86zM6.97 10.188c.56.176 1.03.452 1.374.813a.37.37 0 01-.014.524.356.356 0 01-.512-.01c-.484-.509-1.364-.813-2.364-.813-1.606 0-2.728.803-2.728 1.954v5.473a.367.367 0 01-.363.371.367.367 0 01-.363-.37v-5.47c0-1.155.754-2.058 1.95-2.462a2.598 2.598 0 01-1.042-2.092c0-1.436 1.14-2.601 2.546-2.601C6.859 5.505 8 6.67 8 8.105a2.61 2.61 0 01-1.03 2.083zM5.459 6.242c-1.005 0-1.82.837-1.82 1.859s.815 1.854 1.82 1.86c1.006 0 1.82-.833 1.82-1.86 0-1.027-.82-1.86-1.82-1.86zm7.889 5.42a2.622 2.622 0 001.019-2.073c0-1.436-1.14-2.6-2.546-2.6s-2.546 1.164-2.546 2.6c0 .847.4 1.598 1.02 2.073-1.28.39-2.11 1.275-2.11 2.383v4.084c0 .205.164.371.364.371.2 0 .363-.166.363-.37v-4.085c0-1.075 1.224-1.86 2.909-1.86 1.685 0 2.909.78 2.909 1.86v4.084c0 .205.163.371.363.371.2 0 .363-.166.363-.37v-4.085c0-1.113-.829-1.993-2.108-2.383zM10 9.584c0-1.022.815-1.859 1.82-1.859 1 0 1.82.832 1.82 1.86 0 1.027-.815 1.859-1.82 1.859-1 0-1.82-.832-1.82-1.86zM21.274 18.5a.734.734 0 00.726-.742.734.734 0 00-.726-.741.734.734 0 00-.726.741c0 .41.325.742.726.742z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M11.53 5.976c-.003.221.181.4.408.404a.41.41 0 00.415-.398l.014-2.602a.405.405 0 00-.409-.404h-.003a.406.406 0 00-.412.398l-.014 2.602zm-3.286-.078l1.16 1.143a.422.422 0 00.582.002.397.397 0 00.003-.568l-1.16-1.143a.42.42 0 00-.583-.003.395.395 0 00-.002.569zm5.95 1.26a.41.41 0 01-.29-.117.395.395 0 01-.002-.569l1.16-1.14c.16-.16.42-.16.582-.003a.395.395 0 01.003.569l-1.16 1.143a.422.422 0 01-.294.117zm-9.432 2.933c0 .507.12.877.358 1.1.233.22.608.329 1.115.329s.885-.11 1.12-.33c.242-.222.362-.592.362-1.099s-.123-.88-.361-1.104c-.236-.218-.61-.333-1.118-.333-.507.003-.882.115-1.115.333-.24.227-.361.597-.361 1.104zm1.476 2.232c-.728 0-1.294-.184-1.686-.551-.406-.381-.614-.944-.614-1.678s.208-1.3.614-1.684c.392-.367.958-.554 1.686-.554.726 0 1.294.187 1.69.554.408.384.615.95.615 1.684s-.207 1.297-.616 1.68c-.395.365-.963.55-1.689.55zm14.776 3.463l-.045 4.431h-1.652v-3.16c0-.22-.185-.4-.412-.4a.407.407 0 00-.412.4v3.163H14.44l.03-2.415h.009v-.722l.006-.485-.002-.108a4.76 4.76 0 01-.001-.1v-.117a.04.04 0 00-.003-.014.03.03 0 01-.003-.011V14.64c0-.221-.185-.4-.412-.4a.407.407 0 00-.411.4v.431l-1.247-1.593v-2.914l2.348 3.076s.156.227.31.328c.115.075.37.137.533.137h3.56c.434 0 1.036.084 1.428.482.28.286.429.7.429 1.199zm-9.434-2.437h.005v.131l-1.246 1.594v-.431c0-.221-.185-.4-.412-.4a.407.407 0 00-.412.4v1.608l-.001.012a.077.077 0 00-.001.013v.118l-.002.1-.001.104.005.482v.725h.009l.028 2.415h-4.05v-3.16c0-.221-.185-.4-.412-.4a.407.407 0 00-.412.4v3.16H3.022l-.044-4.434c0-.499.148-.913.428-1.2.392-.397.995-.481 1.429-.481h3.554c.16 0 .418-.062.533-.137.154-.101.31-.328.31-.328l2.348-3.076v2.785zm10.257 2.437c0-.712-.23-1.317-.66-1.754-.468-.476-1.169-.728-2.023-.728H16.35c-.272 0-.54-.02-.773-.135-.14-.07-.429-.358-.429-.358l-2.815-3.69V9.12l-.002-.006h-.004l-.002-.002-.003-.006a.42.42 0 00-.081-.076.455.455 0 00-.112-.058l-.011-.003A.412.412 0 0012 8.95c-.045 0-.087 0-.115.008a.083.083 0 00-.012.005l-.013.004a.473.473 0 00-.199.143l-.003.005-2.818 3.692s-.285.289-.428.359c-.233.114-.499.134-.773.134H4.832c-.852 0-1.552.252-2.022.728-.432.437-.659 1.042-.659 1.754l.048 4.98c0 .14.12.255.263.255h7.658c.143 0 .26-.115.26-.255l-.044-3.683v-.69l1.658-2.12 1.661 2.124v.691l-.044 3.681c0 .14.117.255.26.255h7.656c.145 0 .26-.115.26-.255l.05-4.98zm-5.204-6.793c.235-.221.61-.333 1.115-.333.507 0 .882.112 1.115.33.24.224.361.597.361 1.104 0 .507-.12.877-.358 1.1-.233.22-.605.328-1.115.328s-.886-.109-1.12-.327c-.239-.222-.362-.594-.362-1.098 0-.507.123-.877.364-1.104zm-1.188 1.1c0 .735.21 1.3.62 1.681.392.368.96.552 1.686.55.728 0 1.294-.185 1.686-.552.406-.381.613-.947.613-1.681 0-.734-.207-1.3-.613-1.68-.392-.37-.96-.555-1.686-.555s-1.294.187-1.687.554c-.411.384-.619.95-.619 1.684z"
                />
            </svg>
        );
    }
};

export default IconTeamLight;
