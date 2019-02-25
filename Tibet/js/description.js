new LHYFlash({
    id: "flash1",
    effect: "scroll",
    imgs: [
        "../image/tast/tast1.jpg",
        "../image/tast/tast2.jpg",
        "../image/tast/tast3.jpg",
    ]
});
// 尾部栏栏一
var endul=document.querySelector(".end-ul");
var end=document.querySelector(".end-part");
$.ajax({
    url:"../json/style.json",
    success:function(obj){
       // 尾部栏栏一
       footer(endul,obj.footer2);
       // 尾部栏栏二
       endpart(end,obj.endpar2);
    }
});