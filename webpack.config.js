const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js', // 入口设置，webpack会从入口文件的代码进行读取，并分析和加载依赖，最终完成打包
  output: { // 设置webpack打包后的相关的一些选项，比如打包后的文件存放目录，文件名……
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {  // 配置webpack分析和加载的资源处理的
    rules: [ // 资源的处理规则, 每一个资源（模块）的规则用一个对象来描述
      {
        test: /\.(png|jpe?g|gif)$/,  // 以图片结尾的模块资源
        use: {
          loader: 'url-loader', // // 满足 test 规则的资源所调用的 loader
          options: {
            name: '[name]_[hash].[ext]', // 占位符 [name] 源资源模块的名称 [ext]资源模块的后缀
            outputPath: './images', // 打包后的存放位置
            // publicPath: './dist/images', // 打包后文件的 url， 可以不写
            limit: 100
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: true, // 启用/禁用 url() 处理
              import: true,  // 启用/禁用 @import 处理
              sourceMap: false // 启用/禁用 Sourcemap
            }
          }
        ]
      }
    ]
  }
}