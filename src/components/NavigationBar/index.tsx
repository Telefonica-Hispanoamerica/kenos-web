import * as React from 'react';
import * as styles from './index.css';
import classnames from 'classnames';
import {CSSTransition} from 'react-transition-group';
import {vars} from '@skins/skin-contract.css';
import {useScreenSize, useTheme, useAriaId} from '@hooks/hooks';
import Box from '@layout/Box/box';
import Inline from '@layout/Inline/inline';
import GridLayout from '@layout/GridLayout/grid-layout';
import ResponsiveLayout from '@layout/ResponsiveLayout/responsive-layout';
import {Text2, Text3} from '@components/Text';
import {IconButton} from '@components/Buttons';
import {Row, RowList} from '@components/Lists';
import {BaseTouchable} from '@components/Primitives/Touchable';
import type {Props as TouchableProps} from '@components/Primitives/Touchable';
import IconMenuRegular from '../../generated/kenos-icons/icon-menu-regular';
import IconCloseRegular from '../../generated/kenos-icons/icon-close-regular';
import IconChevronLeftRegular from '../../generated/kenos-icons/icon-chevron-left-regular';
import {Portal} from '@utils/portal';
import FocusTrap from '@utils/focus-trap';
import NegativeBox from '@utils/negative-box';
import {sprinkles} from '@utils/sprinkles.css';
import type {DataAttributes} from '@utils/types';
import {getPrefixedDataAttributes} from '@utils/dom';
import {useSetModalState} from '@utils/modal-context-provider';
import {ThemeVariant, useIsInverseVariant} from '@utils/theme-variant-context';

type LogoProps = {size: number};

const MovistarLogo = ({size}: LogoProps) => {
    const {isDarkMode} = useTheme();
    const isInverse = useIsInverseVariant();
    const color = isInverse && !isDarkMode ? vars.colors.inverse : vars.colors.brand;
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color} role="presentation">
            <path d="M5.75989 5.73747C4.83318 5.7524 3.12261 6.21673 2.34128 9.45937C2.00085 10.8723 1.86931 12.3449 2.16077 14.0979C2.42943 15.7147 2.90545 17.1101 3.22629 17.8792C3.33689 18.1441 3.50812 18.4206 3.6405 18.5906C4.02129 19.0797 4.65503 19.0484 4.92132 18.9151C5.2116 18.7699 5.54527 18.4194 5.42453 17.6187C5.36611 17.2319 5.19775 16.666 5.10302 16.3515C4.81224 15.3863 4.42521 14.2216 4.39143 13.392C4.34635 12.2823 4.77695 12.1369 5.06283 12.0731C5.54375 11.9655 5.94682 12.5021 6.3298 13.1746C6.78691 13.9771 7.57026 15.3991 8.20924 16.4853C8.78607 17.4658 9.85057 18.5156 11.5601 18.4436C13.303 18.3703 14.5877 17.6946 15.2494 15.5671C15.7447 13.9756 16.0823 12.7863 16.6255 11.5683C17.2501 10.1677 18.0833 9.41801 18.7849 9.64692C19.4364 9.85935 19.599 10.5064 19.6067 11.4576C19.6137 12.2989 19.5179 13.2264 19.4435 13.9078C19.4164 14.1551 19.3675 14.6525 19.3874 14.9286C19.4267 15.4715 19.6581 16.0138 20.2597 16.1006C20.9006 16.1929 21.4148 15.6725 21.6201 15.0434C21.7011 14.7955 21.7702 14.4161 21.8075 14.1468C21.9958 12.7873 22.0446 11.8735 21.9598 10.4824C21.8604 8.85587 21.5471 7.3726 21.0007 6.08889C20.4779 4.8613 19.6382 4.07454 18.5612 4.00504C17.369 3.92817 16.0009 4.73192 15.2832 6.29138C14.6216 7.72883 14.0924 9.20455 13.7714 9.95768C13.4458 10.7214 12.9673 11.1921 12.2315 11.2709C11.332 11.367 10.5569 10.7034 9.98921 9.75726C9.49428 8.93257 8.51336 7.3623 7.98853 6.83465C7.49546 6.33891 6.9323 5.71859 5.75989 5.73747Z" />
        </svg>
    );
};

