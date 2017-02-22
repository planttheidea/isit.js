'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  cache: true,

  devtool: '#source-map',

  entry: [
    path.resolve(__dirname, 'src', '_groups', 'index.js')
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
    filename: `check-if.js`,
    library: 'checkIf',
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
