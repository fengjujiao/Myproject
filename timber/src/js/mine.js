$(function(){
    $(".mine-ul li").click(function(){
        console.log(this)
    })
    //
    $(".mine-ul li").click(function(){
        $(this).addClass("act").siblings().removeClass("act");
        $(".mine-right-ul li").eq($(".mine-ul li").index(this)).addClass("open").siblings().removeClass("open")
      })
})