const TelefonicaLogo = ({size}: LogoProps) => {
    const {isDarkMode} = useTheme();
    const isInverse = useIsInverseVariant();
    const color = isInverse && !isDarkMode ? vars.colors.inverse : vars.colors.brand;
    return (
        <svg height={size} viewBox="0 0 65 24" fill={color} role="presentation">
            <path d="M4.18502 9.37005C5.39177 9.37005 6.37004 8.39178 6.37004 7.18503C6.37004 5.97828 5.39177 5.00001 4.18502 5.00001C2.97827 5.00001 2 5.97828 2 7.18503C2 8.39178 2.97827 9.37005 4.18502 9.37005Z" />
            <path d="M9.31939 9.37004C10.5261 9.37004 11.5044 8.39177 11.5044 7.18502C11.5044 5.97827 10.5261 5 9.31939 5C8.11263 5 7.13437 5.97827 7.13437 7.18502C7.13437 8.39177 8.11263 9.37004 9.31939 9.37004Z" />
            <path d="M14.4544 9.37004C15.6611 9.37004 16.6394 8.39177 16.6394 7.18502C16.6394 5.97827 15.6611 5 14.4544 5C13.2476 5 12.2693 5.97827 12.2693 7.18502C12.2693 8.39177 13.2476 9.37004 14.4544 9.37004Z" />
            <path d="M9.31939 14.505C10.5261 14.505 11.5044 13.5268 11.5044 12.32C11.5044 11.1133 10.5261 10.135 9.31939 10.135C8.11263 10.135 7.13437 11.1133 7.13437 12.32C7.13437 13.5268 8.11263 14.505 9.31939 14.505Z" />
            <path d="M9.31939 19.64C10.5261 19.64 11.5044 18.6617 11.5044 17.455C11.5044 16.2482 10.5261 15.2699 9.31939 15.2699C8.11263 15.2699 7.13437 16.2482 7.13437 17.455C7.13437 18.6617 8.11263 19.64 9.31939 19.64Z" />
            <path d="M21.2967 10.6169H19.263V9.4054H24.5962V10.6169H22.557V16.1923H21.2967V10.6169Z" />
            <path d="M28.8498 14.738C28.743 15.126 28.1324 16.2893 26.5714 16.2893C25.1172 16.2893 24.0503 15.223 24.0503 13.72C24.0503 12.2169 25.1172 11.1506 26.5714 11.1506C27.9287 11.1506 28.9955 12.2169 28.9955 13.623C28.9932 13.7398 28.9834 13.8563 28.9663 13.9719L28.9467 14.1079H25.2623C25.3691 14.796 25.8827 15.2712 26.5714 15.2712C27.1436 15.2712 27.4925 14.9418 27.5895 14.738H28.8498ZM27.7835 13.2838C27.6767 12.6531 27.2595 12.1687 26.5714 12.1687C25.8345 12.1687 25.4075 12.6531 25.2623 13.2838H27.7835Z" />
            <path d="M29.7221 9.4054H30.9341V16.1923H29.7221V9.4054Z" />
            <path d="M36.4601 14.738C36.3534 15.126 35.7428 16.2893 34.1812 16.2893C32.7269 16.2893 31.6606 15.223 31.6606 13.72C31.6606 12.2169 32.7269 11.1506 34.1812 11.1506C35.539 11.1506 36.6053 12.2169 36.6053 13.623C36.6029 13.7398 36.5932 13.8563 36.576 13.9719L36.5571 14.1079H32.8721C32.9788 14.796 33.4931 15.2712 34.1812 15.2712C34.7533 15.2712 35.1023 14.9418 35.1992 14.738H36.4601ZM35.3932 13.2838C35.2865 12.6531 34.8698 12.1687 34.1812 12.1687C33.4443 12.1687 33.0179 12.6531 32.8721 13.2838H35.3932Z" />
            <path d="M37.7198 12.4109H36.8957V11.2476H37.7198V10.5199C37.7198 9.78301 38.1949 9.30782 38.9318 9.30782H39.9987V10.3747H39.271C39.2261 10.3735 39.1814 10.3815 39.1397 10.3981C39.098 10.4148 39.0601 10.4397 39.0283 10.4714C38.9966 10.5031 38.9716 10.541 38.9549 10.5827C38.9382 10.6243 38.9301 10.669 38.9312 10.7139V11.2476H39.9981V12.4109H38.9312V16.1929H37.7192L37.7198 12.4109Z" />
            <path d="M45.2222 13.723C45.2222 15.2261 44.1553 16.2923 42.701 16.2923C41.2468 16.2923 40.1799 15.223 40.1799 13.723C40.1799 12.223 41.2468 11.1537 42.701 11.1537C44.1553 11.1537 45.2222 12.2169 45.2222 13.723ZM44.0101 13.723C44.0101 12.8501 43.4281 12.2688 42.701 12.2688C41.9739 12.2688 41.392 12.8501 41.392 13.723C41.392 14.5959 41.9739 15.1773 42.701 15.1773C43.4281 15.1773 44.0101 14.5929 44.0101 13.723Z" />
            <path d="M45.9487 11.2476H47.0637L47.1607 11.7356H47.2089C47.305 11.6239 47.4161 11.526 47.5389 11.4447C47.8455 11.2486 48.203 11.1474 48.5668 11.1537C49.6819 11.1537 50.506 11.9778 50.506 13.2381V16.1953H49.2939V13.332C49.2939 12.7019 48.8577 12.2657 48.227 12.2657C47.5963 12.2657 47.1607 12.7019 47.1607 13.332V16.1923H45.9487V11.2476Z" />
            <path d="M58.22 14.3501C58.0651 15.126 57.4545 16.2893 55.8929 16.2893C54.4386 16.2893 53.3724 15.223 53.3724 13.72C53.3724 12.2169 54.4386 11.1506 55.8929 11.1506C57.4545 11.1506 58.0651 12.3139 58.22 13.0416H57.0086C56.9018 12.7604 56.6206 12.2663 55.8929 12.2663C55.1651 12.2663 54.582 12.847 54.582 13.723C54.582 14.599 55.1639 15.1772 55.891 15.1772C56.6182 15.1772 56.9 14.6929 57.0067 14.3531L58.22 14.3501Z" />
            <path d="M61.8849 15.7079H61.8367C61.7391 15.8217 61.6245 15.9196 61.497 15.9983C61.1772 16.1964 60.8068 16.2975 60.4307 16.2893C59.3058 16.2893 58.6367 15.6012 58.6367 14.7868C58.6367 13.8169 59.3156 13.1398 60.6728 13.1398H61.7879V13.0429C61.7879 12.5 61.4585 12.1218 60.915 12.1218C60.3715 12.1218 60.0909 12.4713 60.0427 12.7525H58.8306C58.9374 11.9375 59.5968 11.1525 60.915 11.1525C62.1759 11.1525 63 11.9863 63 13.0435V16.1947H61.9819L61.8849 15.7079ZM61.7879 14.0609H60.7698C60.1397 14.0609 59.8487 14.3049 59.8487 14.6917C59.8487 15.0784 60.1299 15.3218 60.6247 15.3218C61.3615 15.3218 61.7879 14.8948 61.7879 14.2067V14.0609Z" />
            <path d="M51.4338 11.2476H52.6459V16.1923H51.4338V11.2476Z" />
            <path d="M52.0395 10.537C52.4357 10.537 52.7569 10.2158 52.7569 9.81961C52.7569 9.42342 52.4357 9.10225 52.0395 9.10225C51.6433 9.10225 51.3221 9.42342 51.3221 9.81961C51.3221 10.2158 51.6433 10.537 52.0395 10.537Z" />
            <path d="M43.1372 9.16265H44.398L43.2342 10.5687H42.2161L43.1372 9.16265Z" />
        </svg>
    );
};

