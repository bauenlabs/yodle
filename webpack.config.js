/**
 * @file webpack.config.js
 * Contains Webpack configuration.
 */

module.exports = {
  entry: './handler.js',
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/,
    }],
  },
};
