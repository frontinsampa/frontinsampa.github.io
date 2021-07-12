const merge = require('webpack-merge');

const commons = require('./commons');

module.exports = merge.smart(commons, {
  mode: 'development',
  module: {
    rules: [
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
  devtool: 'source-map',
});
