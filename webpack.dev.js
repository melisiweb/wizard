const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    compress: false,
    historyApiFallback: true,
    port: '8085',
  },
  watch: true,
  watchOptions: {
    ignored: '/node_modules/',
  },
  resolve: {
    alias: {
      '@app': path.resolve(__dirname, 'src/'),
    },
    extensions: ['.js', '.jsx'],
  },
});