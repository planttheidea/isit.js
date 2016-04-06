var webpack = require("webpack"),
    assign = require("object-assign"),
    defaultConfig = require("./webpack.config"),
    productionPlugins = [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                booleans:true,
                conditionals:true,
                dead_code:true,
                drop_console:true,
                drop_debugger:true,
                join_vars:true,
                screw_ie8:true,
                unused:true,
                warnings:false
            },
            mangle:{
                screw_ie8:true
            },
            sourceMap:false
        })
    ];

delete defaultConfig.devtool;

module.exports = assign(defaultConfig, {
    cache: false,

    debug: false,

    output: assign(defaultConfig.output, {
        filename:"isit.min.js"
    }),

    plugins: defaultConfig.plugins.concat(productionPlugins)
});