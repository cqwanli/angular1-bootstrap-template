var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'angular.bundle.js'
  },
  plugins: [
    /* 注入公共模块，不用每个页面都引用模块 */
    // new webpack.ProvidePlugin({
    //   angular: 'angular'
    // }),
    /* 添加html模板 */
    new HtmlWebpackPlugin({
      title: '问答中心',
      inject: true,
      template: './src/templete.html',
      filename: './index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};