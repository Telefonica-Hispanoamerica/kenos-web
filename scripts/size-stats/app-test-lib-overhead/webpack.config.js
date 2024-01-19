const path = require('path');

const config = {
    entry: './src/index.js',
    // entry: './src/index-baseline.js', // uncomment to generate the baseline
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        alias: {'@uxhispam/kenos': path.resolve(__dirname, '../../..')},
    },
};

module.exports = config;
