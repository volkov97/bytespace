const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '3000';

loaders.push({
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract('css?sourceMap&localIdentName=[local]___[hash:base64:5]!sass?outputStyle=expanded'),
  exclude: ['node_modules'],
});

module.exports = {
  entry: {
    admin: [
      'react-hot-loader/patch',
      './src/admin/index.jsx',
      './src/admin/index.scss'
    ],
    client: [
      'react-hot-loader/patch',
      './src/client/index.jsx',
      './src/client/index.scss',
    ],
    core: [
      'react-hot-loader/patch',
      './src/core/styles/index.scss',
    ],
  },
  devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
  output: {
    publicPath: '/',
    path: path.resolve('dist'),
    filename: './[name]/index.js',
    library: '[name]',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders,
  },
  devServer: {
    contentBase: './dist/admin',
    noInfo: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: PORT,
    host: HOST
  },
  customInterpolateName(url, name, options) {
    return url.replace(/\\/g, '/');
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'core',
      chunks: ['admin', 'client']
    }),
    new ExtractTextPlugin('[name]/index.css', {
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      template: './src/admin/index.html',
      filename: './admin/index.html',
      hash: true,
      chunks: ['core', 'admin'],
    }),
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
      filename: './client/index.html',
      hash: true,
      chunks: ['core', 'client'],
    })
  ]
};
