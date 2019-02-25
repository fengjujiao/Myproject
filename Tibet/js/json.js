var atractshow=document.querySelector(".attract-show");
//函数封装
var roll=document.querySelector(".roll");
var newsbanner=document.querySelector('.news-banner');
var qascoll=document.querySelector(".qa-scoll");
// 尾部栏栏一
var endul=document.querySelector(".end-ul");
var end=document.querySelector(".end-part");
$.ajax({
    url:"./json/style.json",
    // dataType:"jsonp",
    success:function(rej){
       option(atractshow,rej.tab);
        // 社区封装
        community(roll,rej.community);
        // 新闻
        news(newsbanner,rej.new);
        // 旅游问答
        problem(qascoll,rej.problem);
        // 尾部栏栏一
        footer(endul,rej.footer);
        // 尾部栏栏二
        endpart(end,rej.endpar);
    }
})
