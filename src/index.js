// 图片这些资源需要和打包后的代码放在一些，最后部署到服务器
import logo from './images/logo.jpg'
import a from './fn.js'
import './css/css.css'

console.log(a)
console.log(logo)

alert(1);

// let img = new Image()
// img.src = logo
// img.width = img.height = a
console.log(logo);
let img = new Image();
img.src = logo;
document.body.appendChild(img);

