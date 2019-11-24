const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = env => {
  process.env.NODE_ENV = env;
  const basePath = `${path.join(__dirname)}/.env`;
  const envPath = `${basePath}.${env}`;
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;
  const fileEnv = dotenv.config({ path: finalPath }).parsed;
  const { supportedDateLocales } = require('./src/constants/dateLocales');
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  return [
    new webpack.ContextReplacementPlugin(
      /date-fns[/\\]/,
      new RegExp(`[/\\\\](${supportedDateLocales.join('|')})[/\\\\]index.js`)
    ),
    new ManifestPlugin({
      fileName: 'assets/manifest.json',
      basePath: '/src/',
      seed: {
        name: 'Bootstrap',
        theme_color: '#FFF',
        background_color: '#ffffff',
        icons: [
          {
            src: '/assets/images/favicon.ico',
            start_url: './index.html',
            display: 'standalone',
            size: '16x16'
          }
        ]
      }
    }),
    new CleanWebpackPlugin('dist', {}),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: 'src/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash(),
    new webpack.DefinePlugin(envKeys),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'src', 'assets', 'images'),
        to: 'assets/images/'
      }
    ]),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: 'src',
      files: ['**/*.css', '**/*.scss', '**/*.sass'],
      failOnError: false,
      quiet: false
    })
  ];
};
