/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconMobilePauseLight = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M20.94 3.065c.607.617.901 1.48.901 2.653v12.56c0 1.182-.294 2.062-.91 2.667-.608.608-1.476.896-2.65.896h-6.274c-1.174 0-2.034-.288-2.65-.896-.54-.54-.838-1.289-.894-2.275l-.008-.549c-.107.009-.205.009-.311.009-3.782 0-5.989-1.913-5.989-5.992 0-4.09 2.207-6.003 5.989-6.003.098 0 .204 0 .302.009v-.426c0-1.148.294-2.011.91-2.636.617-.625 1.485-.927 2.65-.927h6.275c1.182 0 2.05.294 2.658.91zm.08 2.653c0-.944-.212-1.625-.663-2.07-.443-.451-1.123-.672-2.076-.672h-6.274c-.936 0-1.617.221-2.068.689-.45.45-.672 1.126-.672 2.053v.485c3.093.353 4.866 2.274 4.866 5.935 0 3.653-1.773 5.574-4.858 5.927v.583c.048.756.27 1.322.664 1.717.443.443 1.124.658 2.068.658h6.274c.953 0 1.625-.213 2.076-.658.45-.454.664-1.134.664-2.087V5.718zm-7.708 6.42c0-3.479-1.692-5.182-5.168-5.182-3.48 0-5.168 1.7-5.168 5.182s1.689 5.171 5.168 5.171c3.476 0 5.168-1.692 5.168-5.17zm2.894 5.992c0-.672-.396-1.067-1.06-1.067-.663 0-1.064.395-1.067 1.067 0 .322.101.585.28.773.188.196.46.294.788.294.327 0 .6-.098.787-.294.182-.19.272-.454.272-.773zM6.332 9.4a.41.41 0 01.408.41v4.812a.41.41 0 01-.817 0v-4.81c0-.227.184-.412.409-.412zm3.896.395a.41.41 0 00-.41-.411.412.412 0 00-.408.411v4.81a.41.41 0 00.818 0v-4.81z"
            />
        </svg>
    );
};

export default IconMobilePauseLight;
