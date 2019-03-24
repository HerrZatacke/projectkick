const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageJson = require('../package.json');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    // hot: true,
    inline: true,
    stats: {
      colors: true,
    },
    overlay: {
      warnings: false,
      errors: true,
    },
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
              minimize: false,
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [path.join(process.cwd(), 'src')],
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
