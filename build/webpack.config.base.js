'use strict';

var path = require('path');
var webpack = require('webpack');

var plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
  new webpack.optimize.OccurenceOrderPlugin()
];
console.log(path.join(__dirname, "../dist"));
var reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react',
};

module.exports = {
  entry: {
      app: './app/index.js',
      service: './app/service-workers.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css?$/, loaders: [
        'style',
        'css',
        'postcss'
      ]},
      { test: /\.less?$/, exclude: /node_modules/, loaders: [
        'style',
        'css',
        'postcss',
        'less'
      ]}
    ],
  },
  output: {
    path: path.join(__dirname, "../dist"),
    publicPath: '/dist',
    filename: '[name].js'
  },
  postcss: function () {
    return [autoprefixer({ browsers: ['last 3'] })];
  },
  devServer: {
     contentBase: "./dist",
     noInfo: true, //  --no-info option
     hot: true,
     inline: true
  },
  plugins: plugins,
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ["shared", "node_modules"]
  }
};