type NavigationBarLogoProps = {
    size?: number;
    children?: undefined;
};

export const NavigationBarLogo: React.FC<NavigationBarLogoProps> = ({size}) => {
    const {skinName} = useTheme();
    const {isTabletOrSmaller} = useScreenSize();
    size = size ?? (isTabletOrSmaller ? 40 : 48);
    switch (skinName) {
        case 'Movistar':
            return <MovistarLogo size={size} />;
        case 'Telefonica':
            return <TelefonicaLogo size={size} />;
        default:
            return null;
    }
};

const BurgerMenuIcon = ({isOpen}: {isOpen: boolean}) => {
    return (
        <div className={styles.burgerIconContainer} role="presentation" data-component-name="BurgerMenuIcon">
            <div className={isOpen ? '' : styles.iconCloseHidden}>
                <IconCloseRegular />
            </div>
            <div className={isOpen ? styles.iconMenuHidden : ''}>
                <IconMenuRegular />
            </div>
        </div>
    );
};

const BURGER_MENU_ANIMATION_DURATION_MS = 300;

type HeaderProps = {
    children: React.ReactNode;
    topFixed?: boolean;
    isInverse?: boolean;
    withBorder?: boolean;
    isMenuOpen?: boolean;
    dataAttributes?: DataAttributes;
};

