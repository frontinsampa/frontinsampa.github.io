const dotenv = require('dotenv');
const merge = require('webpack-merge');
const HtmlPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');

dotenv.config();

const commons = require('./commons');

module.exports = merge.smart(commons, {
  mode: 'production',
  plugins: [
    new MiniCssExtract(),
    new HtmlPlugin({
      template: './src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
      chunksSortMode: 'dependency',
    }),
    new TerserPlugin({
      terserOptions: {
        output: {
          comments: false,
        },
      },
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
      cacheGroups: {
        commons: {
          name: 'vendor',
          test: /node_modules/,
          chunks: 'all',
        },
      },
    },
  },
});
