const path = require("path");
const webpack = require("webpack");
const globImporter = require("node-sass-glob-importer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
let runHotModuleReplacement = false;
let envLocal = require("./env/env");

var rightNow = new Date();
var date = rightNow.toISOString().slice(0, 10).replace(/-/g, "");
var time = rightNow.getHours() + "g" + rightNow.getMinutes();

var dateTimeBuild = date + "." + time;

let config = {
    entry: ["./src/index.js"],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)(\?v=[a-z0-9]\.[a-z0-9]\.[a-z0-9])?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            limit: false,
                            name: "[name].[ext]",
                            outputPath: "fonts",
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: false,
                            name: "[name].[ext]",
                            outputPath: "images/",
                        },
                    },
                ],
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {},
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sassOptions: {
                                importer: globImporter(),
                            },
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
    },
    output: {
        path: __dirname + "/build",
        publicPath: "/",
        filename: "[name].[hash]." + dateTimeBuild + ".js",
        chunkFilename: "[name].[hash]." + dateTimeBuild + ".js",
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].[hash]." + dateTimeBuild + ".css",
            chunkFilename: "css/[name].[hash].chunk-[id].css",
        }),
        new HtmlWebpackPlugin({
            inject: true,
            template: "./public/index.html",
        }),
        new CopyPlugin({
            patterns: [{ from: "./public/images", to: "./images" }],
        }),
        ...(runHotModuleReplacement == true
            ? [new webpack.HotModuleReplacementPlugin()]
            : []),
    ],
};
module.exports = (options, argv) => {
    console.log("argv.mode:", argv);

    if (argv.TARGET_ENV === "local") {
        config.mode = "none";
        config.devtool = "inline-source-map";
        config.devServer = {
            contentBase: "./build",
            writeToDisk: true,
            proxy: {
                "/": "http://localhost:" + envLocal.MODE_ENV.local.portServer,
            },
            port: argv.mode.port
                ? argv.mode.port
                : envLocal && envLocal.MODE_ENV.local.port,
            hot: envLocal && envLocal.MODE_ENV.local.hot,
            host: argv.mode
                ? argv.mode.host
                : envLocal && envLocal.MODE_ENV.local.host,
            open: true,
        };
        config.output = {
            path: path.join(__dirname, "build"),
            publicPath: "/",
            filename: "[name].[hash]." + dateTimeBuild + ".js",
            chunkFilename: "[name].[hash]." + dateTimeBuild + ".js",
        };
        config.plugins.push(
            new webpack.DefinePlugin({
                "process.env": {
                    TARGET_ENV: JSON.stringify(argv.TARGET_ENV),
                },
            })
        );
        runHotModuleReplacement = true;
    } else {
        runHotModuleReplacement = false;
        config.devtool = false;
        config.optimization = {
            removeAvailableModules: false,
            removeEmptyChunks: false,
            splitChunks: false,
            minimizer: [new CssMinimizerPlugin()],
        };
        config.output = {
            path: __dirname + "/build-" + argv.TARGET_ENV,
            publicPath: "/",
            filename: "[name].[hash]." + dateTimeBuild + ".js",
            chunkFilename: "[name].[hash]." + dateTimeBuild + ".js",
        };
        config.plugins.push(
            new webpack.DefinePlugin({
                "process.env": {
                    TARGET_ENV: JSON.stringify(argv.TARGET_ENV),
                },
            })
        );
    }

    if (argv.TARGET_ENV === "domain") {
        runHotModuleReplacement = false;
        config.devtool = false;
        config.optimization = {
            removeAvailableModules: false,
            removeEmptyChunks: false,
            splitChunks: false,
            minimizer: [new CssMinimizerPlugin()],
        };
        config.output = {
            path: __dirname + "/build-" + argv.TARGET_ENV,
            publicPath: "/",
            filename: "[name].[hash]." + dateTimeBuild + ".js",
            chunkFilename: "[name].[hash]." + dateTimeBuild + ".js",
        };
        config.plugins.push(
            new webpack.DefinePlugin({
                "process.env": {
                    TARGET_ENV: JSON.stringify(argv.TARGET_ENV),
                    DOMAIN_URL: JSON.stringify(argv.TARGET_ENV),
                },
            })
        );
    }

    return config;
};
