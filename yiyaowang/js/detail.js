
// ==============================根据传进来的id，连接后端===================================

    var cur = decodeURI(location.search).slice(1);
    var syid =cur.split("=")[1];
    var goodstitle = document.querySelector(".goodstitle");
    var zhutuimg = document.querySelectorAll(".zhutuimg");
    var good_price  = document.querySelector(".good_price");
    var goodsguige = document.querySelector(".goodsguige");
    var hanliang = document.querySelector(".hanliang");
    var navtitle = document.querySelector(".navtitle");
    var fdjimg = document.querySelector(".fdjimg")
    var zoomWrapperImage =  document.querySelector(".zoomWrapperImage")

    var xhr_jieshou = new XMLHttpRequest();
    var status = [200,304];
    var goodsarr;

    xhr_jieshou.onload = function(){
        if(status.indexOf(xhr_jieshou.status)!=-1){
            console.log(xhr_jieshou.responseText);
            var data1 = JSON.parse(xhr_jieshou.responseText);
            goodsarr = data1;
            // console.log(data1);

            // 渲染页面
            productImg.src=data1[0].img1;
            navtitle.innerHTML = data1[0].title;
            goodstitle.innerHTML = data1[0].title;
            good_price.innerHTML =  data1[0].price;
            goodsguige.innerHTML = data1[0].guige+`<span title="9粒*3板" class="ptext ">${data1[0].guige}</span><span class="iconSelect"></span>`;
            hanliang.innerHTML = data1[0].zhongliang+`<span title="9粒*3板" class="ptext ">${data1[0].zhongliang}</span><span class="iconSelect"></span>`;

                fdjimg.src = data1[0].img1;
                zoomWrapperImage.src = data1[0].img1;
                zoomThumbActive.href=data1[0].img1;
                productImgA.href = data1[0].img1;
                zhutuimg[0].src = data1[0].img1;
                zhutuimg[1].src = data1[0].img2;
                zhutuimg[2].src = data1[0].img3;
                zhutuimg[3].src = data1[0].img4;
                zhutuimg[4].src = data1[0].img5;

        }
    }
    xhr_jieshou.open("get","../api/detail2.php?syid="+syid,true);
    xhr_jieshou.send(null);



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


// =======================导航===========================


var nav_t = document.querySelector(".nav_t");
var nav2 = document.querySelector(".nav2");
nav_t.onmouseover = function(){
    nav2.style.display = "block";
}
nav_t.onmouseout = function(){
    nav2.style.display = "none";
}


// =======================数量变动==========================

var product_amount = document.querySelector("#product_amount")
function updatedProducts(num){
    var _product_amount = product_amount.value;
    if(num<0 &&_product_amount<=0){
        return;
    }
    product_amount.value =  Number(_product_amount)+num;
    addcart();
}


// =======================大图==========================

        var thumblist = document.querySelector("#thumblist");
        var nowli = thumblist.children;
        var productImgA = document.querySelector("#productImgA");
        var productImg = document.querySelector("#productImg");
        var fdjimg = document.querySelector(".fdjimg");

        var zoomPup = document.querySelector(".zoomPup");
        var zoomWindow = document.querySelector(".zoomWindow");
        var zoomThumbActive = document.querySelector(".zoomThumbActive");


        thumblist.onclick = function(e){
            e.preventDefault();
            for(var i=0;i<nowli.length;i++){
                nowli[i].children[0].className ="className";         
            }
            e.target.parentElement.className="zoomThumbActive";
            console.log(e.target.getAttribute("src"))
            e.target.parentElement.href=e.target.getAttribute("src");
            productImgA.href = e.target.getAttribute("src");
            productImg.src = e.target.getAttribute("src");
            fdjimg.src= e.target.getAttribute("src");
        }

