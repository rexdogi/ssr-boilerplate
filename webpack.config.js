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
        hot: true,
        host: 'localhost',
        port: 3000,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),

        new webpack.NoEmitOnErrorsPlugin(),
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'src'),
        publicPath: '/static/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'react-hot-loader/webpack'
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env', 'react'],
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