// @ts-check
// Storybook fails when importing .tsx files from "manager.js" or "manager.tsx"
// This module replaces the required parts from ./src/skins

/**
 * @param {'Movistar' | 'AppMiMovistar'} skin
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
        case 'AppMiMovistar':
            return {
                primary: '#5BC500',
                textPrimary: '#313235', 
                textPrimaryInverse: '#FFFFFF', 
                textSecondary: '#86888c',
            };
        default:
            throw Error('Unexpected skin: ' + skin);
    }
};
