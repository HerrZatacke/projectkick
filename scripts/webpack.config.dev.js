const path = require('path');
const webpack = require('webpack');
const pxtorem = require('postcss-pxtorem');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageJson = require('../package.json');
const setupServer = require('./setupServer');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    inline: true,
    stats: {
      colors: true,
      assets: false,
      entrypoints: false,
      modules: false,
    },
    overlay: {
      warnings: false,
      errors: true,
    },
    contentBase: path.join(process.cwd(), 'src', 'assets'),
    port: 3000,
    watchContentBase: true,
    before: setupServer,
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  entry: {
    main: [
      path.join(process.cwd(), 'src', 'javascript', 'index.js'),
      'webpack-dev-server/client?http://localhost:3000/',
    ],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        include: path.join(process.cwd(), 'src'),
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
        include: path.join(process.cwd(), 'src'),
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                pxtorem({
                  rootValue: 16,
                  unitPrecision: 3,
                  propList: ['*', '!border*'],
                  selectorBlackList: [],
                  replace: true,
                  mediaQuery: true,
                  minPixelValue: 2,
                }),
                autoprefixer(),
              ],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                sourceMap: true,
                includePaths: [path.join(process.cwd(), 'src')],
              },
            },
          },
          {
            loader: './scripts/sass-import-loader',
          },
        ],
      },
    ],
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'projectkick',
      template: './src/assets/index.html',
      filename: 'index.html',
      chunks: ['main'],
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      CONFIG: JSON.stringify(packageJson.projectConfig),
    }),
  ],
};
