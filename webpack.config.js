const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let settings = {
    entry: {
        app: './src/index.tsx'
    },
    devServer: {
        compress: true,
        port: 9000,
        open: true,
        hot: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    },
                    {loader: "ts-loader"}
                ]
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        path: './src/static/fonts/',
                        outputPath: './fonts/',
                        limit: 10000,
                        esModule: false
                    }
                }
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {loader: 'css-loader', options: { url: false }},
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|jfif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000
                        }
                    },
                    'image-webpack-loader'
                ]
            }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx", ".ts", ".tsx"] },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
        clean: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'app.css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            inject: 'body',
            filename: 'index.html'
        })
    ]
};

module.exports = settings;
