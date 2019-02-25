//获取非行内样式
function getStyle(el, attr) {
    // 兼容IE
    if (el.currentStyle) {
        return el.currentStyle[attr];
    } else {
        return getComputedStyle(el, null)[attr];
    }
}
//首页轮播图
var Wrap=$(".wrap");
var imgBox=$(".img-box");
var imgs=$(".img-box img",true);
var idots=$(".idot",true);
var prev=$(".prev");
var next=$(".next");
var kWidth= parseInt(getStyle(Wrap, "width"));
var curIndex=1;
var timer=null;
var flag=false;
imgBox.style.left="-"+kWidth+"px";
Wrap.style.height=getStyle(imgBox,"height");
// 监听窗口的变化
window.onresize=function(){
    var kWidth= parseInt(getStyle(Wrap, "width"));
    imgBox.style.left="-"+kWidth+"px";
    Wrap.style.height=getStyle(imgBox,"height");
}
// 左右切换
prev.onclick=function(){
    if(flag){
        return;
    }
    if(curIndex==1){
        curIndex=3
    }else{
        curIndex--;
    }
    // 切换图片
    tab(+kWidth);
    // 切换小圆点
    update();
}
next.onclick=function(){
    if(flag){
        return;
    }
    if(curIndex==3){
        curIndex=1
    }else{
        curIndex++;
    }
    // 切换图片
    tab(-kWidth);
    // 切换小圆点
    update();
}
// 小圆点切换
var idots=Array.from(idots);
idots.forEach(function(idot,index){
    idot.dataset.index=index+1;
    idot.onclick=function(){
        var index=parseInt(this.dataset.index);
        if(index===curIndex||flag){
            return;
        }
        var offset=-(index-curIndex)*kWidth;
        // 切换图片
        tab(offset);
        //更新下标
        curIndex=index;
        // 切换小圆点
        update();
    }
});
//更新小圆点
function update(){
    for(var i=0,len=idots.length;i<len;i++){
        if(idots[i].classList.contains("selected")){
            idots[i].classList.remove("selected");
            break;
        }
    }
    idots[curIndex-1].classList.add("selected");
}
// 自动播放
Wrap.onmouseenter=stop;
Wrap.onmouseleave=play;
function play(){
     timer=setInterval(function(){
        next.onclick();
    },3000)
}
function stop(){
    clearInterval(timer);
}

// 图片切换
function tab(offset){
    flag=true;
    var duration=600;
    var interval=15;
    var fram=duration / interval;
    var speed=Math.ceil(offset/fram);
    var curleft=parseInt(imgBox.style.left);
    var newleft=curleft+offset;
    var isScroll=false
    var t=setInterval(function(){
        curleft  = parseInt(imgBox.style.left);
            isScroll = (offset < 0 && curleft > newleft) || (offset > 0 && curleft < newleft);
            if(isScroll) {
                imgBox.style.left = curleft + speed + "px";
            }else{
                clearInterval(t);
                flag=false;
                imgBox.style.left = newleft + 'px';
                curleft=parseInt(imgBox.style.left);
                imgBox.style.left=newleft+"px";
                if(newleft < -3 * kWidth) {
                    imgBox.style.left = -kWidth + 'px';
                }else if(newleft > -kWidth) {
                    imgBox.style.left = -3*kWidth + 'px';
                }
            }
    },interval)      
}