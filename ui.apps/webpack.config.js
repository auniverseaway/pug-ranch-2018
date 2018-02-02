const webpack = require('webpack');

// Project Location
const project = `${__dirname}/src/main/content/jcr_root/apps/pugranch/clientlibs`;

// Plugins
const uglifyJs = new webpack.optimize.UglifyJsPlugin({ sourceMap: true });

const config = {
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    entry: {
        publish: [
            `${project}/publish/src/js/app.js`,
        ],
    },
    output: {
        path: project,
        filename: '[name]/dist/js/app.min.js',
    },
    devtool: process.env.NODE_ENV === 'production' ? false : 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                // test: /\.js?/,
                test: /(\.jsx$|\.js$)/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                },
            },
        ],
    },
    plugins: [uglifyJs],
};

module.exports = config;
