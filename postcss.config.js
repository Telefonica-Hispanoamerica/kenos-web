// vite automatically applies postcss to css files, like the generated kenos.css file from vanilla extract.
module.exports = {
    plugins: [require('autoprefixer'), require('./postcss/box-sizing-border-box')],
};
