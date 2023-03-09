/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '../../theme-variant-context';
import {vars} from '../../skins/skin-contract.css';

import type {IconProps} from '../../utils/types';

const IconToothRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M15.476 21.85h.115c.149 0 .27-.04.373-.085.274-.11.518-.297.717-.552.165-.204.33-.482.428-.65l.06-.1c.601-1.09.952-1.858 1.389-3.04.28-.74.512-1.487.714-2.282a16.682 16.682 0 00.154-.617l.025-.098c1.023-1.787 1.75-3.554 2.16-5.26.582-2.44.078-4.485-1.418-5.757-.86-.739-2.025-1.179-3.28-1.243-1.297-.07-2.644.255-3.88.94-.324.183-.657.37-1.03.59a58.856 58.856 0 00-1.03-.592c-1.236-.686-2.58-1.008-3.875-.938-1.258.064-2.423.504-3.28 1.24-1.498 1.272-2.003 3.32-1.42 5.76.409 1.706 1.134 3.476 2.16 5.26l.028.115.048.194c.037.149.07.285.1.397.205.81.44 1.557.714 2.289.44 1.187.79 1.955 1.406 3.07l.045.075c.098.168.264.448.423.645.205.263.448.45.754.57.073.026.19.065.347.065h.112c.149 0 .266-.039.37-.075.274-.11.518-.297.717-.552.204-.25.429-.639.49-.754l.073-.134.008-.04c.073-.162.168-.408.314-.795l.014-.035c.274-.722 1.013-2.665 1.48-3.178.473.521 1.232 2.519 1.495 3.213.148.392.244.642.316.804l.076.165c.062.115.286.505.485.748.207.264.45.451.756.572.073.025.19.064.347.064zm-.148-1.39a4.677 4.677 0 01-.305-.46l-.073-.137a9.027 9.027 0 01-.26-.647 58.41 58.41 0 00-.054-.143c-1.048-2.759-1.709-4.072-2.633-4.072-.922 0-1.583 1.313-2.63 4.072l-.055.143c-.11.289-.218.575-.259.647L8.983 20v.009a4.88 4.88 0 01-.308.462c-.033.043-.068.08-.096.108-.03.032-.05.054-.05.063l-.033.011a.576.576 0 01-.221-.19 4.892 4.892 0 01-.328-.505l-.042-.07a18.8 18.8 0 01-1.317-2.882c-.26-.692-.481-1.4-.677-2.17a30.988 30.988 0 01-.143-.572l-.048-.2-.064-.159c-.99-1.711-1.687-3.397-2.076-5.011-.47-1.978-.106-3.594 1.03-4.56.656-.563 1.561-.902 2.553-.953 1.072-.064 2.184.213 3.218.788a63.362 63.362 0 011.213.697c.07.041.21.123.415.123a.77.77 0 00.411-.126c.432-.257.824-.479 1.208-.694 1.033-.575 2.145-.846 3.22-.788.99.05 1.894.39 2.553.956 1.134.963 1.498 2.582 1.028 4.557-.39 1.616-1.087 3.303-2.076 5.011l-.11.342-.016.07c-.047.194-.09.371-.132.524a20.171 20.171 0 01-.677 2.168 18.788 18.788 0 01-1.3 2.854l-.056.093-.01.015a4.449 4.449 0 01-.324.497 1.27 1.27 0 01-.095.108c-.03.032-.052.054-.05.063l-.034.011a.576.576 0 01-.221-.19z"
            />
        </svg>
    );
};

export default IconToothRegular;
