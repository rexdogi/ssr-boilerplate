/**
 * Created by Paulius on 8/28/2017.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        'app': [
            'babel-polyfill',
            'react-hot-loader/patch',
            './src/index.js'
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        host: 'localhost',
        port: 3000,
        historyApiFallback: true
    },
    plugins: [

    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'src'),
        publicPath: '/static/server/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env'],
                            plugins: [
                                require('babel-plugin-transform-object-rest-spread'),
                            ]
                        }
                    },
                ]
            }
        ]
    },
};