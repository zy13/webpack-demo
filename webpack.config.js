const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: './src/index'
  },
  output: {
    filename: 'js/[name]_[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]',
            outputPath: './images',
            publicPath: '../images',
            limit: 100
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              url: true,
              import: true,
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      dry: true
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name]_[hash].css'
    })
  ],
  devServer: {
    // open: true,
    port: 8888,
    // 开启热更新
  	hot:true,
  	// 即使 HMR 不
    proxy: {
      '/api': {
        target: 'http://localhost:9999',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}