// =======================放大镜==========================
 
    productImg.onmouseover = function(e){
        // zoomPup.style.display = "block";
        zoomWindow.style.display = "block";
        var ox = e.clientX - productImg.offsetLeft; 
        var oy = e.clientY - productImg.offsetTop;

        fdjimg.style.left = e.clientX - ox+"px";
        fdjimg.style.top = e.clientX - oy+"px" ;
        document.onmousemove = function(e){
            fdjimg.style.left =-(e.clientX - ox )*2+ 'px';
            fdjimg.style.top =-(e.clientY - oy)*2 + 'px';
            // zoomPup.style.left =e.clientX - zoomPup.offsetWidth + 'px';
            // zoomPup.style.top = e.clientY - oy + zoomPup.offsetHeight/2 + 'px';
            zoomWindow.style.top

            e.preventDefault();
        }
    }

    productImg.onmouseout = function(e){
        zoomWindow.style.display = "none";
        zoomPup.style.display = "none";
    }

    // ======================商品推荐==========================
    
     var tuijian_box = document.querySelector(".tuijian_box");
     var xhr_tuijian = new XMLHttpRequest();
     var status = [200,304];
     var res = "";
     xhr_tuijian.onload = function(){
        if(status.indexOf(xhr_tuijian.status)!=-1){
            var result = JSON.parse(xhr_tuijian.responseText);
            var ul = document.createElement("ul");
            for(var i=0;i<5;i++){
                res +=`<li><a href="../html/detail.html"><img src="${result[i].imgurl}" /><p>${result[i].title}</p></a><span>￥${result[i].price}</span></li>`
            }
            ul.innerHTML = res;
            tuijian_box.appendChild(ul);
            
        }
     }
     xhr_tuijian.open("get","../api/detail.php",true);
     xhr_tuijian.send(null);
    

// ===========================评价================================

var itemComments = document.querySelector("#itemComments");
var detail_tab = document.querySelectorAll(".detail_tab");
var navList = document.querySelector(".navList");
var navListli = navList.children;
var itemneirong = document.querySelector("#itemneirong");
var itemquestion = document.querySelector("#itemquestion");
var introduce = document.querySelector(".introduce");
var detail_tab2 = document.querySelector(".detail_tab2");

// console.log(detail_tab);
itemComments.onclick = function(e){
    for(var i=0;i<navListli.length;i++){
        navListli[i].className="";
    }
    e.target.parentElement.className = "on";
    detail_tab[0].style.display = "none";
    detail_tab[3].style.display = "none";
    detail_tab[1].style.display = "block";
}

itemneirong.onclick = function(e){
    for(var i=0;i<navListli.length;i++){
        navListli[i].className="";
    }
    e.target.parentElement.className = "on";
    detail_tab[0].style.display = "block";
    detail_tab[1].style.display = "block";
    detail_tab[3].style.display = "none";
}

itemquestion.onclick = function(e){
    for(var i=0;i<navListli.length;i++){
        navListli[i].className="";
    }
    e.target.parentElement.className = "on";
    detail_tab[0].style.display = "none"; 
    detail_tab[3].style.display = "none";
    detail_tab[1].style.display = "block";
}

introduce.onclick = function(e){
    for(var i=0;i<navListli.length;i++){
        navListli[i].className="";
    }
    e.target.parentElement.className = "on";
    detail_tab[0].style.display = "none";
    detail_tab[1].style.display = "none";
    detail_tab[3].style.display = "block";

}

// ==================接收原本购物车的数量===================
jieshou();

var jgoods;

function jieshou(){
    var xhr_jcart = new XMLHttpRequest();
    var status = [200,304];
    xhr_jcart.onload = function(){
        if(status.indexOf(xhr_jcart.status)!=-1){
            if(xhr_jcart.responseText == 0){
                jgoods = 0;
            }else{
                console.log(xhr_jcart.responseText);
                var data3 = JSON.parse(xhr_jcart.responseText);
                jgoods= data3[0].jqty;
                console.log(data3[0].jqty);
            }
            
        }
    }
    xhr_jcart.open("get","../api/cart.php?syid="+syid,true);
    xhr_jcart.send(null);
}
   

// ===================点击加入购物车==================
var spopimg = document.querySelector(".spopimg");
var goodsnum = document.querySelector(".goodsnum");
var goodstotal = document.querySelector(".goodstotal");
var liang = document.querySelector(".liang");
var addCartInfo = document.querySelector("#addCartInfo");


