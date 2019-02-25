// 热销推荐
function sales(res,del){
    var htmlStr="";
    res.forEach(function(obj,index){
        htmlStr+=`
        <div>
                              <div class="hot-on">
                                  <div class="hot-red">
                                      <span>${obj.title}</span>
                                      <span>${obj.english}</span>
                                  </div>
                                  <span><a href="./pages/list.html">${obj.titlespan}</a></span>
                              </div>
                              <ul class="hot-ul">
                                 ${(function(){
                                     var hotarr="";
                                     obj.hotul.forEach(function(hot){
                                         hotarr+=`
                                         <li>
                                      <img src="${obj.path+hot.img}" alt="">
                                      <p>${hot.text}</p>
                                     <p class="red">${hot.price}<sup>${hot.sup}</sup></p>
                                  </li>
                                         `
                                     })
                                     return hotarr;
                                 })()}
                              </ul>  
                            </div>
        `
    });
    del.html(htmlStr);
}
// 热销商品
function sellers(res,del){
    var htmlStr="";
    res.forEach(function(obj,index){
        if(index==0){
            htmlStr+=`
            <ul class="show">
           ${(function(){
               var arr=""
               obj.sell.forEach(function(hot){
                   arr+=`
                   <li>
                   <img src="${obj.path+hot.img}" alt="" class="small-home">
                   <p class="solid">${hot.text}</p>
                   <p class="red">${hot.price}<sup>${hot.sup}</sup>
                 </p>
           </li>
                   `
               })
               return arr;
           })()}
        </ul>
    `
        }else{
            htmlStr+=`
            <ul>
           ${(function(){
               var arr=""
               obj.sell.forEach(function(hot){
                   arr+=`
                   <li>
                   <img src="${obj.path+hot.img}" alt="" class="small-home">
                   <p class="solid">${hot.text}</p>
                   <p class="red">${hot.price}<sup>${hot.sup}</sup>
                 </p>
           </li>
                   `
               });
               return arr;
           })()}
        </ul>
    `
        }
    })
    del.html(htmlStr);
}
// 品牌/合作专区
function brand(res,del){
    var strHtml="";
    res.forEach(function(obj){
        strHtml+=`
        <div claa="brand shop">
        <div class="hot-on">
                            <div class="hot-red gray">
                                <span>${obj.text}</span>
                                <span>${obj.span}</span>
                            </div>
                            <span>${obj.more}</span>
        </div>
        <ul class="brand-ul">
        ${(function(){
            var arr=""
            obj.brandul.forEach(function(obb){
                arr+=`
                <li>
                <img src="${obj.path+obb.img}" alt="">
                </li>
                `
            })
            return arr;
        })()}
        </ul>
        </div>
        `
    })
    del.html(strHtml);
}
// 新手上路
function newPerson(res,del){
    var strHtml=" <ul class='new-ul'>";
    res.forEach(function(obj){
        strHtml+=`
        <li>
                <img src="${obj.img}" alt="">
                <h1><a href="${obj.a1}">${obj.text}</a></h1>
                <p><a href="${obj.a1}">${obj.p1}</a></p>
                <p><a href="">${obj.p2}</a></p>
                <p><a href="">${obj.p3}</a></p>
        </li>
        `
    })
    strHtml+="</ul>"
    strHtml+=`
    <div class="new-right">
    <div class="new-on">
        <button>在线服务</button>
    </div>
    <div class="code">
        <div>
            <img src="./images/2_22.png" alt="">
            <p>微信服务号</p>
        </div>
        <div>
                <img src="./images/2_22.png" alt="">
                <p>微信公众号</p>
            </div>
    </div>
</div>
    `
    del.html(strHtml);
}
// 新手上路
function newPertwo(res,del){
    var strHtml=" <ul class='new-ul'>";
    res.forEach(function(obj){
        strHtml+=`
        <li>
                <img src="${obj.img}" alt="">
                <h1><a href="${obj.a2}">${obj.text}</a></h1>
                <p><a href="${obj.a2}">${obj.p1}</a></p>
                <p><a href="">${obj.p2}</a></p>
                <p><a href="">${obj.p3}</a></p>
        </li>
        `
    })
    strHtml+="</ul>"
    strHtml+=`
    <div class="new-right">
    <div class="new-on">
        <button>在线服务</button>
    </div>
    <div class="code">
        <div>
            <img src="../images/2_22.png" alt="">
            <p>微信服务号</p>
        </div>
        <div>
                <img src="../images/2_22.png" alt="">
                <p>微信公众号</p>
            </div>
    </div>
</div>
    `
    del.html(strHtml);
}
// 底部
function foot(res,del){
    var strHtml=` <div class="footer-img">
    <div class="footer-text">`;
    res.forEach(function(obj,index){
        if(index==0){
            strHtml+=`<p>`
            obj.span.forEach(function(obb){
                strHtml+=`
               <span><a href="">${obb.text}</a></span>
                `
            })
            strHtml+=`</p>`
        }else{
            strHtml+=`
            <p>${obj.text}</p>
            `
        }
    })
    strHtml+=`
    </div>
    </div>
    `
    del.html(strHtml);
}
// 获取验证码
function getcode(length) {
    var str="";
    str+='QWERTYUIOPASDFGHJKLZXCVBNM';
    str+="qwertyuiopasdfghjklzxcvbnm";
    str+="1234567890";
    var res="";
    for(var i=0;i<length;i++){
        index=Math.floor(Math.random()*str.length);
        res+=str.slice(index,index+1);
    }
    return res;
}
// 商品列表
function getshop(res,del){
    var strHtml="";
    res.forEach(function(obj,index){
        strHtml+=`
        <li class="goods-cla">
        <img src="${obj.img}" alt="">
        <div class="flex line-top">
                <span>${obj.span}</span>
                <span class=" more-red">￥${obj.price}<sup>2</sup></span>
        </div>
        <div class="small-size">
        ${obj.name}
        </div>
        <div class="small-size">
        ${obj.num}
        </div>
        <div class="small-size flex">
                <span>${obj.number}</span>
                <span class="">${obj.cla}</span>
        </div>
        <div class="small-size flex">
                <span class="add-collection">加入收藏夹</span>
                <span class="add-shop">加入购物车</span>
        </div>
</li>
        `
    })
    del.html(strHtml);
}