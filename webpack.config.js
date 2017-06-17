/**
 * @file webpack.config.js
 * Contains Webpack configuration.
 */

const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './handler.js',
  target: 'node',
  externals: [nodeExternals({
    modulesDir: '../../node_modules',
  })],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
    }],
  },
};
