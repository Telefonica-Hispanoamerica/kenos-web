import path from 'path';
import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin';
import noBundlePlugin from 'vite-plugin-no-bundle';

export default defineConfig({
    plugins: [
        react(),
        vanillaExtractPlugin(),
        noBundlePlugin({
            // Change .css.js files to something else so that they don't get re-processed by consumer apps using vanilla extract too
            fileNames: ({name}) => `${name.replace(/\.css$/, '.css-kenos')}.js`,
        }),
    ],
    publicDir: false,
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            formats: ['es'],
        },
        outDir: 'dist-es',
    },
    resolve: {
        alias: {
            '@utils': path.resolve(__dirname, 'src', 'utils'),
            '@hooks': path.resolve(__dirname, 'src', 'hooks'),
            '@components': path.resolve(__dirname, 'src', 'components'),
            '@layout': path.resolve(__dirname, 'src', 'layout'),
            '@patterns': path.resolve(__dirname, 'src', 'patterns'),
            '@skins': path.resolve(__dirname, 'src', 'skins'),
            '@icons': path.resolve(__dirname, 'src', 'icons'),
        },
    },
});
