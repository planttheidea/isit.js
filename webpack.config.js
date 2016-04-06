var path = require("path"),
    webpack = require("webpack");

module.exports = {
    devtool: 'source-map',

    entry: [
        path.resolve(__dirname, "src/index.js")
    ],

    eslint:{
        configFile:"./.eslintrc",
        emitError:true,
        failOnError:true,
        failOnWarning:false,
        formatter:require("eslint-friendly-formatter")
    },

    module: {
        preLoaders: [
            {
                exclude: /.idea|dist|node_modules/,
                loader: "eslint-loader",
                test: /\.js$/
            }
        ],

        loaders: [
            {
                exclude: /node_modules/,
                loader: "babel",
                test: /\.(js|jsx)?$/
            }

        ]
    },

    output: {
        filename: "isit.js",
        library: "isit",
        libraryTarget: "umd",
        path: path.resolve(__dirname, "dist")
    },

    plugins: [
        new webpack.DefinePlugin({
            process: {
                env: {
                    NODE_ENV: JSON.stringify(process.env.NODE_ENV)
                }
            }
        })
    ],

    resolve: {
        fallback : [
            path.join(__dirname, "src")
        ],

        root : __dirname
    }
};
