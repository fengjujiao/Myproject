function $(Sel, isAll) {
    if(isAll) {
        return document.querySelectorAll(Sel);
    }else {
        return document.querySelector(Sel);
    }
}
// 图标回到首页
var logo=$(".logo");
logo.onclick=function(){
    location.href="../index.html";
}

// 回到顶部
var Topp=$(".topp")
var offset=0;
window.onscroll=function(){
    offset=this.document.documentElement.scrollTop||this.document.body.scrollTop;
    if(offset>500){
        Topp.style.display="block";
    }else{
        Topp.style.display="none";
    }
}
Topp.onclick=function(){
    var duration=1000;
    var interval=15;
    var frams=duration/interval;
    var speed=Math.ceil(offset/frams);
    var t=setInterval(function(){
        if(offset>0){
            document.documentElement.scrollTop=document.body.scrollTop=offset-speed;
        }else{
            clearInterval(t);
            document.documentElement.scrollTop=document.body.scrollTop=0;
        }
    },interval)
}
//获取非行内样式
function getStyle(el, attr) {
    // 兼容IE
    if (el.currentStyle) {
        return el.currentStyle[attr];
    } else {
        return getComputedStyle(el, null)[attr];
    }
}
//打字机效果
function effectOfTyping(element,str,interval){
    if(!element||!str){
        throw 'Error: Lack the necessary parameters of function \'effectOfTyping\'.';
    }
    element.textContent="";
    interval=interval||100;
    var cuIndex=0;
    var t=setInterval(function(){
        if(cuIndex===str.length){
            clearInterval(t);
        }else{
            element.textContent+=str.charAt(cuIndex++);
        }
    },interval)
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

function input(){
    //搜索框点击
    var Put=$(".put");
    var serCh=$(".serch");
    var boDy=$("body");
    var flag=false;
    serCh.onclick=function(){
        Put.style.opacity="1";
        Put.style.width="60%";
        Put.focus();
    }
    Put.onblur=function(){
        Put.style.opacity="0";
        Put.style.width="0";
    }
// 登陆注册
signBtn.onclick=function(){
    mask.style.display="block";
   maskLoin.classList.add("hidden");
    //打字机效果
    effectOfTyping(maskSpan,"欢迎来到天上西藏，一个梦的世界...",200);
    return;
}
btnn.onclick=function(){ 
    mask.style.display="block";
    if( maskLoin.classList.contains("hidden")){
        maskLoin.classList.remove("hidden");
       }
       regis.classList.add("shoer");
       return;
}
regi.onclick=function(){
    if( maskLoin.classList.contains("hidden")){
        maskLoin.classList.remove("hidden");
       }
       regis.classList.add("shoer");
       return;
}
resBack.onclick=function(){
    if(regis.classList.contains("shoer")){
        regis.classList.remove("shoer");
       }
       maskLoin.classList.add("hidden");
}
for(var i=0,len=canCels.length;i<len;i++){
    canCels[i].onclick=function(){
        if( maskLoin.classList.contains("hidden")){
            maskLoin.classList.remove("hidden");
           }
           if(regis.classList.contains("shoer")){
            regis.classList.remove("shoer");
           }
        mask.style.display="none";
    }
}
// 验证码
var Code=$(".code");
var change=$(".change");
Code.innerHTML=getcode(6);
Code.onclick=function(){
    Code.innerHTML=getcode(6);
}
change.onclick=function(){
    Code.innerHTML=getcode(6);
}
    var valobj={};
    var inputs=Array.from($(".form-item input",true));
inputs.forEach(function(input){
    input.oninput=function(){
        var val=this.value;
        var flag=false;
        valobj[this.id]=val;
        switch(this.id){
            case "username":{
                if(/^\w{5,10}$/.test(val)){
                    flag=true;
                }
            }break;
            case "firPassword":{
                if(/^[\w*]{6,10}$/.test(val)){
                    flag=true;
                }
            }break;
            case "secPassword":{
                if(val===valobj.firPassword){
                    flag=true;
                }
            }break;
            case "email": {
                if(/^\w+@[A-Za-z0-9]+\.(com|con)$/.test(val)){
                    flag=true;
                }
            }break;
            case "tel":{
                if(/^1\d{10}$/.test(val)){
                    flag=true;
                }
            }break;
            case "verificationCode": {
                var reg=new RegExp(Code.innerHTML,'i');
                if(reg.test(val)){
                    flag=true;
                }
            }break;
        }
        if(flag){
            this.parentElement.classList.remove("error");    
        }else{
            this.parentElement.classList.add("error");
        }
        // 注册录入
var regibtn=$(".regi-btn");
regibtn.onclick=function(){
        // 定义变量存储学生数据集合
        var stus = null;
        // 判断本地是否已经存在数据集合
        // 如果已经存在，则根据本地数据集合初始化数组
        // 如果不存在，就直接创建一个新的数组
        if(localStorage.stus) {
            // 解析JSON并赋值给status
            stus = JSON.parse(localStorage.stus);
        }else {
            stus = [];
        }
        // 异常处理
        // 判断本地是否已经存在该用户
        for(var i = 0, len = stus.length; i < len; i++) {
            if(stus[i].username === valobj.username) {
                new LHYAlertView({
                    type: "default",
                    autoClose: 1500,
                    message: "该用户已经被注册！"
                });
                return;
            }
        }
        // 录入用户
        stus.push(valobj);
        // 将js对象转换为JSON数据
        var jsonObj = JSON.stringify(stus);
        // 存储到本地
        localStorage.stus = jsonObj;
        new LHYAlertView({
            type: "default",
            autoClose: 1500,
            message: "恭喜您，注册成功！"
        });
    }
}
});

        // 登陆
        if( localStorage.stus){
           return  stus=JSON.parse(localStorage.stus);
        }else{
            return stus=null;
        }
     var inputts=Array.from($(".loin-input input",true));
     var entry=$(".mask-loin .entry");
     var signhidden=$(".sign-lo")
     var signbtn=$(".sign-btn");
     var signcancle=$(".sign-cancle");
     var arrobj={};
     var flash=false;
     var user = $("#user");
     var password = $("#firPass");
     inputts.forEach(function(inputt){
        inputt.oninput=function(){
            entry.onclick=function(){
              
                if(!user.value || !password.value){
                    alert("请输入账号或密码！");
                }
                else{
                    var val=this.value;
                    arrobj[this.id]=val;
                    for(var i=0,len=stus.length;i<len;i++){ 
                        if(arrobj.user===stus[i].username&&arrobj.firPass===stus[i].firPassword ){
                            signbtn.textContent="已登录";
                            signhidden.textContent="ID:"+arrobj.user;
                            mask.style.display="none";
                            signcancle.style.display="block";
                            new LHYAlertView({
                                type: "default",
                                autoClose: 1500,
                                message: "恭喜您，登陆成功！"
                            });
                            sessionStorage.loginUser =arrobj;
                         }  
                    }
                }
                
            }
        }
     });
    }


// 景点视频选项卡
change();
function change(){
    var videodivs=Array.from($(".video>div",true));
    var videospans=Array.from($(".mox-div span",true));
    videospans.forEach(function(videospan,index){
            videospan.dataset.index=index;
            videospan.onclick=function(){
            var index=this.dataset.index;
            for(var i=0,len=videospans.length;i<len;i++){
                if(videospans[i].classList.contains("sect")){
                    videospans[i].classList.remove("sect");
                    videodivs[i].classList.remove("show");
                }
            }
            videospans[index].classList.add("sect");
            videodivs[index].classList.add("show"); 
        }
        
    })
}
// 选项卡封装
function option(del,rel){
    var htmlStr="";
           rel.forEach(function(obj,index){
               if(index==0){
                htmlStr+=`
                <ul class="show">
                ${(function(){
                    var arrobj="";
                    obj.change.forEach(function(res){
                     arrobj+=`<li class="show-shadow">
                     <div class="shadow"></div>
                     <img src="${obj.path+res.img}" alt="">
                     <div class="down">${res.name}</div>
                     </li>`
                    })
                    return arrobj;
                })()}
                </ul>
                `
               }else{
                htmlStr+=`
                <ul>
                ${(function(){
                    var arrobj="";
                    obj.change.forEach(function(res){
                     arrobj+=`<li class="show-shadow">
                     <div class="shadow"></div>
                     <img src="${obj.path+res.img}" alt="">
                     <div class="down">${res.name}</div>
                     </li>`
                    })
                    return arrobj;
                })()}
                </ul>
                `
               }
           })
           del.innerHTML=htmlStr;
           //首页表单
    var attractlis=Array.from($(".attract-tag li",true));
    var attractuls=Array.from($(".attract-show ul",true));
    var cindex=0;
    attractlis.forEach(function(attractli,index){
    attractli.dataset.index=index;
    attractli.onclick=function(){
        var index=this.dataset.index;
        for(var i=0,len=attractlis.length;i<len;i++){
            if(attractlis[i].classList.contains("sect")){
                attractlis[i].classList.remove("sect");
                attractuls[i].classList.remove("show");
            }
        }
        attractlis[index].classList.add("sect");
        attractuls[index].classList.add("show"); 
    }
})
}
function option2(del,rel){
    var htmlStr="";
           rel.forEach(function(obj,index){
               if(index==0){
                htmlStr+=`
                <ul class="show">
                ${(function(){
                    var arrobj="";
                    obj.change.forEach(function(res){
                     arrobj+=`<li>
                     <div class="shadow"></div>
                     <img src="${obj.path1+res.img}" alt="">
                     <div class="down">${res.name}</div>
                     </li>`
                    })
                    return arrobj;
                })()}
                </ul>
                `
               }else{
                htmlStr+=`
                <ul>
                ${(function(){
                    var arrobj="";
                    obj.change.forEach(function(res){
                     arrobj+=`<li>
                     <div class="shadow"></div>
                     <img src="${obj.path1+res.img}" alt="">
                     <div class="down">${res.name}</div>
                     </li>`
                    })
                    return arrobj;
                })()}
                </ul>
                `
               }
           })
           del.innerHTML=htmlStr;
           //首页表单
    var attractlis=Array.from($(".attract-tag li",true));
    var attractuls=Array.from($(".attract-show ul",true));
    var cindex=0;
    attractlis.forEach(function(attractli,index){
    attractli.dataset.index=index;
    attractli.onclick=function(){
        var index=this.dataset.index;
        for(var i=0,len=attractlis.length;i<len;i++){
            if(attractlis[i].classList.contains("sect")){
                attractlis[i].classList.remove("sect");
                attractuls[i].classList.remove("show");
            }
        }
        attractlis[index].classList.add("sect");
        attractuls[index].classList.add("show"); 
    }
})
}
// 品味西藏封装
function loading(rel,obj){
    var htmlarr=[];
    htmlarr.push(`
                        <div class="attract-img">
                            <img src="${obj[0].title}">
                         </div>
                         <div class="intensive">
                        ${(function(){
                            if(obj){
                                var contentStr=`<ul>`;
                                obj.forEach(function(del){
                                    contentStr+=`
                                    <li>
                                   <img src="${del.img}" alt="">
                                   <div class="intensive-text">${del.span}</div>
                                   <div class="masked"></div>
                                </li>
                                    `
                                })
                                contentStr+=`</ul>`;
                                return contentStr;
                            }else{
                                return "";
                            }
                        })()}
                    </div>
    `)
    rel.innerHTML=htmlarr.join("");
}
// 视频封装
function video(del,res){
    var htmlStr="";
            res.forEach(function(obj){
                htmlStr+=`
                <li>
                        <img src="${obj.img}" alt="">
                        <img src="${obj.immg}" class="vidd-play" alt="">
                        <div class="video-text">
                            <span>${obj.span}</span>
                            <label for="">${obj.lable}</label>
                        </div>
                </li>
                `
            })
            del.innerHTML=htmlStr;
            var videohid=document.querySelector(".video-hid");
            var vidplays=Array.from(document.querySelectorAll(".video .vidd-play"));
            var videoplay=document.querySelector(".video-play video");
            var cancel=document.querySelector(".video-play .cancel");
            vidplays.forEach(function(vidplay,index){
                vidplay.onclick=function() {
                    
                    // var src = videoplay.setAttribute('src','../video/'+index+'.mp4');
                    videohid.style.display="block";
                    videoplay.play();
                }
            })
            cancel.onclick=function(){
                videohid.style.display="none";
                videoplay.pause();
            }
}
// 新闻封装
function news(del,res){
    var arr=[];
    res.forEach(function(obj){
        arr.push(`
        <div class="tibe">
        ${(function(){
            if(obj.about){
                var textContent=``;
                obj.about.forEach(function(dell){
                        textContent+=`
                    <div class="news-box">
                    <div class="up">
                        <span>${dell.span}</span>
                        <p>${dell.text}</p>
                    </div>
                    <div class="down">
                    <p>
                        ${dell.time}
                        <a href=""></a>
                    </p>
                        <p>${dell.timer}</p>
                        <div class="down-mask"></div>
                    </div>
</div>                                
                    `
                })
                return textContent;

            }else{
                return "";
            }
        })()}
        </div>
        `)

    })
    del.innerHTML=arr.join("");
    var intertype=document.querySelector(".inter-type");
    var newsbanner=document.querySelector(".news-banner");
    var idotts=Array.from(document.querySelectorAll(".inter-type .idots .idot"));
       // 底部轮播
    var curInde=0;
    var isAnimating=false
function update(){
    for(var i=0,len=idotts.length;i<len;i++){
        if(idotts[i].classList.contains("show")){
            idotts[i].classList.remove("show");
            break;
        }
    }
    idotts[curInde].classList.add("show");
}

idotts.forEach(function(idott,index){
    idott.dataset.index=index;
    idott.onclick=function(){
        var index=this.dataset.index;
        if(index===curInde||isAnimating){
            return;
        }
        var offset=-(index-curInde)*1200;
        tab(offset);
        // 更新当前显示下标
        curInde=index;
        update();
    }
    function tab(offset){
        // 当前left值
        var curLeft=parseInt(getStyle(newsbanner,"left"));
        // 目标left值
        var tarLeft=curLeft+offset;
        //帧动画
        var duration=500;
        var interval=15;
        var frams=duration/interval;
        var speed=offset/frams;
        speed=speed>0 ? Math.ceil(speed):Math.floor(speed);
        var t=setInterval(function(){
            isAnimating=true;
            //更新当前位置
            var curLeft=parseInt(getStyle(newsbanner,"left"));
            //判断
            if((offset>0&&curLeft<tarLeft)||(offset<0&&curLeft>tarLeft)){
                newsbanner.style.left=curLeft+speed+"px";
            }else{
                clearInterval(t);
                isAnimating=false;
                //修正位置
                newsbanner.style.left=tarLeft+"px";
               // 无限滚动
                if(parseInt(getStyle(newsbanner,"left"))<-2400){
                    newsbanner.style.left="0px";
                }else if(parseInt(getStyle(newsbanner,"left"))>0){
                    newsbanner.style.left=-1200*2+"px";
                }
            }
            
        },interval);
    }
})
}
// 社区封装
function community(del,res){
    var htmlStr="";
    for(var i=0,len=res.length;i<len;i++){
        if(i==1||i==3||i==5||i==7){
            htmlStr+=`<li class="msd">
        <div class="mid-line">
            <div class="point"></div>
        </div>
        <div class="place posleft">
            <p class="fs24">${res[i].position}</p>
            <p class="fs16">
            ${res[i].posi}
               <span class="f24">${res[i].num}</span>
               ${res[i].po}
            </p>
        </div>
        <div class="cards posright">
            <div class="cards-left">
                <p class="fs18">${res[i].carleft}</p>
                <p class="col666">${res[i].city}</p>
                <p class="col666">${res[i].col}</p>
                <a href="">立即约伴</a>
            </div>
            <div class="cards-right">
                <img src="${res[i].img}" alt="">
            </div>
        </div>
    </li>`
        }else{
            htmlStr+=`<li class="msd">
        <div class="mid-line">
            <div class="point"></div>
        </div>
        <div class="place">
            <p class="fs24">${res[i].position}</p>
            <p class="fs16">
            ${res[i].posi}
               <span class="f24">${res[i].num}</span>
               ${res[i].po}
            </p>
        </div>
        <div class="cards">
            <div class="cards-left">
                <p class="fs18">${res[i].carleft}</p>
                <p class="col666">${res[i].city}</p>
                <p class="col666">${res[i].col}</p>
                <a href="javascript:;">立即约伴</a>
            </div>
            <div class="cards-right">
                <img src="${res[i].img}" alt="">
            </div>
        </div>
    </li>`
        }
    }
    del.innerHTML=htmlStr;
    // 社区滚动
    var roll=document.querySelector(".roll");
    var rollis=document.querySelectorAll(".roll li");
    var srollbtn=document.querySelector(".sroll-btn");
    var length=rollis.length;
    var allhight=length*220;
    var top=roll.offsetTop;
    srollbtn.onclick=function(){
    var top=roll.offsetTop;  
        if(top>-220*(length-4)){
            roll.style.top= top-210+"px"
        }else{  
            roll.style.top=0;
        }   
    }
    // 社区详情页
    var cardsleft=document.querySelector(".cards-left a");
    cardsleft.onclick=function(){
        location.href="./html/order.html";
    }
}
// 旅游问答封装
function problem(del,res){
    var htmlStr="";
    res.forEach(function(obj){
        htmlStr+=`
        <li>
                                <div>
                                    <div class="qa-left">
                                        <img src="${obj.img}" alt="">
                                    </div>
                                    <div class="qa-right">
                                        <div class="qa-text">
                                            <span>${obj.span}</span>
                                            <span>${obj.span2}</span>
                                            <span>${obj.time}</span>
                                        </div>
                                        <div>${obj.div}</div>
                                    </div>
                                </div>
                            </li>
        `
    })
    del.innerHTML=htmlStr;
    var qabanner=document.querySelector(".qa-banner");
    var qascoll=document.querySelector(".qa-scoll");
    var qaprev=document.querySelector(".qa-prev");
    var qaidots=Array.from(document.querySelectorAll(".qa-idot .idot"));
    var qanext=document.querySelector(".qa-next");
    var curIndex=1;
     // 记录当前是否正在做切换
     var isAnimating=false;
     qaprev.onclick=function(){
         // 根据当前的动画状态，如果正在做切换，那么终止用户操作
         if(isAnimating){
             return;
         }
         if(curIndex==1){
             curIndex=4
         }else{
             curIndex--;
         }
         tab(+1200);
         update();
     }
     qanext.onclick=function(){
         if(isAnimating){
             return;
         }
         if(curIndex==4){
             curIndex=1
         }else{
             curIndex++;
         }
         tab(-1200);
         update();
     }
     var timer=null;
     qabanner.onmouseenter=stop;
     qabanner.onmouseleave=play;
     function play(){
          timer=setInterval(function(){
            qanext.onclick();
         },3000);
     }
     function stop(){
         clearInterval(timer);
     }
 
     function update(){
         for(var i=0,len=qaidots.length;i<len;i++){
             if(qaidots[i].classList.contains("selected")){
                qaidots[i].classList.remove("selected");
                 
             }
         }
         qaidots[curIndex-1].classList.add("selected");
     }
     qaidots.forEach(function(idot,index){
         idot.dataset.index=index+1;
         idot.onclick=function(){
             var index=this.dataset.index;
             if(index===curIndex||isAnimating){
                 return;
             }
             var offset=-(index-curIndex)*1200;
             tab(offset);
             // 更新当前显示下标
             curIndex=index;
             update();
         }
 
     })
     function tab(offset){
         // 当前left值
         var curLeft=parseInt(getStyle(qascoll,"left"));
         // 目标left值
         var tarLeft=curLeft+offset;
         //帧动画
         var duration=500;
         var interval=15;
         var frams=duration/interval;
         var speed=offset/frams;
         speed=speed>0 ? Math.ceil(speed):Math.floor(speed);
         var t=setInterval(function(){
             isAnimating=true;
             //更新当前位置
             var curLeft=parseInt(getStyle(qascoll,"left"));
             //判断
             if((offset>0&&curLeft<tarLeft)||(offset<0&&curLeft>tarLeft)){
                qascoll.style.left=curLeft+speed+"px";
             }else{
                 clearInterval(t);
                 isAnimating=false;
                 //修正位置
                 qascoll.style.left=tarLeft+"px";
                 // 无限滚动
                 if(parseInt(getStyle(qascoll,"left"))<-4800){
                    qascoll.style.left="-1200px";
                 }else if(parseInt(getStyle(qascoll,"left"))>-1200){
                    qascoll.style.left=-1200*4+"px";
                 }
             }
             
         },interval);
}
}
// 尾部栏封装
function footer(del,res){
    var arr=[];
    res.forEach(function(obj,index){        
        if(index==3||index==5||index==7){
            arr.push(`<li>
           ${(function(){
               if(obj.cont){
                var textstr=`<ul class="end-li">`
                obj.cont.forEach(function(mob,index){
                    if(index==0){
                        textstr+=`<li>${mob.span}</li>`
                    }else{
                        textstr+=`
                    <li>
                             <a href="">${mob.span}</a>
                         </li>
                    `
                    }
                });
               }else{
                   return "";
               }
               textstr+=`</ul></li>`;
               
               return textstr;
               
           })()}
            `)
        }
        else{
            arr.push(`
        <li>
                    <img src="${obj.img}" alt="">
        </li>
        `)
        }
        
    });
    del.innerHTML=arr.join("");
}
function endpart(del,res){
    var arrStr="";
    res.forEach(function(obj,index){
       if(index==0){
        arrStr=`<span>${obj.span}</span>`
       }else{
        arrStr+=`
        <a href="">
                    <img src="${obj.img}" alt="">
        </a>
        `
       }
    })
    del.innerHTML=arrStr;
}
// 推荐景点
function recomm(del,res){
    var htmlStr="";
        for(var i=0,len=res.length;i<len;i++){
             htmlStr+=`<li>
             <img src="${res[i].img}" alt="">
             <div class="spot-text">
                 <p>${res[i].spotp}</p>
                 <p>${res[i].spotpp}</p>
             </div>
         </li>`
        }
        del.innerHTML=htmlStr;
}
// 攻略封装
function strtegy(del,res){
    var arrStr="";
    res.forEach(function(menuitem,index){
        if(index==0||index==1){
            arrStr+=`
            <div class="nav">
            <span>目的地</span>
                <ul>
                ${(function(){
                 if(menuitem.header){
                    var htmlStr="";
                    menuitem.header.forEach(function(obj,index){            
                        if(index==0){
                            htmlStr+=`
                            <li class="show">${obj.li}</li>
                         ` 
                         }else{
                            htmlStr+=`
                            <li>${obj.li}</li>
                         ` 
                         }
                     
                    }) 
                 }else{
                     return "";
                 } 
                 return htmlStr; 
                })()}
            </ul></div>`
        }else{
            arrStr+=`
            <div class="allimg">
            ${(function(){
                if(menuitem.header){
                    var htmlStr="";
                    menuitem.header.forEach(function(obj,index){
                        htmlStr+=`
                        <div class="nothot">
                         <div class="notup">
                          <img src="${obj.img}" alt="">
                          <div class="nothid">
                            ${obj.time}
                            <span>${obj.span}</span>
                          </div>
                       </div>
                      <div class="notdown">${obj.down}</div>
                </div>
                        `
                    })
                }else{
                    return "";
                }
                return htmlStr;
            })()}
            </div>
            `
        }
    })
    del.innerHTML=arrStr;
    var navs=document.querySelectorAll(".nav span");
    navs[1].textContent="类型";
}
// 分页效果
function GET(url,success)
{
    //ajax 
    //1.创建请求对象
    var xhr=new XMLHttpRequest();
    //2.配置请求对象
    xhr.open("GET",url,true);
    //3.发送请求
    xhr.send();
    //4.监听请求
    xhr.onload=function(){
        //判断数据是否请求成功
        if(xhr.status==200){
           success(JSON.parse(xhr.response));
        }else{

        }
    }
}

function loadnews(parentnode,datas,curIndex,curSpan){
    var starIndex=(curIndex-1)*6;
    var endIndex=starIndex+5;
    if(curIndex == Math.ceil(datas.list.length / 6)) {
        endIndex  = datas.list.length - 1;
    }
        // 拼接
    var htmlStr = "";
    for(var i = starIndex; i <= endIndex; i++) {
        htmlStr+= `
        <li>
        <div class="info-img">
            <img src="${datas.path+datas.list[i].img}" alt="">
        </div>
        <div class="info-right">
            <p>${datas.list[i].text}</p>
            <div class="div-span">
                <p>${datas.list[i].text1} </p>
                <p class="thum">
                    <img src="${datas.path+datas.list[i].img2}" alt="">
                     <span> ${datas.list[i].text2}</span>
                </p>
                <p>
                        <img src="${datas.path+datas.list[i].img3}" alt="">
                         <span> ${datas.list[i].span}</span>
                </p>
                
            </div>
            <p>
                    ${datas.list[i].text3} 
            </p>
        </div>
    </li>
        `;
    }
    curSpan.textContent  = curIndex;
    parentnode.innerHTML=htmlStr;
    // 懒加载
    var infilis=Array.from(document.querySelectorAll(".info-content li"));
    console.log(infilis);
    var height=window.innerHeight;
    var offset=0;
    var locations=[];
    infilis.forEach(function(infili,index){
        locations[index]=infili.offsetTop;
    })
    window.onscroll=function(){
        offset=document.documentElement.scrollTop||document.body.scrollTop;
        locations.forEach(function(location,index){
            if(height+offset>location);
            infilis[index].classList.add("running");
        })
        if(offset>500){
            Topp.style.display="block";
        }else{
            Topp.style.display="none";
        }
    Topp.onclick=function(){
        var duration=1000;
        var interval=15;
        var frams=duration/interval;
        var speed=Math.ceil(offset/frams);
        var t=setInterval(function(){
            if(offset>0){
                document.documentElement.scrollTop=document.body.scrollTop=offset-speed;
            }else{
                clearInterval(t);
                document.documentElement.scrollTop=document.body.scrollTop=0;
            }
        },interval)
    }
    }
    }

