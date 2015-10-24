var webpack = require("webpack"),
    merge = require("lodash.merge"),
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

defaultConfig.plugins.forEach(function(plugin) {
    productionPlugins.unshift(plugin);
});

productionPlugins[0] = new webpack.DefinePlugin({
    isProduction:true
});

delete defaultConfig.devtool;

module.exports = merge(defaultConfig, {
    cache:false,

    debug:false,

    output:merge(defaultConfig.output, {
        filename:"isit.min.js"
    }),

    plugins:productionPlugins
});