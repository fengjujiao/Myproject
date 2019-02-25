$(function() {
    // 处理侧边栏
    let offset=0;
    $(window).on("scroll",function() {
        offset=this.document.documentElement.scrollTop||this.document.body.scrollTop;
        if(offset>0){
            $(".sidebar").show();
        }else{
            $(".sidebar").hide();
        }
    })
    // 点击返回顶部
    $(".top").on("click",function(){
        let speed=300;
        $("html").animate({scrollTop:0},speed)
    });
//     $(".logo").on("click",function(){
//      location.href="../index.html";
//    })
    let footer=$("footer");
    var newer=$(".new");
    $.ajax({
        url:"../json/main.json",
        success:function(res){
            newPertwo(res.new2,newer);
            foot(res.footer,footer)
        }
    })
})
