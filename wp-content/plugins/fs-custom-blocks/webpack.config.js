var ExtractText = require('extract-text-webpack-plugin');
var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');


module.exports = {
    context: __dirname,
    devtool: debug ? 'inline-sourcemap' : null,
    mode: debug ? 'development' : 'production',
    entry: './src/index.js',
    output: {
        path: __dirname + '/blocks/dist/',
        filename: 'blocks.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
        ]
    },
};