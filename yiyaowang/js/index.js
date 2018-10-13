
// =========================接受cookie=================================
    // var loginbox = document.querySelector(".loginbox");
    // var nowuser = Cookie.getCookie("user")||[];
    // if(typeof nowuser == "string"){
    //     nuser = JSON.parse(nowuser);
    //     loginbox.innerHTML = `<span>${nuser}欢迎您！</span><a href="../html/login.html" onclick = Cookie.removeCookie("user",${nuser})>退出</a>`;
    // }else{
    //     loginbox.innerHTML = `<a href="../html/login.html" class="loginbox">欢迎您！</a><a href="../html/registe.html">注册</a>`;
    // }

// ===================头部购物车=====================

    var cartgoods = document.querySelector(".cartgoods");
    var zongshu = document.querySelector(".zongshu");
    var zongjia = document.querySelector(".zongjia");
    var none_tips = document.querySelector(".none_tips");
    var minicart_list = document.querySelector("#minicart_list");
    var checkout_box = document.querySelector(".checkout_box");
    var gouwuche = document.querySelector(".gouwuche")
    var toubucart = document.querySelector(".toubucart")
    var erweima =document.querySelector(".erweima");
    var list_detail = document.querySelector(".list_detail")

    toubucart.onmouseover = function(e){
        minicart_list.style.display = "block";
    } 
    erweima.onmouseout = function(e){
        if(e.target.className.toLowerCase()=="list_detail"){
        minicart_list.style.display = "none";
        }
    } 


    var star;
    toubuche();

   function toubuche(){
        var res = "";
        var xhr_gouwu3 = new  XMLHttpRequest();
        var sum = 0;
        var total = 0;
        xhr_gouwu3.onload = function(){
            if(status.indexOf(xhr_gouwu3.status)!=-1){
               syar = JSON.parse(xhr_gouwu3.responseText); 
               if(syar!=""){
                    none_tips.style.display = "none";
                    checkout_box.style.display = "block";

                    syar.forEach(function(item,idx){
                    res += ` <li syid='${item.id}'>
                       <a traget="_blank" class="pro_img" href="//www.111.com.cn/product/50545585.html">
                       <img heigth="40" width="40" src="${item.imgurl}" ;">
                       </a>
                       <a traget="_blank" class="pro_name" href="//www.111.com.cn/product/50545585.html">${item.title}</a>
                       <span class="pro_price">￥${item.price}</span>
                       <div class="num_box">
                       <b name="editName_50545585" class="minus" onclick="minusitem(this)"></b>
                       <input type="text" class="minicart_num" value="${item.jqty}">
                       <b name="editName_50545585" class="plus" onclick="additem(this)"></b>
                       <a target="_self" style="display:none;" href="javascript:removeCart(50545585,1)">删除</a></div>
                   </li>`;
                    cartgoods.innerHTML = res;

                    sum += Number(item.jqty);
                    total += Number(item.jqty*item.price);

                    })
                    zongshu.innerHTML = sum;
                    zongjia.innerHTML = total;
                    gouwuche.innerHTML = sum;
               }else if(syar==""){
                    // none_tips.style.display = "block";
                    checkout_box.style.display = "none";
                    none_tips.style.display = "block";
                    gouwuche.innerHTML = "0";
               }
                
            }
        }
        xhr_gouwu3.open("get","../api/cart.php",true)
        xhr_gouwu3.send(null);
    }


// =========================修改数量=============================

function changeshuliang(syid,c){
    var xhr_jian = new XMLHttpRequest();
    var status = [200,404];

    xhr_jian.onload = function(){
        if(status.indexOf(xhr_jian.status)!=-1){
            var data4 = JSON.parse(xhr_jian.responseText);
            console.log(xhr_jian.responseText);

            toubuche();
           // console.log(data)
        }
    }
    // console.log("../api/cart.php?syid='"+syid+"'&jqty='"+ele.nextElementSibling.value+"'")
    xhr_jian.open("get","../api/cart.php?syid="+syid+"&jqty="+c+"",true);
    xhr_jian.send(null);
} 

function minusitem(ele){
    var cc  = ele.nextElementSibling.value;
    if(cc<=0){
        newdeleteitem(ele);
        return;
    }else{
        ele.nextElementSibling.value = cc-1;
        var curli = ele.parentElement.parentElement;
        var syid = curli.getAttribute("syid");
        changeshuliang(syid,ele.nextElementSibling.value); 
    }    
    
}

