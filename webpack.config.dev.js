var path = require('path'),
    webpack = require('webpack'),
    assign = require('object-assign'),
    PORT = 4444,
    defaultConfig = require('./webpack.config');

module.exports = assign(defaultConfig, {
    cache:true,

    debug:true,

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

    entry: [
        path.resolve(__dirname, 'views/index.js')
    ],

    output: assign(defaultConfig.output, {
        publicPath: '//localhost:' + PORT + '/dist/'
    })
});