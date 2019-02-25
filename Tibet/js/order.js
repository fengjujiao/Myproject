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
})
// 订单
var contimgs=Array.from(document.querySelectorAll(".cont-img img"));
var contlis=Array.from(document.querySelectorAll(".cont-small li"));
var detaimgb=document.querySelector(".detaimgb>span");
contlis.forEach(function(contli,index){
    contli.dataset.index=index;
    contli.onclick=function(){
        index=this.dataset.index;
        for(var i=0,len=contlis.length;i<len;i++){
            if(contlis[i].classList.contains("click")){
                contlis[i].classList.remove("click");
                contimgs[i].classList.remove("show");
            }
        }
        contlis[index].classList.add("click");
        contimgs[index].classList.add("show");
        detaimgb.textContent=++index;
    }
})
// 数量
var price=document.querySelector(".price em>span");
var minus=document.querySelector(".minus");
var num=document.querySelector(".num");
var plus=document.querySelector(".plus");
var curIndex=1;
minus.onclick=function(){
    if(curIndex==0){
        return;
    }
    curIndex--;
    num.textContent=curIndex;
    price.textContent=680*curIndex;
    
    
}
plus.onclick=function(){
    curIndex++;
    num.textContent=curIndex;
    price.textContent=680*curIndex;
   
}
// 购物遮罩
var button=document.querySelector(".bton");
var purchase=document.querySelector(".purchase");
var cancle=document.querySelector(".purchase .cancle");
button.onclick=function(){
    purchase.style.display="block";
}
cancle.onclick=function(){
    purchase.style.display="none";
}