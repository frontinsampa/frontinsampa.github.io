const merge = require('webpack-merge');

const commons = require('./commons');

module.exports = merge.smart(commons, {
  mode: 'development',
  devServer: {
    inline: true,
    contentBase: './public',
    port: 8080,
    historyApiFallback: true,
    hot: true,
  },
  devtool: 'eval',
});
