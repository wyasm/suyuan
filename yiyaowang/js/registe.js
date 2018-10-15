var phone = document.querySelector(".phone");
var mima = document.querySelector(".mima"); 
var phonenumber = document.querySelector(".phonenumber");
var information = document.querySelector(".information");
var box_safety = document.querySelector(".box_safety"); 
var useryz = document.querySelector(".useryz"); 
var surepass = document.querySelector(".surepass"); 
var yanzheng = document.querySelector(".yanzheng"); 
var email_true = document.querySelector("#email_true"); 
var password_true = document.querySelector("#password_true"); 
var password2_true = document.querySelector("#password2_true"); 

// ============判断用户是否存在数据库==============
    function panduan(){
        var _phone = phone.value;
        var xhr_panduan = new XMLHttpRequest();
        var status = [200,304];

        xhr_panduan.onload = function(){
            if(status.indexOf(xhr_panduan.status)!=-1){
                console.log(xhr_panduan.responseText);
                if(xhr_panduan.responseText=="false"){
                    phone.style.border ="1px solid red";
                    phonenumber.innerHTML = "该用户已存在"
                    phonenumber.style.color="red";
                }else{
                    email_true.style.display = "inline-block";
                }
            }
        }

        xhr_panduan.open("get","../api/registe.php?user="+_phone,true);
        xhr_panduan.send(null);    
    }
    
// ================手机验证======================

phone.onblur = function(){
    var _phone = phone.value;
    if(_phone==""){
        phone.style.border ="1px solid #ffaa00";
        useryz.style.display="block";
        email_true.style.display = "none";
        return;
    }
    if(!/^1\d{10}$/i.test(_phone)){
        phonenumber.innerHTML = "手机格式不对"
        phonenumber.style.color="red";
        email_true.style.display = "none";
        return false;
    }  
    panduan()
    // email_true.style.display = "inline-block";
}

phone.onfocus = function(){
    phonenumber.style.color="#fff";
    useryz.style.display="none";
    phone.style.border ="1px solid #e6e6e6";
}

// ============密码验证================


mima.onfocus = function(){
    mima.style.border="1px solid #e6e6e6";
    information.innerHTML = "6-20位字符，建议由字母，数字和符号两种以上组合";
    information.style.color="#ccc";
}

// ====================密码强度验证============================

mima.oninput = function(){
    var _mima = mima.value;
    information.style.color="#fff";
    box_safety.style.display = "inline-block";
    if(/^[a-z0-9]{6,8}$/i.test(_mima)){
       box_safety.className = "box_safety pas_ruo";
       surepass.removeAttribute("disabled");
       surepass.style.backgroundColor= "#fff";
       yanzheng.style.display = "block";
       password_true.style.display = "inline-block";
    }
    if(/^[a-z0-9]{8,20}$/i.test(_mima)){
        box_safety.className = "box_safety pas_middle";
        surepass.removeAttribute("disabled");
        surepass.style.backgroundColor = "#fff";
        yanzheng.style.display = "block";
        password_true.style.display = "inline-block";
    }
    else if(/^[a-z0-9A-Z_-]{8,20}$/i.test(_mima)){
        box_safety.className = "box_safety pas_qiang";
        surepass.removeAttribute("disabled");
        surepass.style.backgroundColor = "#fff";
        yanzheng.style.display = "block";
        password_true.style.display = "inline-block";
    }else if(/^[a-z0-9A-Z_-]{0,5}$/i.test(_mima)){
        box_safety.className = "box_safety pas_ruo";
        surepass.style.disabled = "disabled";
        surepass.style.backgroundColor= "#f3f3f3";
        password_true.style.display = "none";
    }
}

// ===============密码正则验证================

