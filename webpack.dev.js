const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = env =>
  merge(common(env), {
    mode: 'development',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[hash].js',
      chunkFilename: '[name].[hash].js',
      publicPath: `${process.env.PUBLIC_PATH}/`
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: 5000
    },
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'assets/images/[hash].[ext]'
              }
            }
          ]
        }
      ]
    }
  });
