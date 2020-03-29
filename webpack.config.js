const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';


module.exports = {
    entry: { main: './src/index.js' },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [{ // тут описываются правила
                    test: /\.js$/, // регулярное выражение, которое ищет все js файлы
                    use: { loader: "babel-loader" }, // весь JS обрабатывается пакетом babel-loader
                    exclude: /node_modules/ // исключает папку node_modules
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    loader: 'file-loader',
                    options: {
                      name: '[path][name].[ext]',
                    },
                },
                { // пример настройки плагина image-webpack-loader
                    test: /\.(png|jpg|gif|ico|svg)$/,
                    use: [
                            'file-loader?name=../images/[name].[ext]', // указали папку, куда складывать изображения
                            {
                                    loader: 'image-webpack-loader',
                                    options: {}
                            },
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                                    (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
                                    'css-loader', 
                                    'postcss-loader'
                        ]
                },
                {
                    test: /\.(eot|ttf|woff|woff2)$/,
                    loader: 'file-loader?name=./vendor/[name].[ext]'
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }),
            new MiniCssExtractPlugin({
                filename: 'index.[contenthash].css',
            }),
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                        preset: ['default'],
                },
                canPrint: true
            }),
            new HtmlWebpackPlugin({ // настроили плагин
                inject: false,
                //hash: true,
                template: 'index.html',
                filename: 'index.html'
            }),
            new WebpackMd5Hash(),
        ]
};