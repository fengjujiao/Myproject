var atractshow=document.querySelector(".attract-show");
//藏区景点
// 推荐景点
var spotul=document.querySelector(".spot-ul");
var videocontenul=document.querySelector(".video-conten ul");
var videohiddenul=document.querySelector(".video-hidden");
$.ajax({
    url:"../json/scenic.json",
    success:function(rej){
        recomm(spotul,rej.position);
        //景点视频
        video(videocontenul,rej.video);
        video(videohiddenul,rej.video2);
    }
})
// 尾部栏栏一
var endul=document.querySelector(".end-ul");
var end=document.querySelector(".end-part");
//函数封装
$.ajax({
    url:"../json/style.json",
    // dataType:"jsonp",
    success:function(rej){
        option2(atractshow,rej.tab);
       // 尾部栏栏一
       footer(endul,rej.footer2);
       // 尾部栏栏二
       endpart(end,rej.endpar2);
    }
})
