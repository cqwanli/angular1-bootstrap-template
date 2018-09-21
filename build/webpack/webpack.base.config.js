var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    app: ["@babel/polyfill", './src/index.js']
  },
  output: {
    path: path.resolve(__dirname, '../../dist'),
    filename: 'angular.bundle.js'
  },
  plugins: [
    // /* 注入公共模块，不用每个页面都引用模块 */
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
        test: /\.(woff|woff2|eot|ttf)$/i,
        loader: "file-loader?name=fonts/[name]-[hash].[ext]"
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')]
            }
          },
          { loader: 'less-loader' }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      { test: /\.html$/, loader: 'html-loader?root=/&attrs=img:src img:data-src link:href' },
    ]
  }
};