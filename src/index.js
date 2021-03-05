// 图片这些资源需要和打包后的代码放在一些，最后部署到服务器
import logo from './images/logo.jpg'
import a from './fn.js'
import './css/css.css'


let img = new Image();
img.src = logo.replace('./images','../images');
document.body.appendChild(img);

