// @ts-check
// Storybook fails when importing .tsx files from "manager.js" or "manager.tsx"
// This module replaces the required parts from ./src/skins

/**
 * @param {'Movistar' | 'Telefonica' | 'AppMiMovistar'} skin
 */
export const getColors = (skin) => {
    switch (skin) {
        case 'Movistar':
            return {
                primary: '#019DF4',
                textPrimary: '#313235',
                textPrimaryInverse: '#FFFFFF',
                textSecondary: '#86888C',
            };
        case 'Telefonica':
            return {
                primary: '#0066FF',
                textPrimary: '#031A34',
                textPrimaryInverse: '#FFFFFF',
                textSecondary: '#6E7894',
            };
        case 'AppMiMovistar':
            return {
                primary: '#5bc500',
                textPrimary: '#313235', 
                textPrimaryInverse: '#FFFFFF', 
                textSecondary: '#86888c',
            };
        default:
            throw Error('Unexpected skin: ' + skin);
    }
};
