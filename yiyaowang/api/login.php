<?php
    $user= isset($_GET["user"])?$_GET["user"]:"";
    $pass = isset($_GET["pass"])?$_GET["pass"]:"";

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "yiyaowang";


    // ====================查询数据库数据==========================
    
    $conn = new mysqli($servername,$username,$password,$dbname);

    if($conn->connect_error){
        die("连接失败：".$conn->connect_error);
    }

    $conn->set_charset("utf8");

    if($user == ""){
        echo "false";
    }
    if($user != ""){
        $result = $conn->query("select * from login where user='".$user."'"); 
        $res = $result->fetch_all(MYSQLI_ASSOC);
        $result->close();
        echo JSON_encode($res);
    }
    $conn->close();
    



?>