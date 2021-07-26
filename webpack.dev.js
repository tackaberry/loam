const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

const config = {
    mode: 'development',
    entry: {
        loam: path.join(__dirname, 'src', 'index.js'),
        'loam-worker': path.join(__dirname, 'src', 'worker.js'),
    },
    output: {
        path: path.join(__dirname, 'lib'),
        filename: '[name].js',
        library: {
            name: 'loam',
            type: 'umd',
            umdNamedDefine: true,
        },
    },
    module: {
        rules: [
            {
                test: /(\.js)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        modules: [path.resolve('./node_modules'), path.resolve('./src')],
        extensions: ['.json', '.js'],
    },
    plugins: [new ESLintPlugin()],
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'demo'),
            watch: true,
        },
    },
};

module.exports = config;
