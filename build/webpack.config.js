'use strict';
module.exports = require('./webpack.config.dev.js');

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./webpack.config.prod.js');
}
