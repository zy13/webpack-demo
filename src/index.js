// 图片这些资源需要和打包后的代码放在一些，最后部署到服务器
import logo from './assets/images/logo.jpg'
import a from './libs/fn.js'
import './assets/css/css.css'

console.log(logo)

let img = new Image()
img.src = logo.replace('../images', './images')
img.width = img.height = a
document.body.appendChild(img); // 使用html-webpack-plugin后才能识别

