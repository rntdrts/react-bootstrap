const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = env =>
  merge(common(env), {
    mode: 'production',
    entry: {
      main: './src/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].js',
      publicPath: `${process.env.CDN_URL}/`
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/images/[contenthash].[ext]'
              }
            }
          ]
        }
      ]
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          extractComments: 'all',
          sourceMap: true
        })
      ],
      usedExports: true
    }
  });
