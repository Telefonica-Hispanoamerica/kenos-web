import * as themes from '../.storybook/themes';

import type {ThemeConfig} from '../src/theme';

const common: Partial<ThemeConfig> = {
    enableTabFocus: true,
    colorScheme: 'auto',
    i18n: {locale: 'en-US', phoneNumberFormattingRegionCode: 'ES'},
    dimensions: {
        headerMobileHeight: 0,
    },
} as const;

export const Movistar: ThemeConfig = {...themes.Movistar, ...common};
export const Movistar_Prominent: ThemeConfig = {...themes.Movistar_Prominent, ...common};
export const Telefonica: ThemeConfig = {...themes.Telefonica, ...common};

export const Movistar_iOS: ThemeConfig = {...Movistar, platformOverrides: {platform: 'ios'}};
export const Telefonica_iOS: ThemeConfig = {...Telefonica, platformOverrides: {platform: 'ios'}};
