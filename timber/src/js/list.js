$(function(){
    goodsList=$(".goods-list")
    $.ajax({
        url:"../json/list.json",
        success:function(res){
            getshop(res,goodsList)
        }
    })
    // $(".logo").click(function(){
    //    window.open("../index.html");
    // })
})