'use strict';

const path = require('path');
const webpack = require('webpack');

const HAS_CUSTOM_ENTRY = !!process.env.ENTRY_FILE;
const ENTRY = HAS_CUSTOM_ENTRY ? process.env.ENTRY_FILE : 'index';

module.exports = {
  cache: true,

  devtool: '#source-map',

  entry: [
    path.resolve(__dirname, 'src', `${ENTRY}.js`)
  ],

  module: {
    rules: [
      {
        enforce: 'pre',
        include: [
          path.resolve(__dirname, 'src')
        ],
        loader: 'eslint-loader',
        options: {
          configFile: '.eslintrc',
          failOnError: true,
          failOnWarning: false,
          formatter: require('eslint-friendly-formatter')
        },
        test: /\.js$/
      }, {
        include: [
          path.resolve(__dirname, 'src')
        ],
        options: {
          babelrc: false,
          presets: [
            ['latest', {
              es2015: {
                loose: true,
                modules: false
              }
            }],
            'stage-2'
          ]
        },
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },

  output: {
    filename: `isit${HAS_CUSTOM_ENTRY ? `-${ENTRY}` : ''}.js`,
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
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ]
  }
};
