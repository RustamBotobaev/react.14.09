const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        app: "./src/index.jsx",
    },
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].js",
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [{
                test: /\.js(x)?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        "plugins": ["@babel/plugin-proposal-class-properties"],
                    }
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],

    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        port: 9000,
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html"
    }), new MiniCssExtractPlugin(),],

};