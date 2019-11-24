const merge = require('webpack-merge');
const prod = require('./webpack.prod.js');

const deployConfig = env => {
  return [/*plugins for deploy*/];
};

module.exports = env =>
  merge(prod(env), {
    plugins: [...deployConfig(env)] // important to be the first config to load the .env configuration
  });
