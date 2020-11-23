const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const folder = 'dist';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, folder),
    publicPath: `/wp-content/themes/micha/${folder}/`,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[contenthash].css',
    }),
  ],
});