const Header = ({children, topFixed, withBorder, isMenuOpen, isInverse, dataAttributes}: HeaderProps) => {
    const {isDarkMode} = useTheme();

    const getBorderClass = () => {
        const inverse = isInverse && !isDarkMode;

        if (isMenuOpen || inverse) return styles.navbarBorderColorVariants.inverse;

        if (isMenuOpen && !inverse) return styles.navbarBorderColorVariants.menuOpen;

        return styles.navbarBorderColorVariants.default;
    };

    return (
        <header
            className={classnames(getBorderClass(), {[styles.topFixed]: topFixed})}
            style={{
                borderBottomWidth: withBorder ? 1 : 0,
                background: isInverse ? vars.colors.navigationBarBackground : vars.colors.background,
            }}
            {...getPrefixedDataAttributes(dataAttributes)}
        >
            {children}
        </header>
    );
};

type MainNavigationBarSection =
    | {href: string; to?: undefined; onPress?: undefined; title: string}
    | {to: string; href?: undefined; onPress?: undefined; title: string}
    | {onPress: () => void; to?: undefined; href?: undefined; title: string};

type MainNavigationBarProps = {
    sections: ReadonlyArray<MainNavigationBarSection>;
    selectedIndex?: number;
    right?: React.ReactElement;
    logo?: React.ReactElement;
    isInverse?: boolean;
    children?: undefined;
    topFixed?: boolean;
};

type MenuTransitionState = 'closed' | 'opening' | 'open' | 'closing';

