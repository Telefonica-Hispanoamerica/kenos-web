import * as React from 'react';
import FixedFooterLayout from './fixed-footer-layout';
import ButtonLayout from '@components/Buttons/ButtonLayout';
import {useScreenSize} from '@hooks/hooks';
import {ButtonLink} from '@components/Buttons/Button';
import ResponsiveLayout from '@layout/ResponsiveLayout/responsive-layout';
import Box from '@layout/Box/box';
import type {RendersNullableElement} from '@utils/types';
import type {NullableButtonElement} from '@components/Buttons/Button';

type Props = {
    isFooterVisible?: boolean;
    button?: NullableButtonElement;
    desktopButtonAlign?: 'left' | 'center';
    secondaryButton?: NullableButtonElement;
    link?: RendersNullableElement<typeof ButtonLink>;
    footerBgColor?: string;
    containerBgColor?: string;
    children: React.ReactNode;
    onChangeFooterHeight?: (heightInPx: number) => void;
};

const ButtonFixedFooterLayout: React.FC<Props> = ({
    isFooterVisible = true,
    button,
    secondaryButton,
    link,
    children,
    desktopButtonAlign = 'left',
    footerBgColor,
    containerBgColor,
    onChangeFooterHeight,
}) => {
    const {isTabletOrSmaller, isTablet} = useScreenSize();
    const hasButton = !!button || !!secondaryButton;
    return (
        <FixedFooterLayout
            onChangeFooterHeight={onChangeFooterHeight}
            isFooterVisible={hasButton && isFooterVisible}
            footerBgColor={footerBgColor}
            containerBgColor={containerBgColor}
            footer={
                <ResponsiveLayout>
                    <Box paddingY={isTablet ? 32 : isTabletOrSmaller ? 16 : 0}>
                        <ButtonLayout
                            align={isTabletOrSmaller ? 'full-width' : desktopButtonAlign}
                            link={link}
                        >
                            {button}
                            {secondaryButton}
                        </ButtonLayout>
                    </Box>
                </ResponsiveLayout>
            }
        >
            {children}
        </FixedFooterLayout>
    );
};

export default ButtonFixedFooterLayout;
