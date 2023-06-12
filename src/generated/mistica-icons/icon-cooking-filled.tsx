/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconCookingFilled = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M4.205 8.022a.58.58 0 00.714.409l13.972-4.017a.59.59 0 00.398-.729.577.577 0 00-.714-.406l-4.86 1.395v-.02c0-.041 0-.082-.011-.125-.266-.942-1.12-1.886-2.656-1.443-1.532.437-1.784 1.706-1.535 2.647l.027.106.01.034-4.944 1.42a.591.591 0 00-.4.729zm7.154-3.799c.642-.182 1.056.028 1.23.639.01.031.025.057.04.084l.021.036-1.988.572-.031-.115c-.162-.622.081-1.03.728-1.216zm10.482 11.552c0-1.619-1.123-2.205-2.087-2.213v.008h-.02v-.991c.113-.073.213-.151.292-.227.277-.274.61-.768.61-1.577 0-.807-.327-1.302-.607-1.574a1.876 1.876 0 00-.608-.4 2.403 2.403 0 00-.667-1.261c-.316-.311-.893-.684-1.832-.684-.938 0-1.515.373-1.832.687a2.37 2.37 0 00-.16.173 2.538 2.538 0 00-1.131.376 2.747 2.747 0 00-.753-.098c-.311 0-.583.042-.813.112-.3-.258-.79-.53-1.538-.53-.728 0-1.215.258-1.515.513h-.008a3.78 3.78 0 00-.174-.006c-.756 0-1.23.308-1.493.569l-.03.028a1.99 1.99 0 00-.855.344 1.917 1.917 0 00-1.163.398c-.594.042-.977.3-1.199.521-.254.25-.56.706-.56 1.443v.372a1.183 1.183 0 00.518.98v.827c-.958.02-2.061.608-2.061 2.21 0 1.616 1.129 2.207 2.095 2.221h.073c.123 0 .182 0 .4-.028.614 1.922 1.894 3.056 4.415 3.056.177 0 .341-.01.473-.018l.017-.001 4.667-.003.092.005c.138.007.28.014.432.014.183 0 .355-.01.486-.019h.222a.536.536 0 00.2-.04c1.965-.254 2.974-1.411 3.492-2.985.165.017.373.02.46.02h.067c.966-.015 2.095-.606 2.095-2.222zm-2.359-5.006c0 .317-.084.56-.252.723-.162.157-.392.233-.689.238h-6.829l-.018-.003-.018-.002h-1.527a.165.165 0 00-.04.005H4.853v-.344c0-.26.07-.462.208-.597.131-.129.324-.196.568-.196.087 0 .163.008.233.022.033.009.067.017.098.003.02-.009.024-.023.03-.04a.692.692 0 01.121-.182c.134-.128.325-.195.571-.195a.902.902 0 01.309.053c.022.008.042.014.064.006.02-.007.025-.018.034-.033a.499.499 0 01.11-.163c.158-.157.388-.239.685-.239.064 0 .123.003.18.012h.013c.01.002.019.003.028-.003.012-.006.014-.014.017-.028a.787.787 0 01.185-.311c.16-.157.392-.238.69-.238.257 0 .45.061.604.185.002 0 .004 0 .006.002a.023.023 0 00.02 0c.005-.002.008-.008.01-.014a.974.974 0 01.233-.394c.193-.19.47-.286.826-.286s.636.095.827.286c.187.179.274.448.291.778 0 0 .008.028.036.037.028.005.056-.02.056-.02a.955.955 0 01.219-.344c.213-.213.524-.32.924-.32.398 0 .709.107.925.32l.007.007c.011.012.016.017.035.015h.002c.015-.003.02-.004.026-.02l.001-.004.002-.004a1.08 1.08 0 01.19-.255c.24-.235.585-.356 1.028-.356.1 0 .196.006.286.02l.009.002c.013.002.025.005.038-.002.008-.006.01-.014.013-.023l.004-.01c.064-.188.157-.348.283-.477.238-.235.586-.356 1.028-.356.445 0 .79.12 1.03.353.25.247.376.608.376 1.079a2.317 2.317 0 01-.025.33c-.002.008-.003.011.006.02.008.011.014.014.03.011.062-.011.124-.014.194-.014.297 0 .532.081.694.24.168.166.252.41.252.726zm1.202 5.003c0 .684-.322 1.034-.955 1.042l-.126-.003c-.023 0-.059-.002-.093-.005.115-.656.177-1.353.205-2.073.006 0 .01.001.015.003.005.001.01.003.016.003.622.005.938.352.938 1.033zM4.387 16.814H4.27c-.633-.008-.956-.358-.956-1.042 0-.675.314-1.02.93-1.03a15.7 15.7 0 00.205 2.067.503.503 0 01-.062.005z"
            />
        </svg>
    );
};

export default IconCookingFilled;
