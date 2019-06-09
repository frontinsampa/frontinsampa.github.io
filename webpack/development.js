const merge = require('webpack-merge');

const commons = require('./commons');

module.exports = merge.smart(commons, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.sass$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 8080,
    historyApiFallback: true,
    hot: true,
  },
  devtool: 'eval',
});
