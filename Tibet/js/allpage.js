(function(){
// 分页表效果
var conten=document.querySelector(".info-content");
var prev=document.querySelector(".prev");
var next=document.querySelector(".next");
var cur=document.querySelector(".cur");
var total=document.querySelector(".total");
var curIndex=1;
var allPage=0;
GET("../json/descript.json",function success(response){

    loadnews(conten,response,1,cur);
    allPage=Math.ceil(response.list.length/6);
    total.textContent=allPage;
prev.onclick=function(){
    if(curIndex==1){
        return;
    }
    curIndex--;
    loadnews(conten,response,curIndex,cur);
}
next.onclick=function(){
    if(curIndex==allPage){
       return;
    }
    curIndex++;
    loadnews(conten,response,curIndex,cur);
}
});

// 回到顶部
var Topp=$(".topp")
var offset=0;
window.onscroll=function(){
    offset=this.document.documentElement.scrollTop||this.document.body.scrollTop;
    if(offset>600){
        Topp.style.display="block";
    }else{
        Topp.style.display="none";
    }
}
Topp.onclick=function(){
    var duration=1000;
    var interval=15;
    var frams=duration/interval;
    var speed=Math.ceil(offset/frams);
    var t=setInterval(function(){
        if(offset>0){
            document.documentElement.scrollTop=document.body.scrollTop=offset-speed;
        }else{
            clearInterval(t);
            document.documentElement.scrollTop=document.body.scrollTop=0;
        }
    },interval)
}
})()
