import path from 'node:path';

import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const dist = path.resolve('dist');
const entry = path.resolve('src', 'index');
const src = path.resolve('src');
const publicIndexHtmlTemplate = path.resolve('public', 'index.html');

export default {
  devtool: 'source-map',
  entry,
  mode: 'development',
  optimization: {
    minimize: false,
    removeEmptyChunks: true,
  },

  output: {
    clean: true,
    path: dist,
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    plugins: [new TsconfigPathsPlugin()],
  },

  devServer: {
    hot: true,
    static: dist,
    port: 3001,
    open: true,
    liveReload: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    client: {
      overlay: false,
    },
  },

  module: {
    rules: [
      {
        exclude: /node_modules/,
        include: src,
        test: /\.[jt]sx?$/,
        use: [
          {
            // Тут используются настроки из файла babel.config.js
            loader: require.resolve('babel-loader'),
          },
        ],
      },

      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: publicIndexHtmlTemplate,
    }),
  ],
};
