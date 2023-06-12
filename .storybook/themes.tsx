import {getMovistarSkin, getTelefonicaSkin} from '../src';

export const Movistar = {
    i18n: {locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES'},
    skin: getMovistarSkin(),
} as const;

export const Movistar_Prominent = {
    i18n: {locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES'},
    skin: getMovistarSkin('prominent'),
} as const;

export const Telefonica = {
    i18n: {locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES'},
    skin: getTelefonicaSkin(),
} as const;

export const AVAILABLE_THEMES = [Movistar, Telefonica];
