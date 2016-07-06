const path = require('path');
const webpack = require('webpack');
const defaultConfig = require('./webpack.config');

const PORT = 4444;

module.exports = Object.assign({}, defaultConfig, {
    cache: true,
 
    debug: true,

    devServer : {
        contentBase: './dist',
        host: 'localhost',
        inline: true,
        lazy: false,
        noInfo: false,
        quiet:false,
        port: PORT,
        stats: {
            colors:true,
            progress:true
        }
    },

    devtool: '#cheap-module-eval-source-map',

    entry: path.resolve(__dirname, 'views', 'index.js'),

    output: assign(defaultConfig.output, {
        publicPath: `//localhost:${PORT}/dist/`
    })
});