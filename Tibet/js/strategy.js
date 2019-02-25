// 尾部栏栏一
var endul=document.querySelector(".end-ul");
var end=document.querySelector(".end-part");
//函数封装
$.ajax({
    url:"../json/style.json",
    // dataType:"jsonp",
    success:function(rej){
       // 尾部栏栏一
       footer(endul,rej.footer2);
       // 尾部栏栏二
       endpart(end,rej.endpar2);
    }
})
// 攻略
var All=document.querySelector(".all");
$.ajax({
    url:"../json/strtegy.json",
    // dataType:"jsonp",
    success:function(rej){
       strtegy(All,rej.all)
    }
})
// 内容点击