function additem(ele){
    var bb  = ele.previousElementSibling.value;
    ele.previousElementSibling.value = Number(bb)+1;
    var curli = ele.parentElement.parentElement;
    var syid = curli.getAttribute("syid");

    changeshuliang(syid,ele.previousElementSibling.value);
}
// ======================删除商品=============================
 function newdeleteitem(ele){
    var thisli = ele.parentElement.parentElement
    var nowul = ele.parentElement.parentElement.parentElement;
    nowul.removeChild(thisli)
    var syid=thisli.getAttribute("syid");

    var xhr_delete = new XMLHttpRequest();
    var status = [200,404];

    xhr_delete.onload = function(){
        if(status.indexOf(xhr_delete.status)!=-1){
            var data4 = JSON.parse(xhr_delete.responseText);
            console.log(xhr_delete.responseText);
            toubuche();
           // console.log(data)
        }
    }
    xhr_delete.open("get","../api/delete.php?syid="+syid+"",true);
    xhr_delete.send(null);
}


/*===============================头部========================================*/

    var place = document.querySelector(".place");
    var placei = place.children[0].children[1];
    var placeul = place.children[1];

    var topplace = document.querySelector(".topplace");
    var toprt = document.querySelector(".toprt");
    var toprtul = toprt.children[1];
    var toprti = toprt.children[0].children[1];


    place.onmouseover =function(e){            
        place.style.backgroundColor = "#fff";
        placeul.style.display = "block";
        placei.classList.remove('icon-jiantoukx');
        placei.classList.add('icon-jiantouks');
        placeul.onclick = function(e){
           e.preventDefault(); 
           if(e.target.tagName.toLowerCase() == "a"){
                var _a = e.target.innerHTML;
                topplace.innerHTML = _a; 
           }
        }
    }

    place.onmouseout=function(){
        placei.classList.remove('icon-jiantouks');
        placei.classList.add('icon-jiantoukx');
        place.style.backgroundColor = "#F1F1F1";
        placeul.style.display = "none";   
    }

    toprt.onmouseover = function(){
        toprt.style.backgroundColor = "#fff";
        toprt.children[0].style.borderRight="1px solid #fff";    
        toprti.classList.remove('icon-jiantoukx');
        toprti.classList.add('icon-jiantouks');
        toprtul.style.display = "block"; 
    }

    toprt.onmouseout = function(){
        toprt.style.backgroundColor = "#F1F1F1";
        toprt.children[0].style.borderRight="1px solid #ccc";        
        toprti.classList.remove('icon-jiantouks');
        toprti.classList.add('icon-jiantoukx');
        toprtul.style.display = "none"; 
    }

/*===============================秒杀========================================*/
    var miaoshagoods = document.querySelector(".miaoshagoods");
    var xhr = new XMLHttpRequest();
    var status = [200,404];
    xhr.onload = function(){
        if(status.indexOf(xhr.status)!=-1){
            var res = JSON.parse(xhr.responseText);
            for(var i=0;i<res.length;i++){
                var a = document.createElement("a");
                var img = document.createElement("img");
                img.src = res[i].imgurl;
                img.alt = res[i].title;
                a.href = res[i].lianjie+"?syid="+res[i].id;
                a.appendChild(img);
                miaoshagoods.appendChild(a);
            }
            // console.log(res);
        }
    }
    xhr.open("get","../api/index.php",true);
    xhr.send(null);

/*===============================家庭常备药========================================*/

    var nowdt = [];
    function xuanting(){
        var neirong_l = document.querySelectorAll(".neirong_l");
        var nowcolor;
        neirong_l.forEach(function(item,idx){
           nowdt.push(item.children[0]); 
        })
        nowdt.forEach(function(item,idx){
            item.onmouseover = ()=>{
                // console.log(item.style.color);
                nowcolor = window.getComputedStyle(item).color;
                // console.log(nowcolor);
                item.style.backgroundColor = ""+nowcolor;
                item.style.color = "#fff";
            }
            item.onmouseout = ()=>{
                item.style.backgroundColor ="#F8F8F8";
                item.style.color = ""+nowcolor;
                
            }
        })

    }
        
    function goodlist(leiming){
        var nowul = document.querySelector("."+leiming);
        var result ="";

        var xhr_jiating = new XMLHttpRequest();
        var status = [200,404];
        xhr_jiating.onload = function(){
            if(status.indexOf(xhr_jiating.status)!=-1){
                var res_jt = JSON.parse(xhr_jiating.responseText);
                // console.log(res_jt);
                for(var i=0;i<res_jt.length;i++){
                    result += `<li class="fl" syid="${res_jt[i].id}"><a href="${res_jt[i].href}" class="goods_tz"><img src=${res_jt[i].imgurl}><div>${res_jt[i].title}</div></a><p>￥${res_jt[i].price}</p></li>`
                }
                nowul.innerHTML = result; 
                //  ===============================点击跳转传递id===========================================
                nowul.onclick = function(e){
                    e.preventDefault();
                    if(e.target.tagName.toLowerCase()=="img"){
                        var curid = e.target.parentElement.parentElement.getAttribute("syid");
                        location.href = '../html/detail.html?syid='+curid;
                    }
                }          
            }
        }
        xhr_jiating.open("get","../api/index.php?fenlei="+leiming+"",true);
        xhr_jiating.send(null);
    }


