# webpack

## 配置文件webpack.config.js

### 核心配置

- entry
- output
- loaders
  - url-loader
  - file-loader
  - style-loader
  - css-loader

### 练习

```
使用webpack构建打包一个基础项目，需要实现如下需求： 
1、 创建一个 src 目录存放项目源文件 
2、src 下创建项目入口文件 index.js 
3、src 创建一个目录 images ，images 目录下存放一张图片 logo.png 
4、src 创建一个文件 fn.js ，fn.js 中需要通过 export default 100， 导出数据 
5、src 创建一个 css 目录，css 目录下创建一个 css.css 文件，写入样式 body {background: red} 
6、index.js 中使用 import 方法分别引入 images 下的 logo.png 、fn.js、以及 css 目录下的 css.css 文件 
7、项目根目录下创建一个 webpack.config.js 配置文件 
8、 运行 webpack 打包后，在项目下自动生成 dist 目录，并生成对应的打包文件 
9、创建一个html文件并通过 script 标签引入 dist 目录下生成的 js 文件
```