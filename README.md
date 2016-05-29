# 用法  
引用 FullScreen.js  
```javascript
//绑定P和Enter作为键盘控制，按钮fsbutton作为点击控制
var controlFullScreen = FullScreen(["P",13],"fullScreenbutton");

//如果controlFullScreen的值为false，说明不支持FullScreen,启用检测
if(controlFullScreen){
	console.log('支持FullScreen');
}

//销毁FullScreen的控制
document.getElementById("removecfs").addEventListener("click",function(){
	controlFullScreen.removeAll();
	console.log('FullScreen已销毁');
},false)
```
html代码块  
```html
<button id="fullScreenbutton">fullScreenbutton</button>
<button id="removecfs">remove controlFullScreen</button>
```
兼容性  
Works on chrome (>= 15), firefox (>= 9), ie (>= 11), opera(>= 12.1), safari (>= 5)