function addcart(){
    var seriesCartButton2 = document.querySelector("#seriesCartButton2");
     var seriesCartButton = document.querySelector("#seriesCartButton");
    // var product_amount = document.querySelector("#product_amount");
    var _product_amount = product_amount.value;

    seriesCartButton.onclick = function(){

        
        jieshou();
        var xhr_insert = new XMLHttpRequest();
        var status = [200,304];

        xhr_insert.onload = function(){
            if(status.indexOf(xhr_insert.status)!=-1){
            console.log(xhr_insert.responseText);
            var data2 = JSON.parse(xhr_insert.responseText);
            // console.log(data2);
            }
        }
        var sum = goodsarr[0].price * _product_amount;
        // console.log(sum)

        // xhr_insert.open("get","../api/insert.php?syid="+goodsarr[0].id+"&title="+goodsarr[0].title+"&imgurl="+goodsarr[0].imgurl+"&price="+goodsarr[0].price+"&guige="+goodsarr[0].guige+"&zhongliang="+goodsarr[0].zhongliang+"&qty="+_product_amount+"&total="+sum+"",true);
        // 
        xhr_insert.open("get","../api/insert.php?syid="+goodsarr[0].id+"&title="+goodsarr[0].title+"&imgurl="+goodsarr[0].imgurl+"&price="+goodsarr[0].price+"&guige="+goodsarr[0].guige+"&jqty="+jgoods+"&qty="+_product_amount+"&zhongliang="+goodsarr[0].zhongliang+"",true);

        xhr_insert.send(null);


        addCartInfo.style.display = "block";
        liang.innerHTML = _product_amount;
        goodsnum.innerHTML = _product_amount;
        goodstotal.innerHTML = _product_amount*goodsarr[0].price;
        spopimg.children[0].src = goodsarr[0].imgurl;
    }
    seriesCartButton2.onclick = function(){

        
        jieshou();
        var xhr_insert = new XMLHttpRequest();
        var status = [200,304];

        xhr_insert.onload = function(){
            if(status.indexOf(xhr_insert.status)!=-1){
            console.log(xhr_insert.responseText);
            var data2 = JSON.parse(xhr_insert.responseText);
            // console.log(data2);
            }
        }
        var sum = goodsarr[0].price * _product_amount;
        // console.log(sum)

        // xhr_insert.open("get","../api/insert.php?syid="+goodsarr[0].id+"&title="+goodsarr[0].title+"&imgurl="+goodsarr[0].imgurl+"&price="+goodsarr[0].price+"&guige="+goodsarr[0].guige+"&zhongliang="+goodsarr[0].zhongliang+"&qty="+_product_amount+"&total="+sum+"",true);
        // 
        xhr_insert.open("get","../api/insert.php?syid="+goodsarr[0].id+"&title="+goodsarr[0].title+"&imgurl="+goodsarr[0].imgurl+"&price="+goodsarr[0].price+"&guige="+goodsarr[0].guige+"&jqty="+jgoods+"&qty="+_product_amount+"&zhongliang="+goodsarr[0].zhongliang+"",true);

        xhr_insert.send(null);


        addCartInfo.style.display = "block";
        liang.innerHTML = _product_amount;
        goodsnum.innerHTML = _product_amount;
        goodstotal.innerHTML = _product_amount*goodsarr[0].price;
        spopimg.children[0].src = goodsarr[0].imgurl;
    }
}

addcart();

   


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
    var status = [200,304];

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
    var status = [200,304];

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


// ============================吸顶===============================

 var detialMenu = document.querySelector("#detialMenu");

 window.onscroll = function(){
    if(window.scrollY>=850){
        detialMenu.style.position = "fixed";
        detialMenu.style.top = 0;
        detialMenu.style.right = "180px";
    }
    if(window.scrollY<850){
        detialMenu.style.position = "relative";
        detialMenu.style.top = "";
        detialMenu.style.right = "";
    }
 }