/**
 * Created by guorong on 2017/7/6.
 */
function setRem(){
  var html=document.querySelector("html");
  var rem=window.screen.width
  html.style.fontSize=rem/16+"px";
  // console.log(rem)
}
setRem()
window.onresize=function(){
  setRem()
}
