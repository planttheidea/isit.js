var webpack = require("webpack"),
    path = require("path"),
    glob = require("glob");

glob("src/not.*.js", function(er, files) {
    files.forEach(function(file) {
        var compiler = webpack({
            entry: {
                is:path.resolve(__dirname, file)
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
                ]
            },

            output: {
                filename:file.replace("src/", ""),
                path:path.resolve(__dirname, "lib")
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
        });

        compiler.run(function(err, stats) {
            if (err) {
                return handleFatalError(err);
            }

            var jsonStats = stats.toJson();

            if (jsonStats.errors.length !== 0) {
                console.log(jsonStats.errors);
            }

            if (jsonStats.warnings.length !== 0) {
                console.log(jsonStats.warnings);
            }
        });
    });
});