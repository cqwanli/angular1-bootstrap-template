var webpackBase = require('./webpack.base.config');
var merge = require('webpack-merge')
var path = require('path')
module.exports = merge(webpackBase, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000
  }
})