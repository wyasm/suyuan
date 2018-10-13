<?php

    $user = isset($_GET["user"])?$_GET["user"]:"";    
    $pass = isset($_GET["pass"])?$_GET["pass"]:""; 


    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "yiyaowang";


   // ====================查询数据库数据==========================

    $conn = new mysqli($servername,$username,$password,$dbname);

    if($conn->connect_error){
        die("链接失败:".$conn->connect_error);
    }

    $conn->set_charset("utf8");


    if($pass==""){
        $result = $conn->query('select*from login where user="'.$user.'"');
        $res = $result->fetch_all(MYSQLI_ASSOC);

        if($res){ 
            $result->close();     
            echo json_encode(false,JSON_UNESCAPED_UNICODE);
        }else{
            $result->close(); 
            echo json_encode(true,JSON_UNESCAPED_UNICODE);
        }

        $conn->close();
    }
    if($pass!="" && $user!=""){
 
       $res2 = $conn->query("insert into login(user,pass) values('".$user."','".$pass."')"); 

        if($res2){

            echo "ok";
        }else{
            echo false;
        }  
    }
        
    

?>