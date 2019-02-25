new LHYFlash({
    id: "flash1",
    effect: "scroll",
    imgs: [
        "../image/tast/tast1.jpg",
        "../image/tast/tast2.jpg",
        "../image/tast/tast3.jpg",
    ]
});
// 图说·精读西藏
var back=document.querySelector(".back");
var backimg=document.querySelector(".backimg");
$.ajax({
    url:"../json/tast.json",
    success:function(rel){
        loading(back,rel.intensive);
        var intensive=document.querySelector(".intensive");
        loading(backimg,rel.intensive1);
    }
});
// 回眸西藏
var videocontenul=document.querySelector(".video-conten ul");
    var videohiddenul=document.querySelector(".video-hidden");
    $.ajax({
        url:"../json/scenic.json",
        success:function(rej){
            video(videocontenul,rej.video3);
        }
    });
// 新闻
var newsbanner=document.querySelector('.news-banner');
// 尾部栏栏一
var endul=document.querySelector(".end-ul");
var end=document.querySelector(".end-part");
$.ajax({
    url:"../json/style.json",
    success:function(obj){
       news(newsbanner,obj.new);
       // 尾部栏栏一
       footer(endul,obj.footer2);
       // 尾部栏栏二
       endpart(end,obj.endpar2);
    }
})
