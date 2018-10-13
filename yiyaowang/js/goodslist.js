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


  // ======================商品推荐==========================
    
     var tuijian_box = document.querySelector(".tuijian_box");
     var xhr_tuijian = new XMLHttpRequest();
     var status = [200,404];
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


 // ======================分类==========================
 var itemChooseBox = document.querySelector(".itemChooseBox")
 var icon_btn = document.querySelectorAll(".icon_btn");
 var list_ul = document.querySelectorAll(".list_ul");

 for(let i=0;i<17;i++){
    icon_btn[i].onclick = function(e){
        e.preventDefault();
        if(icon_btn[i].classList.contains('open')){
            list_ul[i].style.display = "none";
            icon_btn[i].className ="icon_btn";
        }else{
           for(let j=0;j<17;j++){
                icon_btn[j].className = "icon_btn"; 
                list_ul[j].style.display = "none"; 
            }
            e.target.classList.add("open");
            list_ul[i].style.display = "block"; 
        }   
    }
 }

//  ==============================右边商品============================================
  
    var sy_maingoods = document.querySelector(".sy_maingoods");
    var rank = document.querySelector(".rank");
    var datesort = document.querySelector(".datesort");
    var ranli = rank.children;
    console.log(ranli)

    var xhr = new XMLHttpRequest();
        var status =[200,304];
        xhr.onload = function(){
            if(status.indexOf(xhr.status)!=-1){
                var data = JSON.parse(xhr.responseText);
                console.log(data);
                var res = "";
                for(var i=0;i<16;i++){
                    res += `<li syid="${data[i].id}">
                            <a href="${data[i].href}"><img src="${data[i].img1}"/></a></br>
                            <span class="price">${data[i].price}</span></br>
                            <a href="${data[i].href}"><span class="list_lable_self"></span>${data[i].title}</a>
                            <span class="goldseller_name self_name">1药网自营</span></br>
                            <a href="${data[i].href}" class="view"> 查看详情</a><a href="${data[i].href}" class="consultation">咨询医生</a> 

                            
                            </li>`;
                }
                sy_maingoods.innerHTML = res;

// =======================点击排序=================================

                rank.onclick = function(e){
                    e.preventDefault();
                    console.log(ranli);
                    var curli = e.target.parentElement.parentElement;
                    for(var i=0;i<ranli.length;i++){
                        ranli[i].className = "default";
                    }
                    curli.className="normal";

                    if(e.target.innerHTML =="销量" ||e.target.innerHTML =="评论"||e.target.innerHTML =="人气" ){
                        var newdata = data.sort(compare("xiaoliang"));
                        // console.log(data);
                        sy_maingoods.innerHTML = "";
                        res ="";
                       for(var i=0;i<16;i++){
                            res += `<li syid="${newdata[i].id}">
                                <a href="${newdata[i].href}"><img src="${newdata[i].img1}"/></a></br>
                                <span class="price">${newdata[i].price}</span></br>
                                <a href="${newdata[i].href}"><span class="list_lable_self"></span>${newdata[i].title}</a>
                                <span class="goldseller_name self_name">1药网自营</span></br>
                                <a href="${newdata[i].href}" class="view"> 查看详情</a><a href="${newdata[i].href}" class="consultation">咨询医生</a> 
                            
                                
                                </li>`;
                            }
                        sy_maingoods.innerHTML = res;
                        e.target.class=""
                    }
                    else if(e.target.innerHTML =="价格"){
                        var newprice = data.sort(compare("price"));
                        sy_maingoods.innerHTML = "";
                        res ="";
                       for(var i=0;i<16;i++){
                            res += `<li syid="${newprice[i].id}">
                                <a href="${newprice[i].href}"><img src="${newprice[i].img1}"/></a></br>
                                <span class="price">${newprice[i].price}</span></br>
                                <a href="${newprice[i].href}"><span class="list_lable_self"></span>${newprice[i].title}</a>
                                <span class="goldseller_name self_name">1药网自营</span></br>
                                <a href="${newprice[i].href}" class="view"> 查看详情</a><a href="${newprice[i].href}" class="consultation">咨询医生</a> 
                                
                                </li>`;
                            }
                        sy_maingoods.innerHTML = res;  

                    }
                    else if(e.target.innerHTML =="最新"){
                        var newtime = data.sort(compare("datetime"));
                        sy_maingoods.innerHTML = "";
                        res ="";
                       for(var i=0;i<16;i++){
                            res += `<li syid="${newtime[i].id}">
                                <a href="${newtime[i].href}"><img src="${newtime[i].img1}"/></a></br>
                                <span class="price">${newtime[i].price}</span></br>
                                <a href="${newtime[i].href}"><span class="list_lable_self"></span>${newtime[i].title}</a>
                                <span class="goldseller_name self_name">1药网自营</span></br>
                                <a href="${newtime[i].href}" class="view"> 查看详情</a><a href="${newtime[i].href}" class="consultation">咨询医生</a> 
                                
                                </li>`;
                            }
                        sy_maingoods.innerHTML = res;  

                    }
                    else if(e.target.innerHTML =="综合"){
                        var newid = data.sort(compare("id"));
                        sy_maingoods.innerHTML = "";
                        res ="";
                       for(var i=0;i<16;i++){
                            res += `<li syid="${newid[i].id}">
                                <a href="${newid[i].href}"><img src="${newid[i].img1}"/></a></br>
                                <span class="price">${newid[i].price}</span></br>
                                <a href="${newid[i].href}"><span class="list_lable_self"></span>${newid[i].title}</a>
                                <span class="goldseller_name self_name">1药网自营</span></br>
                                <a href="${newid[i].href}" class="view"> 查看详情</a><a href="${newid[i].href}" class="consultation">咨询医生</a> 
                                
                                </li>`;
                            }
                        sy_maingoods.innerHTML = res;  

                    }
                }
            }
        }
        xhr.open("get","../api/goods.php",true);
        xhr.send(null);

// ======================================封装排序=========================================
 function compare(attr){
    if(attr=="datetime"){
        return function bijiao(obj1,obj2){ 
        // var d = new Date;
        var value1 = new Date(obj1[attr]);
        var value2 = new Date(obj2[attr]);
        return value1-value2;}
    }
    else{
        return function bijiao(obj1,obj2){ 
        var value1 = obj1[attr];
        var value2 = obj2[attr];
        return value1-value2;}
    }                            
 }

//  ===============================点击跳转传递id===========================================
    sy_maingoods.onclick = function(e){
        e.preventDefault();
        if(e.target.tagName.toLowerCase()=="img"){
            var curid = e.target.parentElement.parentElement.getAttribute("syid");
            location.href = '../html/detail.html?syid='+curid;
        }
    }


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