/*==========家庭常备=========*/

    goodlist("jiating");
    xuanting();
/*==========专科用药=========*/
    goodlist("zhuanke");

/*==========保健=========*/
    goodlist("baojian");

/*==========维生素=========*/
    goodlist("weishengsu");

/*==========器械=========*/
    goodlist("qixie");

/*==========眼镜=========*/
    goodlist("yanjing");

/*==========成人用品=========*/
    goodlist("chengren");

/*==========个户=========*/
    goodlist("gehu");
    
/*==========成人用品=========*/
    goodlist("muying");





/*===============================links========================================*/
    
    var links = document.querySelector("#links");
    var linksul = links.children[0].children[0];
    var pinpai = linksul.children[0];
    var lianjie = linksul.children[1];

    var linkout_l =document.querySelector(".linkout_l");
    var linkout_r =document.querySelector(".linkout_r");

    linksul.onmouseover = function(e){
        pinpai.className="";
        lianjie.className="";
        e.target.classList.add("focus");
        if(pinpai.classList.contains("focus")){
            linkout_l.style.display = "block";
            linkout_r.style.display = "none";
        }else if(lianjie.classList.contains("focus")){
            linkout_l.style.display = "none";
            linkout_r.style.display = "block";
        }else{
            pinpai.classList.add("focus");
            linkout_l.style.display = "block";
            linkout_r.style.display = "none";
        }
    }

/*==========================右侧导航栏============================*/
    var doctornav =document.querySelector(".doctornav");
    var weixin = document.querySelector(".weixin");
    var weixinul = document.querySelector(".weixinul");
    var doctorli = doctornav.children;
    var totop = document.querySelector(".toTop");

    // console.log(doctorli)
    var span;
    var nowi;
    var nowul;

    for(let i=0;i<doctorli.length;i++){
        doctorli[i].onmouseover = function(){
            span = doctorli[i].children[0].children[1];
            nowi = doctorli[i].children[0].children[0];
            nowul = doctorli[i].children[1];
            doctorli[i].style.backgroundColor ="red";
            span.style.fontSize ="18px";
            span.style.lineHeight = "25px";
            nowi.style.fontSize = 0;
            span.style.color ="#fff";
            if(nowul){nowul.style.display = "block";}
            
        };
        doctorli[i].onmouseout = function(){
            doctorli[i].style.backgroundColor ="#fff"; 
            span.style.fontSize =0;
            nowi.style.fontSize = "30px";
            if(nowul){nowul.style.display = "none";}
        };
    }

    totop.onclick = function(e){
        e.preventDefault();
        totop.timer =setInterval(function(){
            var currentTop = window.scrollY;
            // var speed =Math.floor((0-currentTop)/10);
            var speed = -100;
            currentTop += speed;
            if(currentTop <=0){
                currentTop = 0;
                clearInterval(totop.timer);
            }
            window.scrollTo(0,currentTop);
        },60)
    }


/*==========================左侧导航栏============================*/

    var louceng = document.querySelector("#louceng");
    var loucengul = document.querySelector(".loucengul");
    var loucengli = loucengul.children;
    console.log(loucengli);

    function bianhuan(n){

        for(var i=0;i<loucengli.length;i++){
            loucengli[i].children[1].style.fontSize = 0;
            loucengli[i].children[1].className = "";     
        }
        loucengli[n].children[1].classList.add("qiehuan");
        loucengli[n].children[1].style.fontSize="12px";
    }

    window.onscroll = function(){
        if(window.scrollY>800){
            louceng.style.display="block";
        }
        if(window.scrollY>5500 || window.scrollY<800){
            louceng.style.display="none";  
        }
        if(window.scrollY>=800 && window.scrollY<1200){
            bianhuan(0);
        }else if(window.scrollY>1200&&window.scrollY<1700){
            bianhuan(1);
        }else if(window.scrollY>1700&&window.scrollY<2300){
            bianhuan(2);
        }
        else if(window.scrollY>2300&&window.scrollY<2800){
            bianhuan(3);
        }
        else if(window.scrollY>2800&&window.scrollY<3300){
            bianhuan(4);
        }
        else if(window.scrollY>3300&&window.scrollY<3800){
            bianhuan(5);
        }
        else if(window.scrollY>3800&&window.scrollY<4300){
            bianhuan(6);
        }
        else if(window.scrollY>4300&&window.scrollY<4800){
            bianhuan(7);
        }
        else if(window.scrollY>4800&&window.scrollY<5300){
            bianhuan(8);
        }
    }



    



