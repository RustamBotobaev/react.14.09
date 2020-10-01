const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: './src/index.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/',
  },
  devtool: 'cheap-inline-module-source-map',

  resolve: {
    modules: [`${__dirname}/static_src`, 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/,
        use: [MiniCssExtractPlugin.loader, 'style-loader!css-loader'],
      },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     // Creates `style` nodes from JS strings
      //     'style-loader',
      //     // Translates CSS into CommonJS
      //     'css-loader',
      //     // Compiles Sass to CSS
      //     'sass-loader',
      //   ],
      // },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 9000,
    hot: true,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }), new MiniCssExtractPlugin()],
};
