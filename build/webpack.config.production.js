var config = require('./webpack.config.base.js');
var webpack = require('webpack');

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      screw_ie8: true,
      warnings: false
    }
  })
);
module.exports = config;
