//导航栏鼠标移入效果
var Dxx=$(".dxx",true);
var Dxxs=$(".dxxs",true);
var Hid=$(".hid",true);
var Spans=Array.from($(".navi>li span",true));
var handTh=$(".hand-th");
var Hands=Array.from($(".hand",true));
var regi=$(".regi");
var Lis=Array.from($(".navi>li",true));
var maskSpan=$(".mask-logo>span");
// 登陆注册
var signBtn=$(".sign-btn");
var mask=$(".mask");
var btnn=$(".btnn");
var regis=$(".regis");
var maskLoin=$(".mask-loin");
var canCels=$(".cancel",true);
var resBack=$(".res-back");
// 导航栏滑动效果
Lis.forEach(function(Li,index){
    Li.onmouseenter=function(){   
       var Left=(Lis[index].offsetLeft+20)+"px";
       var Width=Spans[index].offsetWidth+"px";
           handTh.style.left=Left;
           handTh.style.width=Width;  
    }
    Li.onmouseleave=function(){
        var Left=20+"px";
        var Width=Spans[0].offsetWidth+"px";
        handTh.style.left=Left; 
        handTh.style.width=Width;
    }
})
// 注册表单验证
input();


