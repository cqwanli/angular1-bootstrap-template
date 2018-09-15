var webpackBase = require('./webpack.base.config');
var merge = require('webpack-merge')
module.exports = merge(webpackBase, {
  mode: 'development'
})