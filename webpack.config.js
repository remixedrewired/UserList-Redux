var path = require('path');
var webpack = require('webpack');

module.exports = {
    
    devtool: 'cheap-module-eval-source-map',
    entry: path.join(__dirname, 'dev', 'js', 'index.js'),
    output: {
        path: 'src',
        filename: 'js/bundle.min.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    
    devServer: {
        inline: true,
        contentBase: path.join(__dirname, "src"),
        port: 3000,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
