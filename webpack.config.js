var path = require("path"),
    webpack = require("webpack");

module.exports = {
    cache:true,

    debug:true,

    devServer : {
        port: 3001,
        contentBase: "./dist",
        inline: true
    },

    devtool:"source-map",

    entry: {
        is:path.resolve(__dirname, "src/index.js")
    },

    eslint:{
        ecmaFeatures:{
            jsx:true,
            modules:true
        },
        emitError:true,
        emitWarning:false,
        env:{
            browser:true,
            node:true,
            es6:true
        },
        formatter:require("eslint-friendly-formatter"),
        parser:"babel-eslint"
    },

    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: "babel-loader",
                test: /\.(js)?$/
            },{
                loader: "css",
                test: /\.(css)$/
            }
        ],

        preLoaders: [
            {
                exclude: /.idea|dist|node_modules/,
                loader: "eslint-loader",
                test: /\.(js)$/
            }
        ]
    },

    output: {
        filename:"isit.js",
        library:"isit",
        libraryTarget:"umd",
        path:path.resolve(__dirname, "dist"),
        publicPath: "//localhost:3001/"
    },

    plugins: [
        new webpack.DefinePlugin({
            isProduction:false
        })
    ],

    resolve: {
        fallback : [
            path.join(__dirname, "src")
        ],

        root : __dirname
    }
};
