const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { projectConfig } = require('../package.json');

module.exports = () => ({
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  entry: {
    main: [
      path.join(process.cwd(), 'src', 'javascript', 'index.js'),
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
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'postcss-preset-env',
                    {},
                  ],
                  [
                    'postcss-pxtorem',
                    {
                      rootValue: 16,
                      unitPrecision: 3,
                      propList: ['*', '!border*'],
                      selectorBlackList: [],
                      replace: true,
                      mediaQuery: true,
                      minPixelValue: 2,
                    },
                  ],
                ],
              },
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
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.join(process.cwd(), 'src', 'scss', 'auto-imports', '**', '*.scss'),
              ],
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      automaticNameDelimiter: '/',
      cacheGroups: {
        v: {
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
    moduleIds: 'named',
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[hash:4]/[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'projectkick',
      template: './src/assets/index.html',
      filename: 'index.html',
      chunks: ['main'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new DefinePlugin({
      CONFIG: JSON.stringify(projectConfig),
    }),
  ],
});