mima.onblur = function(){
    var _mima = mima.value;
    var surepass = document.querySelector(".surepass");
    box_safety.style.display = "none";
    if(_mima==""){
        mima.style.border="1px solid red";
        information.innerHTML = "密码不能为空";
        information.style.color="red";
        password_true.style.display = "none";
        return false;
    }else if(/^[0-9]+$/gi.test(_mima)){
        information.innerHTML = "密码不能全为数字";
        information.style.color="red";
        password_true.style.display = "none";
        return false;  
    }else if(/^[a-z]+$/gi.test(_mima)){
        information.innerHTML = "密码不能全为字母";
        information.style.color="red";
        password_true.style.display = "none";
        return false;  
    }
    if(!/^[a-z0-9_-]{6,20}$/gi.test(_mima)){
        password_true.style.display = "none";
        information.innerHTML = "6-20位字符，建议由字母，数字和符号两种以上组合";
        information.style.color="red";
        return false;
    }
    var _surepass = surepass.value;
    var _mima = mima.value;
    if(_surepass == _mima){
         mimayanzheng.style.color = "#fff";
        surepass.style.border="1px solid rgb(230, 230, 230)";
        password2_true.style.display = "inline-block";
    }else{
        mimayanzheng.style.color = "red";
        surepass.style.border="1px solid red";
    }

}
// =============判断两次密码是否一致=================
var surepass = document.querySelector(".surepass");
var mimayanzheng = document.querySelector(".mimayanzheng");

surepass.onblur = function(){
    var _surepass = surepass.value;
    var _mima = mima.value;
    if(_surepass == _mima){
         mimayanzheng.style.color = "#fff";
        surepass.style.border="1px solid rgb(230, 230, 230)";
        password2_true.style.display = "inline-block";
    }else{
        mimayanzheng.style.color = "red";
        surepass.style.border="1px solid red";
    }
}
surepass.onfocus=function(){
    mimayanzheng.style.color = "#fff";
    surepass.style.border="1px solid rgb(230, 230, 230)";
}

// ============验证码获取及验证=====================
    var output = document.querySelector(".output");
    var yzmimg = document.querySelector(".yzmimg");
    var yzm = document.querySelector(".yzm");
    var changeyzm = document.querySelector(".changeyzm");


    function yzfangfa(num){
        yzm.onblur = function(){
            var _yzm = yzm.value;
            if(_yzm != num ){
                output.innerHTML = "请输入正确的验证码"
                output.style.color = "red";
            }else if(_yzm == num){
                output.innerHTML = "√"
                output.fontSize = 0;
                output.style.color = "green";
            }
        }
   }
   
    function creatyzm(){
        var random = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
        var c="";
        for(var i=0;i<4;i++){
            var r = getRandomNum(0,35);
            c += random[r];
        }
        yzmimg.innerHTML = c;
        yzmimg.style.fontSize = getRandomNum(12,26)+"px";
        yzmimg.style.color = getColor();
        yzfangfa(c);
    }


    creatyzm();

    yzmimg.onclick = function(){
       creatyzm(); 
    }

    changeyzm.onclick = function(e){
        e.preventDefault();
        creatyzm(); 
    }
// ===================数据库插入用户信息=====================
function insert(){
        var _phone = phone.value;
        var _mima = mima.value;
        var xhr_newuser = new XMLHttpRequest();
        var status = [200,304];

        xhr_newuser.onload = function(){
            if(status.indexOf(xhr_newuser.status)!=-1){
                if(xhr_newuser.responseText=="ok"){
                    alert("您已注册成功")
                    location.href="../html/login.html"
                }
            }
        }
        xhr_newuser.open("get","../api/registe.php?user="+_phone+"&pass="+_mima+"",true);;
        xhr_newuser.send(null);    
    }



// ====================注册插入数据库=====================
    var zhuce = document.querySelector(".zhuce");
    zhuce.onclick = function(){
        var _phone = phone.value;
        var _mima = mima.value;


        var _surepass = surepass.value;
        var zt1 = email_true.style.display=="inline-block"?true:false;
        var zt2 = password_true.style.display=="inline-block"?true:false;
        var zt3 = password2_true.style.display=="inline-block"?true:false;
        var zt4 = output.style.color=="green"?true:false;

        if(zt1 && zt2 && zt3 && zt4){
            insert();
        }
    }




// }



