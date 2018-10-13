// =====================地区选择========================

var headerAllProvince = document.querySelector("#headerAllProvince");
var usersProvince= document.querySelector("#usersProvince");


usersProvince.onmouseover = function(){
   headerAllProvince.style.display = "block"; 
}

headerAllProvince.onclick =function(e){
    if(e.target.tagName.toLowerCase()=="a"){
        usersProvince.children[0].innerHTML = e.target.innerHTML;
        headerAllProvince.style.display = "none";
    }
} 

// ===========================单选=================================
    function checkItemStatus(ele){
        ele.style.checked = !ele.style.checked;
        if(!ele.style.checked){
            ele.nextElementSibling.style.background = "url(//s.maiyaole.com/images/cart/icon_cart.png) no-repeat left -87px";
        }else{
            ele.nextElementSibling.style.background = "url(//s.maiyaole.com/images/cart/icon_cart.png) no-repeat left -62px";
        }
    }
// =========================全选===========================
 
    function checkVenderAll(ele){
        var checkallbox = document.querySelector(".checkallbox");
        var cart_checkbox= document.querySelectorAll(".cart-checkbox-selected");
        // console.log(cart_checkbox);
        if(!ele.style.checked){
            ele.nextElementSibling.style.background = "url(//s.maiyaole.com/images/cart/icon_cart.png) no-repeat left -87px";
            for(var i=0;i<cart_checkbox.length;i++){
                cart_checkbox[i].children[0].checked = ele.style.checked;
                cart_checkbox[i].children[1].style.background = "url(//s.maiyaole.com/images/cart/icon_cart.png) no-repeat left -87px";
                // console.log(cart_checkbox[i].children[0].checked)
            }
        }else{
            ele.nextElementSibling.style.background = "url(//s.maiyaole.com/images/cart/icon_cart.png) no-repeat left -62px";
            for(var i=0;i<cart_checkbox.length;i++){
                cart_checkbox[i].children[0].checked = ele.style.checked;
                cart_checkbox[i].children[1].style.background = "url(//s.maiyaole.com/images/cart/icon_cart.png) no-repeat left -62px";
                // console.log(cart_checkbox[i].children[0].checked)
            }
        }
        ele.style.checked = !ele.style.checked;
    }

function checkAll(ele){
    checkVenderAll(ele);
}

// =========================修改数量===========================
function changeshuliang(syid,c){
    var xhr_jian = new XMLHttpRequest();
    var status = [200,404];

    xhr_jian.onload = function(){
        if(status.indexOf(xhr_jian.status)!=-1){
            var data4 = JSON.parse(xhr_jian.responseText);
            console.log(xhr_jian.responseText);
            xuanran(data4);
           // console.log(data)
        }
    }
    // console.log("../api/cart.php?syid='"+syid+"'&jqty='"+ele.nextElementSibling.value+"'")
    xhr_jian.open("get","../api/cart.php?syid="+syid+"&jqty="+c+"",true);
    xhr_jian.send(null);
} 

function minusitem(ele){
    var cc = ele.nextElementSibling.value;
    if(cc <= 0){
        deleteitem(ele);
        return;
    }else{
    ele.nextElementSibling.value = cc-1;
    var curul = ele.parentElement.parentElement.parentElement.parentElement;
    var syid = curul.getAttribute("syid");

    changeshuliang(syid,ele.nextElementSibling.value);
    }

}

function additem(ele){
    var bb  = ele.previousElementSibling.value;
    ele.previousElementSibling.value = Number(bb)+1;
    var curul = ele.parentElement.parentElement.parentElement.parentElement;
    var syid = curul.getAttribute("syid");
    changeshuliang(syid,ele.previousElementSibling.value);
}

// =====================删除商品=============================

    function deleteitem(ele){
        var curdiv = ele.parentElement.parentElement.parentElement.parentElement;
        var nowul = ele.parentElement.parentElement.parentElement;
        curdiv.removeChild(nowul);

        var syid=nowul.getAttribute("syid");


        var xhr_delete = new XMLHttpRequest();
        var status = [200,404];

        xhr_delete.onload = function(){
            if(status.indexOf(xhr_delete.status)!=-1){
                var data4 = JSON.parse(xhr_delete.responseText);
                console.log(xhr_delete.responseText);
                xuanran(data4);
               // console.log(data)
            }
        }
        xhr_delete.open("get","../api/delete.php?syid="+syid+"",true);
        xhr_delete.send(null);
    }







