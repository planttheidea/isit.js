var webpack = require("webpack"),
    merge = require("lodash.merge"),
    defaultConfig = require("./webpack.config"),
    productionPlugins = [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                booleans:true,
                conditionals:true,
                drop_console:true,
                drop_debugger:true,
                join_vars:true,
                sequences:true,
                warnings:false
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
        filename:"is.min.js"
    }),

    plugins:productionPlugins
});