const path = require('path')
const config = require('./config')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin')

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './examples/play.js',
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: '[name].[hash:7].js'
    },
    devServer: {
        host: 'localhost',
        port: 3000,
        publicPath: '/',
        hot: true
    },
    resolve: {
        alias: config.alias,
        extensions: ['.js', '.vue', '.json']
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        preserveWhitespace: false
                    }
                }
            },
            {
                test: /\.(vue|jsx?)$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
            {
                test: /\.(jsx?|babel|es6)$/,
                include: process.cwd(),
                exclude: config.jsexclude,
                loader: 'babel-loader'
            },
            {
                test: /.(s?css)$/,
                loader: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new ProgressBarWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}