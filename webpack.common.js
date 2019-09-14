const path = require('path');
const plugins = require('./webpack.plugins');

const sassRegex = /\.s?[ac]ss$/;
const sassModuleRegex = /index\.s?[ac]ss$/;

const getLoaders = useModules => [
  {
    loader: 'style-loader',
    options: {
      sourceMap: true
    }
  },

  {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: '[local]--[hash:base64:5]',
      },
      url: false
    }
  },

  {
    loader: 'sass-loader',
    options: {
      includePaths: [path.resolve(__dirname, 'node_modules')],
      data: `$cdnFolder: '${process.env.CDN_URL}';`
    }
  }
];

module.exports = env => ({
  plugins: plugins(env), // important to be the first config to load the .env configuration
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: getLoaders(false)
      },
      {
        test: sassModuleRegex,
        use: getLoaders(true).concat([
          {
            loader: 'sass-resources-loader',
            options: {
              resources: path.join(process.cwd(), 'src/assets/sass/utils.scss')
            }
          }
        ])
      }
    ]
  },
  resolve: {
    alias: {
      app: path.join(__dirname, 'src'),
      landing: path.join(__dirname, 'src/containers/Landing'),
      constants: path.join(__dirname, 'src/constants'),
      clients: path.join(__dirname, 'src/clients'),
      utils: path.join(__dirname, 'src/utils')
    }
  }
});
