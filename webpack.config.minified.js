'use strict';

const webpack = require('webpack');
const OptimizeJsPlugin = require('optimize-js-plugin');

const defaultConfig = require('./webpack.config');

const HAS_CUSTOM_ENTRY = !!process.env.ENTRY_FILE;
const ENTRY = HAS_CUSTOM_ENTRY ? process.env.ENTRY_FILE : 'index';

module.exports = Object.assign({}, defaultConfig, {
  devtool: undefined,

  output: Object.assign({}, defaultConfig.output, {
    filename: `isit${HAS_CUSTOM_ENTRY ? `-${ENTRY}` : ''}.min.js`
  }),

  plugins: defaultConfig.plugins.concat([
    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        booleans: true,
        conditionals: true,
        drop_console: true,
        drop_debugger: true,
        join_vars: true,
        screw_ie8: true,
        sequences: true,
        warnings: false
      }
    }),
    new OptimizeJsPlugin()
  ])
});
