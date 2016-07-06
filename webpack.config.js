const path = require('path');
const webpack = require('webpack');

module.exports = {
    cache: true,
    
    debug: true,

    devtool: '#cheap-module-eval-source-map',

    entry: [
        path.resolve(__dirname, 'src', 'index.js')
    ],

    eslint:{
        configFile: './.eslintrc',
        emitError: true,
        failOnError: true,
        failOnWarning: false,
        formatter: require('eslint-friendly-formatter')
    },

    module: {
        preLoaders: [
            {
                include: [
                  path.resolve(__dirname, 'src')
                ],
                loader: 'eslint',
                test: /\.js$/
            }
        ],

        loaders: [
            {
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: 'babel',
                test: /\.js?$/
            }

        ]
    },

    output: {
        filename: 'isit.js',
        library: 'isit',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'dist'),
        umdNamedDefine: true
    },

    plugins: [
        new webpack.EnvironmentPlugin([
            'NODE_ENV'
        ])
    ],

    resolve: {
        root : __dirname
    }
};
