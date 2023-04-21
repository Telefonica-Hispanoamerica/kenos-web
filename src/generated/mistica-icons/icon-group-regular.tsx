/*
 * This file was autogenerated. Don't edit this file!
 *
 * To update, execute "yarn start" inside "import-mistica-icons"
 */

import * as React from 'react';
import {useIsInverseVariant} from '@utils/theme-variant-context';
import {vars} from '@skins/skin-contract.css';

import type {IconProps} from '@utils/types';

const IconGroupRegular = ({color, size = 24, ...rest}: IconProps): JSX.Element => {
    const isInverse = useIsInverseVariant();
    const fillColor = color ?? (isInverse ? vars.colors.inverse : vars.colors.neutralHigh);

    return (
        <svg width={size} height={size} viewBox="0 0 24 24" role="presentation" {...rest}>
            <path
                fill={fillColor}
                d="M9.23 11.045c.637.639 1.558.964 2.743.964 1.182 0 2.104-.325 2.748-.964.666-.666 1.003-1.652 1.003-2.932s-.34-2.27-1.003-2.939c-.639-.641-1.563-.969-2.745-.969-1.185 0-2.107.325-2.745.97-.661.669-.998 1.655-.998 2.938 0 1.28.334 2.269.998 2.932zm.258-2.932c0-.914.205-1.586.614-1.998.398-.397 1.025-.6 1.868-.6.846 0 1.476.203 1.874.603.412.412.62 1.081.62 1.995 0 .91-.208 1.58-.617 1.988-.398.395-1.03.597-1.877.597-.846 0-1.476-.199-1.871-.597-.403-.409-.61-1.078-.61-1.988zm-3.823 2.182c.11-.112.342-.174.658-.177.314 0 .55.062.661.174.154.154.177.504.177.7 0 .193-.023.543-.174.695-.112.112-.347.174-.664.174-.316 0-.549-.06-.661-.171-.148-.152-.17-.502-.17-.695 0-.196.022-.55.173-.7zm-.874 2.339c.356.358.871.537 1.532.537.658 0 1.177-.179 1.535-.532.373-.375.56-.927.56-1.641 0-.717-.187-1.27-.56-1.645-.358-.358-.874-.54-1.535-.54-.661 0-1.176.182-1.532.54-.37.373-.558.925-.558 1.642 0 .714.188 1.266.558 1.639zm12.213-2.286c.106-.11.33-.168.638-.165.3 0 .527.058.63.162.144.146.166.485.166.672 0 .32-.059.563-.162.667-.104.104-.334.163-.634.163-.302 0-.535-.062-.638-.166-.143-.143-.166-.479-.166-.664 0-.187.02-.524.166-.67zm-1.426.67c0 .702.185 1.246.552 1.61.353.35.86.53 1.507.53.65 0 1.157-.177 1.507-.53.364-.364.549-.908.549-1.61 0-.704-.185-1.247-.546-1.614-.35-.353-.86-.532-1.507-.532-.653 0-1.16.179-1.51.532-.367.367-.552.908-.552 1.613zm5.006 6.35h-1.998c-.067-.74-.246-1.415-.56-1.984l.824.003c.574 0 1.033.168 1.327.487.267.292.407.71.407 1.208v.285zm-3.216.577v.535s-10.784 0-10.784-.003v-.535c0-.986.257-1.804.745-2.367.658-.756 1.644-.916 2.358-.916h4.566c.714 0 1.703.16 2.364.919.49.565.75 1.383.75 2.367zm-12.003-.56s-1.952 0-1.952-.004v-.288c0-.499.143-.916.409-1.204.291-.32.75-.488 1.327-.488l.768-.003c-.311.572-.487 1.247-.552 1.986zm16.476-.303c0-.846-.26-1.577-.756-2.115-.535-.583-1.308-.89-2.238-.894h-2.014c-.7-.473-1.571-.725-2.583-.725H9.687c-1.02 0-1.902.258-2.605.742H5.15c-.93 0-1.703.311-2.238.894-.495.537-.756 1.266-.756 2.112v.703c0 .493.387.896.86.896h2.31v.625c0 .26.191.47.427.47H18.2c.235 0 .426-.21.426-.47v-.642h2.355c.474 0 .86-.4.86-.893v-.703z"
            />
        </svg>
    );
};

export default IconGroupRegular;
