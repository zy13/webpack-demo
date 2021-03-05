# webpack

## 配置文件webpack.config.js

### 核心配置

- entry: 打包入口文件
- output：打包输出
- loaders
  - **file-loader**：把识别出的资源模块，移动到指定的输出⽬目录，并且返回这个资源在输出目录的地址(字符串)
  - **url-loader**: 可以处理 file-loader 所有的事情，但是遇到图片格式的模块，可以选择性的把图片转成 base64 格式的字符串，并打包到 js 中，对⼩体积的图片⽐较合适，⼤图⽚不合适。  
  - **css-loader**: 分析 css 模块之间的关系，并合成⼀个 css
  - **style-loader**：把 css-loader 生成的内容，用 style 标签挂载到⻚面的 head 中

### plugins

- `html-webpack-plugin`: 解析js文件中的DOM，并在打包结束后，自动生成一个html文件，并把打包生成的js模块引入到该html中
- `clean-webpack-plugin`: 删除（清理）构建目录
- `mini-css-extract-plugin`: 提取 CSS 到一个单独的文件中（不能与style-loader同时使用，要将style-loader卸载干净，否则会报错）

### webpack with nodejs

- 通过nodejs执行webpack

### webpack-dev-server

启动服务以后，webpack 不在会把打包后的文件生成到硬盘真实目录中了，而是直接存在了内存中(同时虚拟了一个存放目录路径)，后期更新编译打包和访问速度大大提升

## 练习

```
1、使用 devServer 配置一个 webserver （端口不限）。 
2、使用 HtmlWebpackPlugin 插件构建 HTML，并在模板html页面中添加一个按钮。 
3、使用 mini-css-extract-plugin 插件提取 css 到单独的文件中。 
4、在入口文件中通过js获取页面中的按钮并绑定click事件函数，当按钮被点击的时候通过console.log("开课吧-${你的名字}")，其中${你的名字}对应你的真实姓名。
```