import {getMovistarSkin, getAppMiMovistarSkin} from '../src';

export const Movistar = {
    i18n: {locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES'},
    skin: getMovistarSkin(),
} as const;

export const AppMiMovistar = {
    i18n: {locale: 'es-ES', phoneNumberFormattingRegionCode: 'ES'},
    skin: getAppMiMovistarSkin(),
} as const;

export const AVAILABLE_THEMES = [Movistar, AppMiMovistar];
