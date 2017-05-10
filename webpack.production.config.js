const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

loaders.push({
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract('css?sourceMap&localIdentName=[local]___[hash:base64:5]!sass?outputStyle=expanded'),
  exclude: ['node_modules']
});

module.exports = {
  entry: {
    // admin: [
    //   'react-hot-loader/patch',
    //   './src/admin/index.jsx',
    //   './src/admin/index.scss',
    // ],
    client: [
      'react-hot-loader/patch',
      './src/client/index.jsx',
      './src/client/index.scss',
    ],
    core: [
      'react-hot-loader/patch',
      './src/core/styles/index.scss',
    ]
  },
  output: {
    publicPath: '/',
    path: path.resolve('dist'),
    filename: './[name]/index.js',
    library: '[name]',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },
  module: {
    loaders,
  },
  customInterpolateName(url, name, options) {
    return url.replace(/\\/g, '/');
  },
  plugins: [
    new WebpackCleanupPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        drop_console: true,
        drop_debugger: true,
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'core',
      // chunks: ['admin', 'client'],
      chunks: ['client'],
    }),
    new ExtractTextPlugin("[name]/index.css", {
      allChunks: true,
    }),
    // new HtmlWebpackPlugin({
    //   template: './src/admin/index.html',
    //   filename: './admin/index.html',
    //   hash: true,
    //   chunks: ['core', 'admin'],
    // }),
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
      filename: './client/index.html',
      hash: true,
      chunks: ['core', 'client'],
    }),
  ],
};
