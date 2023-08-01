import {MI_MOVISTAR_SKIN} from '@skins/constants';

import type {GetKnownSkin, KnownSkin} from '@skins/types';

const palette = {
    egg: '#f28d15',
    egg10: '#fef4e8',
    egg80: '#6d3f09',
    grey1: '#f6f6f6',
    grey2: '#eeeeee',
    grey3: '#dddddd',
    grey4: '#999999',
    grey5: '#86888c',
    grey6: '#31323599',
    movistarBlue: '#5bc500',
    movistarBlue10: '#e6f5fd',
    movistarBlue20: '#b3e1fb',
    movistarBlue30: '#5bc500',
    movistarBlue55: '#499e00',
    movistarBlueDark: '#00a9e0',
    movistarBlueDark10: '#e6f5fd',
    movistarBlueDark60: '#008edd',
    movistarBlueDarkSecondary: '#0b2739',
    movistarGreen: '#5cb615',
    movistarGreen10: '#eff8e8',
    movistarGreen70: '#407f0f',
    pepper: '#ff374a',
    pepper10: '#ffebed',
    pepper55: '#d73241',
    pepper70: '#b22634',
    pink: '#e63780',
    purple: '#a13ea1',
    purple10: '#f6ecf6',
    purple70: '#712b71',
    white: '#ffffff',
};

export const getAppMiMovistarSkin: GetKnownSkin = () => {
    const skin: KnownSkin = {
        name: MI_MOVISTAR_SKIN,
        colors: {
            appBarBackground: palette.white,
            background: palette.white,
            backgroundContainer: palette.white,
            backgroundBrand: palette.movistarBlueDark,
            backgroundBrandSecondary: palette.movistarBlueDarkSecondary,
            backgroundOverlay: palette.grey6,
            backgroundSkeleton: palette.grey1,
            backgroundSkeletonInverse: palette.movistarBlueDark60,
            backgroundAlternative: palette.grey1,
            backgroundFeedbackBottom: palette.movistarBlueDark,
            navigationBarBackground: palette.movistarBlueDark,
            skeletonWave: palette.grey3,
            border: palette.grey3,
            borderSelected: palette.movistarBlue,
            buttonDangerBackground: palette.pepper,
            buttonDangerBackgroundSelected: palette.pepper55,
            buttonDangerBackgroundHover: palette.pepper55,
            buttonLinkBackgroundSelected: palette.movistarBlue10,
            buttonPrimaryBackground: palette.movistarBlue,
            buttonPrimaryBackgroundInverse: palette.white,
            buttonPrimaryBackgroundSelected: palette.movistarBlue55,
            buttonPrimaryBackgroundHover: palette.movistarBlue55,
            buttonSecondaryBorderInverse: palette.white,
            buttonSecondaryBackgroundSelected: palette.movistarBlue55,
            control: palette.grey3,
            controlActivated: palette.movistarBlue,
            controlError: palette.pepper,
            loadingBar: palette.movistarBlue30,
            loadingBarBackground: palette.movistarBlue55,
            toggleAndroidInactive: palette.grey2,
            toggleAndroidBackgroundActive: palette.movistarBlue20,
            iosControlKnob: palette.white,
            divider: palette.grey2,
            dividerInverse: palette.movistarBlue55,
            navigationBarDivider: palette.movistarBlueDark,
            badge: palette.pepper55,
            feedbackErrorBackground: palette.pepper,
            feedbackInfoBackground: palette.grey6,
            brand: palette.movistarBlueDark,
            brandHigh: palette.movistarBlueDark60,
            inverse: palette.white,
            neutralHigh: palette.grey6,
            neutralLow: palette.grey1,
            neutralMedium: palette.grey5,
            promo: palette.purple,
            error: palette.pepper,
            highlight: palette.pink,
            success: palette.movistarGreen,
            warning: palette.egg,
            textPrimary: palette.grey6,
            textPrimaryInverse: palette.white,
            textSecondary: palette.grey5,
            textSecondaryInverse: palette.white,
            textButtonPrimary: palette.white,
            textButtonPrimaryInverse: palette.movistarBlue,
            textButtonPrimaryInverseSelected: palette.movistarBlue,
            textButtonSecondary: palette.movistarBlue,
            textButtonSecondarySelected: palette.movistarBlue55,
            textButtonSecondaryInverse: palette.white,
            textButtonSecondaryInverseSelected: palette.white,
            textLink: palette.movistarBlue,
            textLinkInverse: palette.white,
            textLinkDanger: palette.pepper,
            textLinkSnackbar: palette.movistarBlue30,
            textNavigationBarPrimary: palette.white,
            textNavigationBarSecondary: palette.movistarBlue20,
            textNavigationSearchBarHint: palette.movistarBlue20,
            textNavigationSearchBarText: palette.white,
            textAppBar: palette.grey4,
            textAppBarSelected: palette.movistarBlue,
            successLow: palette.movistarGreen10,
            warningLow: palette.egg10,
            errorLow: palette.pepper10,
            promoLow: palette.purple10,
            brandLow: palette.movistarBlueDark10,
            successHigh: palette.movistarGreen70,
            warningHigh: palette.egg80,
            errorHigh: palette.pepper70,
            promoHigh: palette.purple70,

            // Missing properties

            borderLow: '',
            borderHigh: '',
            buttonLinkBackgroundInverseSelected: '',
            buttonPrimaryBackgroundInverseSelected: '',
            buttonSecondaryBorder: '',
            buttonSecondaryBorderSelected: '',
            buttonSecondaryBorderInverseSelected: '',
            buttonSecondaryBackgroundHover: '',
            buttonSecondaryBackgroundInverseHover: '',
            buttonSecondaryBackgroundInverseSelected: '',
            neutralMediumInverse: '',
            successHighInverse: '',
            warningHighInverse: '',
            errorHighInverse: '',
            promoHighInverse: '',
        },
    };
    return skin;
};