// =============================封装渲染页面===================================

    var empty_box = document.querySelector(".empty_box");
    var full_box = document.querySelector(".full_box");
    var item_body = document.querySelector(".item-body");
    var zltotal = document.querySelector(".zltotal");
    var goodsall = document.querySelector(".goodsall");
    var allzhongliang= document.querySelector(".allzhongliang");
    var allprice = document.querySelector(".allprice");


    function xuanran(data){
        if(data==""){
            full_box.style.display = "none";
            empty_box.style.display = "block";
        }else{

            empty_box.style.display = "none";
            full_box.style.display = "block";

            var res="";
            var sum=0;
            var zlt=0;
            item_body.innerHTML="";

            for(var i=0;i<data.length;i++){
            var cheul = document.createElement("ul");
            cheul.className = "item-content clearfix";
            cheul.setAttribute("syid",data[i].id);
            item_body.appendChild(cheul);
            var smallall = data[i].jqty * data[i].price;

            res += ` <li class="td td-chk">
                        <div class="td-inner">
                            <input type="hidden" name="cart_pid" value="50077490" id="cart_ref_50077490">
                            <input type="hidden" name="cart_pid" value="1" id="cart_itype_50077490">
                            <label class="cart-checkbox cart-checkbox-selected cart_danxuan">
                            <input type="checkbox" onclick="checkItemStatus(this);" value="50077490" itype="1" name="cart2Checkbox" autocomplete="off" checked="true">
                            <span>勾选此店铺下所有商品</span>
                            </label>
                        </div>
                    </li>
                    <li class="td td-item">
                        <div class="td-inner">
                            <div class="item-pic">
                                <a onclick="window.location.href='../html/detail.html?syid=${data[i].id}'" target="_blank"><img src="${data[i].imgurl}" alt="${data[i].title}" class="itempic">
                                </a>
                            </div>
                            <div class="item-info">
                               <a onclick="window.location.href='"+../html/detail.html+"'?syid='"${data[i].id}"'" target="_blank" class="item-title">${data[i].title}</a>
                                <div class="result_txt clearfix">
                                    <p>【<i>${data[i].guige} </i>】<br> </p>
                                    <input id="selectValue_50077490" type="hidden" value="">
                                    <input id="selectValueInfo_50077490" type="hidden" value="">
                                    <div class="revise_div"><a href="javascript:void(0);" class="modify_txt" id="modify_txt_50077490" specialid="50077490" specialno="1600963839" specialtype="1" specialrefmainitemid="50077490" catalogid="953783">修改</a>
                                        <div class="pop_info" id="pop_info_50077490">
                                        </div>
                                    </div>
                                </div>
                                        
                            </div>
                        </div>
                    </li>
                    <li class="td td-price">
                        <div class="td-inner">
                            <em>¥</em>${data[i].price}
                        </div>
                    </li>
                    <li class="td td-amount">
                        <div class="td-inner" limitbuy="0" catal="0">
                            <div class="item-amount ">
                                <input type="button" class="btn-reduce" onclick="minusitem(this)">
                                <input name="a" refmainitemid="50077490" itemid="50077490" itype="1" id="w7c50077490_1_50077490" class="text-amount" maxlength="3" value="${data[i].jqty}" onchange="prompt(this)" type="text" autocomplete="off">
                                <!---->
                                <!---->
                                <!--||(errorMsg.length()>0-->
                                <input type="button" class="btn-plus" onclick="additem(this)">
                            </div>
                            <div class="amount-msg" style="display: none;" id="w7t50077490_1_50077490">
                                商品数量已修改为&nbsp;<span style="color: red;">1</span>
                                <em></em>
                            </div>
                         </div>  
                    </li>
                    <li class="td td-weight">
                        <div class="td-inner">
                            <em class="number">${data[i].zhongliang}kg</em>
                        </div>
                    </li>
                    <li class="td td-location">
                        <div class="td-inner">
                            有货
                        </div>  
                    </li>
                    <li class="td td-sum">
                        <div class="td-inner red">
                            <em>¥</em>
                            ${smallall}
                        </div>
                    </li>
                    <li class="td td-op">
                        <div class="td-inner">
                            <a id="favorites_1179343" class="fav" href="javascript:void(0);">收藏</a>
                            <a href="javascript:;" onclick="deleteitem(this)" class="deleteButton">删除</a>
                        </div>
                    </li>`; 
            cheul.innerHTML = res;
                res="";
                // console.log(data[i].qty,data[i].zhongliang,data[i].qty*data[i].zhongliang)

                // for(var i=0;i<data.length;i++){
                //     if()
                // }

                zlt += Number((data[i].jqty*data[i].zhongliang).toFixed(1));
                sum += smallall;  
            } 
                zltotal.innerHTML = zlt+"kg";
                goodsall.innerHTML = "<b>¥</b>"+sum;
                allprice.innerHTML = sum;
                allzhongliang.innerHTML = zlt+"kg";
        }
    }

// ==================接收原本购物车的数量===================
 
    var xhr_cart = new XMLHttpRequest();
    var status = [200,404];
    xhr_cart.onload = function(){
        if(status.indexOf(xhr_cart.status)!=-1){
            var data = JSON.parse(xhr_cart.responseText);
            xuanran(data);
           // console.log(data)
        }
    }
    xhr_cart.open("get","../api/cart.php",true);
    xhr_cart.send(null);




