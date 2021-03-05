// 图片这些资源需要和打包后的代码放在一些，最后部署到服务器
import logo from './images/logo.jpg'
import a from './fn.js'
import './css/css.css'
import axios from 'axios'

let img = new Image();
img.src = logo.replace('../images', './images');
img.width = img.height = a
document.body.appendChild(img);

// let xhr = new XMLHttpRequest()
// xhr.open('get', '/api/info')

// xhr.onload = function() {
//   console.log(xhr.responseText)
// }

// xhr.send()

axios('/api/info').then(res => {
  console.log(res)
})