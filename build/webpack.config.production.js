var config = require('./webpack.config.base.js');
config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      screw_ie8: true,
      warnings: false
    }
  })
);
module.exports = config;
