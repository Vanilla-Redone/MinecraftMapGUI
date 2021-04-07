const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [{
        mode: 'development',
        entry: './src/index.ts',
        target: 'electron-main',
        module: {
            rules: [{
                test: /\.ts$/,
                include: /src/,
                use: [{
                    loader: 'ts-loader'
                }]
            }]
        },
        resolve: {
            extensions: ['.ts', '.js', '.json']
        },
        output: {
            filename: './application.js'
        }
    },
    {
        mode: 'development',
        entry: './src/frontend/interface/react.tsx',
        target: 'electron-renderer',
        devtool: 'source-map',
        module: {
            rules: [{
                test: /\.ts(x?)$/,
                include: /src/,
                use: [{
                    loader: 'ts-loader'
                }]
            }]
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.json']
        },
        output: {
            path: __dirname + '/dist',
            filename: 'react.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/frontend/target.html'
            })
        ]
    }
];