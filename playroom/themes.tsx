import * as themes from '../.storybook/themes';
import type {ThemeConfig} from '../src/utils/theme';

const common: Partial<ThemeConfig> = {
    enableTabFocus: true,
    colorScheme: 'auto',
    i18n: {locale: 'en-US', phoneNumberFormattingRegionCode: 'ES'},
    dimensions: {
        headerMobileHeight: 0,
    },
} as const;

export const Movistar: ThemeConfig = {...themes.Movistar, ...common};
export const AppMiMovistar: ThemeConfig = {...themes.AppMiMovistar, ...common};
