const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

dotenv.config();

const {
  NODE_ENV,
  PATH_PUBLIC,
  SERVICE_GTM,
} = process.env;

const ENVIROMENT_PUBLIC = { SERVICE_GTM };

const environment = Object.keys(ENVIROMENT_PUBLIC).reduce((env, key) => ({
  [key]: JSON.stringify(ENVIROMENT_PUBLIC[key]),
}), {});

/**
 * Conditional configuration exception by environment to
 * extract CSS rather than local style.
 */
const extractCss = () => (NODE_ENV === 'production' ? MiniCssExtractPlugin.loader : 'style-loader');

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: './src/index.js',
  output: {
    path: path.posix.resolve(PATH_PUBLIC),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          extractCss(),
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/images/[name].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'assets/fonts/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin(environment),
    new HtmlPlugin({
      template: './src/index.html',
    }),
    new CopyPlugin([
      {
        context: './src',
        from: './assets/**/*.*',
      },
      {
        from: './src/favicon.ico',
      },
    ]),
  ],
};
