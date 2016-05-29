/**
 * author:zhangdonghua
 * qq:1141372981
 */

/**
 * Toggle fullScreen mode on document element.
 * Works on chrome (>= 15), firefox (>= 9), ie (>= 11), opera(>= 12.1), safari (>= 5).
 */
/**
 * keyArr: 字母，数字，符号 或者 keyCode
 * 13 = Enter,32 = 空格
 * 例如：["P",13] 当按下P键或者Enter键时切换全屏
 * elementId 元素id。
*/
 
function FullScreen(keyArr,elementId){
	var thisObj={}
	
	//判断网页是否处于全屏状态
	function isFullScreen() {
	  return document.fullscreenElement ||
			 document.mozFullScreenElement ||
			 document.webkitFullscreenElement ||
			 document.msFullscreenElement;
	}
	
	var docElem = document.documentElement;
	var doc = document;
	  
	doc.exitFullscreen =
		doc.exitFullscreen ||
		doc.msExitFullscreen ||
		doc.mozCancelFullScreen ||
		doc.webkitExitFullscreen;
		  
		if(!doc.exitFullscreen) {
			return false;
		}
	
	
	docElem.requestFullscreen =
			docElem.requestFullscreen ||
			docElem.msRequestFullscreen ||
			docElem.mozRequestFullScreen ||
			docElem.webkitRequestFullscreen.bind(docElem, Element.ALLOW_KEYBOARD_INPUT);
	
	//切换网页全屏状态
	function toggleFullScreen() {
	  isFullScreen() ? doc.exitFullscreen() : docElem.requestFullscreen();
	}

	if(doc.exitFullscreen){
		document.addEventListener("keydown",fullkeydow,false)
		
		function fullkeydow(e){
			
			var evtobj=window.event? event : e 
			var unicode=evtobj.charCode? evtobj.charCode : evtobj.keyCode
			var actualkey=String.fromCharCode(unicode)
			
			for(var i = 0; i < keyArr.length; i++){
				if(actualkey == keyArr[i] || unicode == keyArr[i]){
					toggleFullScreen();
					break;
				}
			}
		};
		
		if(elementId){
			var obj = document.getElementById(elementId)
			if(obj){
		 	 	obj.addEventListener("click",objclick,false)
			 	function objclick(){
			  		toggleFullScreen();
			  		return false;
				}
			}
			thisObj.removeClick = function(){
				obj.removeEventListener("click",objclick)
			}
		  
		
		}
		thisObj.removeAll = function(){
			document.removeEventListener("keydown",fullkeydow)
			if(thisObj.removeClick){
				thisObj.removeClick()
			}
			
			return true;
		}
		return thisObj;
		  
	}else{
		return false;
	}	  
}