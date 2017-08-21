const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts.bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    port: 9000,
    stats: 'errors-only',
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ES6 Module Boilerplate',
      hash: true,
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
