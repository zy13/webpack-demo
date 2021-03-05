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
