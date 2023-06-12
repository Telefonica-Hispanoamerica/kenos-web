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

const IconTargetLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);
    const {skinName} = useTheme();
    if (skinName.match(/^o2/i)) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.42 5.231a.39.39 0 00.081-.412.35.35 0 00-.325-.227H19.06V2.369a.373.373 0 00-.217-.341.343.343 0 00-.384.08l-2.47 2.593a.363.363 0 00-.103.26v2.441l-1.02 1.071c-1.364-1.308-3.12-2.028-4.976-2.028-4.086 0-7.409 3.488-7.409 7.777C2.48 18.512 5.803 22 9.889 22a7.13 7.13 0 003.905-1.166.38.38 0 00.113-.512.343.343 0 00-.487-.118 6.435 6.435 0 01-3.531 1.057c-3.693 0-6.7-3.157-6.7-7.034s3.007-7.033 6.7-7.033c1.67 0 3.246.644 4.479 1.81l-1.874 1.967a3.904 3.904 0 00-2.605-1c-2.235 0-4.054 1.91-4.054 4.256s1.82 4.256 4.054 4.256c2.235 0 4.055-1.91 4.055-4.256a4.368 4.368 0 00-.953-2.735l3.39-3.559h2.326c.095 0 .18-.038.248-.109l2.465-2.593zm-5.54 13.807c0 .407-.316.74-.704.74-.388 0-.704-.333-.704-.74 0-.408.316-.74.704-.74.388 0 .704.332.704.74zm-5.743-4.55l2.353-2.47c.465.602.745 1.37.75 2.214 0 1.938-1.504 3.517-3.351 3.517s-3.35-1.579-3.35-3.517c0-1.939 1.503-3.517 3.35-3.517a3.25 3.25 0 012.104.782l-2.352 2.47a.376.376 0 000 .52.344.344 0 00.248.11c.09 0 .18-.038.248-.11zM20.323 5.34l-1.765 1.853h-1.969V5.127l1.766-1.853v2.067h1.968zm-4.52 5.583a.382.382 0 01.145-.503.344.344 0 01.479.157 8.084 8.084 0 01.867 3.654c0 1.08-.208 2.128-.619 3.109a.352.352 0 01-.325.223.303.303 0 01-.14-.033.38.38 0 01-.18-.489 7.383 7.383 0 00.555-2.815 7.298 7.298 0 00-.781-3.303z"
                />
            </svg>
        );
    } else {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
                <path
                    fill={fillColor}
                    d="M21.845 12a.41.41 0 00-.41-.41H19.67c-.202-6.638-5.78-7.347-7.27-7.415v-1.62a.408.408 0 00-.408-.41.408.408 0 00-.41.41v1.61h-.05c-1.218.008-7.18.434-7.36 7.428H2.546a.408.408 0 000 .816h1.64c.29 6.809 6.185 7.266 7.39 7.28h.003v1.756a.41.41 0 10.82 0v-1.761c1.438-.054 7.002-.699 7.262-7.275h1.776a.41.41 0 00.409-.41zm-3 .409c-.242 5.693-4.799 6.394-6.445 6.456v-.69a.408.408 0 00-.41-.41.408.408 0 00-.409.41v.698c-1.517-.022-6.313-.583-6.582-6.464h.813a.41.41 0 000-.819h-.821c.168-6.066 5.034-6.599 6.545-6.613h.045v.847c0 .228.182.41.41.41a.408.408 0 00.409-.41v-.83c1.69.076 6.262.836 6.45 6.596h-.684a.41.41 0 000 .819h.678zM10.9 8.719c.21-.202.555-.309 1.02-.309.466 0 .81.107 1.024.311.219.21.328.561.328 1.043 0 .48-.11.83-.328 1.04-.213.206-.558.31-1.026.31-.463 0-.808-.102-1.018-.306-.22-.21-.329-.561-.329-1.043 0-.483.11-.833.329-1.047zm-.57 2.678c.37.356.903.535 1.588.535.687 0 1.222-.18 1.592-.535.385-.373.58-.923.58-1.633 0-.709-.195-1.259-.58-1.632-.373-.359-.905-.538-1.592-.538-.685 0-1.217.182-1.588.538-.384.373-.577.923-.577 1.635 0 .713.193 1.26.577 1.63zm4.627 4.043H8.89v-.15c0-.329.07-.797.395-1.137.36-.375.914-.454 1.316-.454h2.641c.401 0 .957.079 1.321.454.325.34.396.805.396 1.136v.152zm.194-1.853c-.446-.463-1.105-.707-1.91-.707l-2.644-.003c-.802 0-1.461.244-1.904.707-.407.426-.623 1.015-.623 1.702v.724c0 .137.11.247.247.247h7.213c.137 0 .246-.11.246-.247v-.72c0-.688-.216-1.277-.625-1.703z"
                />
            </svg>
        );
    }
};

export default IconTargetLight;