export const MainNavigationBar: React.FC<MainNavigationBarProps> = ({
    sections,
    selectedIndex,
    right,
    logo,
    isInverse = false,
    topFixed = true,
}) => {
    const {texts, isDarkMode} = useTheme();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [menuTransitionState, setMenuTransitionState] = React.useState<MenuTransitionState>('closed');
    const menuId = useAriaId();
    const shadowAlpha = isDarkMode ? 1 : 0.2;
    const {isTabletOrSmaller} = useScreenSize();
    const setModalState = useSetModalState();

    logo = logo ?? <NavigationBarLogo />;

    if (isTabletOrSmaller) {
        const openMenu = () => {
            setIsMenuOpen(true);
            setModalState({isModalOpen: true});
        };

        const closeMenu = () => {
            setIsMenuOpen(false);
            setModalState({isModalOpen: false});
        };

        const disableFocusTrap = menuTransitionState !== 'open';

        const showBurger = sections.length > 1;

        return (
            <>
                <FocusTrap disabled={disableFocusTrap} group="burger-menu-lock">
                    <ThemeVariant isInverse={isInverse}>
                        <Header
                            topFixed={topFixed}
                            withBorder
                            isMenuOpen={isMenuOpen}
                            isInverse={isInverse}
                            dataAttributes={{'component-name': 'MainNavigationBar'}}
                        >
                            <ResponsiveLayout>
                                <Inline space="between" alignItems="center">
                                    <Inline space={24} alignItems="center">
                                        {showBurger && (
                                            <IconButton
                                                aria-live="polite"
                                                aria-label={
                                                    isMenuOpen
                                                        ? texts.closeNavigationMenu
                                                        : texts.openNavigationMenu
                                                }
                                                aria-expanded={isMenuOpen}
                                                aria-controls={menuId}
                                                onPress={isMenuOpen ? closeMenu : openMenu}
                                            >
                                                <BurgerMenuIcon isOpen={isMenuOpen} />
                                            </IconButton>
                                        )}
                                        <div className={styles.logoContainer}>{logo}</div>
                                    </Inline>
                                    {right}
                                </Inline>
                            </ResponsiveLayout>
                        </Header>
                    </ThemeVariant>
                    {topFixed && <div className={styles.spacer} />}
                </FocusTrap>
                {showBurger && (
                    <Portal>
                        <FocusTrap disabled={disableFocusTrap} group="burger-menu-lock">
                            <CSSTransition
                                onEntering={() => {
                                    setMenuTransitionState('opening');
                                }}
                                onEntered={() => {
                                    setMenuTransitionState('open');
                                }}
                                onExiting={() => {
                                    setMenuTransitionState('closing');
                                }}
                                onExited={() => {
                                    setMenuTransitionState('closed');
                                }}
                                in={isMenuOpen}
                                timeout={BURGER_MENU_ANIMATION_DURATION_MS}
                                classNames={{
                                    enter: styles.burgerMenuEnter,
                                    enterActive: styles.burgerMenuEnterActive,
                                    exit: styles.burgerMenuExit,
                                    exitActive: styles.burgerMenuExitActive,
                                }}
                                unmountOnExit
                            >
                                {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                                <nav
                                    className={styles.burgerMenu}
                                    style={{
                                        boxShadow:
                                            menuTransitionState !== 'closed'
                                                ? `6px 0 4px -4px rgba(0, 0, 0, ${shadowAlpha})`
                                                : 'none',
                                    }}
                                    id={menuId}
                                    onClick={() => {
                                        // Capture bubbling click events to close the burger menu when any row is pressed
                                        closeMenu();
                                    }}
                                >
                                    <ResponsiveLayout>
                                        <NegativeBox>
                                            <RowList>
                                                {sections.map((section, index) => (
                                                    <Row key={index} {...section} />
                                                ))}
                                            </RowList>
                                        </NegativeBox>
                                    </ResponsiveLayout>
                                </nav>
                            </CSSTransition>
                        </FocusTrap>
                    </Portal>
                )}
            </>
        );
    }

    return (
        <ThemeVariant isInverse={isInverse}>
            <Header
                topFixed={topFixed}
                withBorder
                isMenuOpen={isMenuOpen}
                isInverse={isInverse}
                dataAttributes={{'component-name': 'MainNavigationBar'}}
            >
                <ResponsiveLayout>
                    <Inline space="between" alignItems="center">
                        <Inline space={48} alignItems="center">
                            <div className={styles.logoContainer}>{logo}</div>
                            <nav>
                                <Inline space={32}>
                                    {sections.map(({title, ...touchableProps}, idx) => (
                                        <BaseTouchable
                                            {...touchableProps}
                                            key={idx}
                                            className={classnames(styles.section, {
                                                [styles.selectedSectionVariantes[
                                                    isInverse ? 'inverse' : 'default'
                                                ]]: idx === selectedIndex,
                                            })}
                                        >
                                            <div
                                                className={
                                                    styles.textWrapperVariants[
                                                        isInverse ? 'inverse' : 'default'
                                                    ]
                                                }
                                            >
                                                <Text3 regular color="inherit">
                                                    {title}
                                                </Text3>
                                            </div>
                                        </BaseTouchable>
                                    ))}
                                </Inline>
                            </nav>
                        </Inline>
                        {right}
                    </Inline>
                </ResponsiveLayout>
            </Header>
            {topFixed && <div className={styles.spacer} />}
        </ThemeVariant>
    );
};

interface NavigationBarCommonProps {
    isInverse?: boolean;
    onBack?: () => void;
    title?: string;
    right?: React.ReactElement;
    withBorder?: boolean;
    children?: undefined;
}

interface NavigationBarTopFixedProps extends NavigationBarCommonProps {
    topFixed?: true;
    paddingX?: undefined;
}

interface NavigationBarNotFixedProps extends NavigationBarCommonProps {
    topFixed: false;
    paddingX?: number;
}

type NavigationBarProps = NavigationBarTopFixedProps | NavigationBarNotFixedProps;

export const NavigationBar: React.FC<NavigationBarProps> = ({
    onBack,
    title,
    right,
    isInverse = false,
    topFixed = true,
    paddingX = 0,
    withBorder = true,
}) => {
    const {texts} = useTheme();
    const content = (
        <Inline space="between" alignItems="center">
            <Inline space={24} alignItems="center">
                {onBack && (
                    <IconButton
                        aria-label={texts.backNavigationBar}
                        onPress={onBack}
                        className={styles.iconButtonVariants[isInverse ? 'inverse' : 'default']}
                    >
                        <IconChevronLeftRegular color="currentColor" />
                    </IconButton>
                )}
                <Text3 regular truncate>
                    {title}
                </Text3>
            </Inline>
            <Box paddingLeft={24}>{right}</Box>
        </Inline>
    );
    return (
        <ThemeVariant isInverse={isInverse}>
            <Header
                topFixed={topFixed}
                withBorder={withBorder}
                isInverse={isInverse}
                dataAttributes={{'component-name': 'NavigationBar'}}
            >
                {topFixed ? (
                    <ResponsiveLayout>{content}</ResponsiveLayout>
                ) : (
                    <div
                        className={sprinkles({
                            width: '100%',
                        })}
                        style={{
                            padding: `0 ${paddingX}px`,
                        }}
                    >
                        {content}
                    </div>
                )}
            </Header>
            {topFixed && <div className={styles.spacer} />}
        </ThemeVariant>
    );
};

type FunnelNavigationBarProps = {
    isInverse?: boolean;
    logo?: React.ReactElement;
    right?: React.ReactElement;
    topFixed?: boolean;
    children?: undefined;
};

export const FunnelNavigationBar: React.FC<FunnelNavigationBarProps> = ({
    logo,
    right,
    isInverse = false,
    topFixed = true,
}) => {
    return (
        <ThemeVariant isInverse={isInverse}>
            <Header
                topFixed={topFixed}
                withBorder
                isInverse={isInverse}
                dataAttributes={{'component-name': 'FunnelNavigationBar'}}
            >
                <ResponsiveLayout>
                    <GridLayout template="10">
                        <Inline space="between" alignItems="center">
                            {logo ?? <NavigationBarLogo />}
                            {right}
                        </Inline>
                    </GridLayout>
                </ResponsiveLayout>
            </Header>
            {topFixed && <div className={styles.spacer} />}
        </ThemeVariant>
    );
};

type NavigationBarActionGroupProps = {
    children: React.ReactNode;
};

export const NavigationBarActionGroup: React.FC<NavigationBarActionGroupProps> = ({children}) => {
    return (
        <div className={styles.lineHeightFix} data-component-name="NavigationBarActionGroup">
            <Inline space={24} alignItems="center">
                {children}
            </Inline>
        </div>
    );
};

type NavigationBarActionProps = TouchableProps;

export const NavigationBarAction: React.FC<NavigationBarActionProps> = ({children, ...touchableProps}) => {
    const isInverse = useIsInverseVariant();
    return (
        <BaseTouchable
            {...touchableProps}
            className={classnames(
                sprinkles({
                    border: 'none',
                    background: 'transparent',
                    padding: 0,
                }),
                styles.lineHeightFix,
                styles.textWrapperVariants[isInverse ? 'inverse' : 'default']
            )}
            dataAttributes={{'component-name': 'NavigationBarAction'}}
        >
            <Inline space={16} alignItems="center">
                {React.Children.map(children, (child) =>
                    typeof child === 'string' ? (
                        <Text2 regular color="inherit">
                            {child}
                        </Text2>
                    ) : (
                        child
                    )
                )}
            </Inline>
        </BaseTouchable>
    );
};
