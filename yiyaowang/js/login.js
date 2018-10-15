
// =============更多合作网站=====================

    var moreweb = document.querySelector(".moreweb");
    var moreicon = document.querySelector(".moreicon");
    var main_r =  document.querySelector(".main_r");
    var nowi = moreweb.children[0];

    moreweb.onmouseover = function(){
        moreicon.style.display="block";
        main_r.style.height="500px";
        nowi.className ="icon icon-jiantouks"

    }
     moreweb.onmouseout = function(e){
        moreicon.style.display="none";
        main_r.style.height="450px";
        nowi.className ="icon icon-jiantoukx"
    }


// =============登陆方式切换=====================

    var putong = document.querySelector(".putong");
    var shouji = document.querySelector(".shouji");
    var login_1 = document.querySelector(".login_1");
    var login_2 = document.querySelector(".login_2");

    putong.onclick = function(){
        shouji.children[0].className = "";
        putong.children[0].classList.add("focus");
        login_1.style.display="block";
        login_2.style.display =  "none";
    }
    shouji.onclick = function(){
        putong.children[0].className = "";
        shouji.children[0].classList.add("focus");
        login_2.style.display="block";
        login_1.style.display =  "none";
    }

// ============验证码获取及验证=====================
    var output = document.querySelector(".output");
    var yzmimg = document.querySelector(".yzmimg");
    var yzm = document.querySelector(".yzm");
    var changeyzm = document.querySelector(".changeyzm");
    var vcd_tatus = document.querySelector("#vcd_tatus");

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
        yanzheng(c);
   }

   function yanzheng(num){
        yzm.oninput = function(){
            var _yzm = yzm.value;
            if(_yzm == num){
               vcd_tatus.style.display = "inline-block";
                output.style.color = "#fff";
            }
        }
        yzm.onblur = function(){
            var _yzm = yzm.value;
            if(_yzm != num ){
                output.innerHTML = "请输入正确的验证码"
                vcd_tatus.style.display = "none";
                output.style.color = "red";
            }
        }
        yzm.onfocus = function(){
           vcd_tatus.style.display = "none";
            output.style.color = "#fff";
        }
   }
   

    creatyzm();

    yzmimg.onclick = function(){
       creatyzm(); 
    }

    changeyzm.onclick = function(e){
        e.preventDefault();
        creatyzm(); 
    }

    

/*=================登录验证=================*/


    var pass = document.querySelector(".pass");
    var user = document.querySelector(".user");
    var useryz = document.querySelector(".useryz");
    var denglu1 = document.querySelector(".denglu1");
    var tixing = document.querySelector(".tixing");

    denglu1.onclick = function(){
        var _pass = pass.value;
        var _user = user.value;
        if(_pass.trim()!="" && _user.trim()!=""){
            if(vcd_tatus.style.display == "inline-block"){
                var xhr = new XMLHttpRequest();
                var status =[200,304];
                xhr.onload = function(){
                    if(status.indexOf(xhr.status)!=-1){
                        var res = JSON.parse(xhr.responseText);
                        console.log(res);
                        if(res==""){
                            alert("该用户不存在，请先注册再登录");
                        }
                        else if(_pass==res[0].pass){
                            location.href="../index.html";
                            // ==================创建传递cookie=============
                            document.cookie = "user="+_user;                           
                            // ================================================
                        }else if(_pass != res[0].pass){
                            pass.style.border = "1px solid red";
                            tixing.innerHTML = "密码输入有误";
                            pass.onfocus = function(){
                                pass.style.border = "1px solid #e6e6e6";
                                tixing.innerHTML = "";
                            }
                        }     
                    }
                }
                xhr.open("get","../api/login.php?pass="+_pass+"&user="+_user+"",true);
                xhr.send(null); 
            }else{
               output.innerHTML = "请输入正确的验证码" ;
               output.style.color = "red" ;
               yzm.onfocus = function(){
                    output.innerHTML = "" ;
               }
            }
        }else if(_user ==""){
            user.style.border = "1px solid #ffaa00";
            useryz.style.display = "block";
            user.onfocus = function(){
                user.style.border = "1px solid #e6e6e6";
                useryz.style.display = "none";
            }
        }else if(_pass==""){
            pass.style.border = "1px solid red";
            tixing.innerHTML = "密码不能为空";
            pass.onfocus = function(){
                pass.style.border = "1px solid #e6e6e6";
                tixing.innerHTML = "";
            }
        }
    }


    


