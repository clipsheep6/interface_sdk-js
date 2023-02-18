const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");
const packageInfo = require('./package.json')

module.exports = (env, argv) => {
    const outputPath = path.resolve(__dirname, './resources');
    const config = {
        name: 'JSDoc formatter plugin',
        target: 'node',
        mode: 'none',
        entry: './src/main.ts',
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    include: path.resolve(__dirname, 'src'),
                    exclude: /node_modules/,
                    loader: 'ts-loader',
                    options: {
                        onlyCompileBundledFiles: true
                    }
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.ts', '.json']
        },
        output: {
            filename: 'bundle.js',
            path: outputPath
        },
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin({extractComments: false})]
        },
        plugins: [
            new webpack.BannerPlugin({
                banner: `version:${packageInfo.version}`,
                raw: false,
                entryOnly: true
            })
        ]
    }
    return config;
}