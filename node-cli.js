const webpack = require('webpack')
const webpackConfig = require('./webpack.config')

webpack(webpackConfig, (err, stats) => { // [Stats Object](#stats-object)
  if(err || stats.hasErrors()) {
    // 处理错误
    console.log('err', '打包失败', err)
  } else {
    // 处理完成
    console.log('打包完成')
  }
})