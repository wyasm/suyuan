<?php
    
    $fenlei = isset($_GET["fenlei"])?$_GET["fenlei"]:"";
    // var_dump($feilei);

    $servername ="localhost";
    $username = "root";
    $password = "";
    $dbname = "yiyaowang";

    // ====================查询数据库数据==========================

    $conn = new mysqli($servername,$username,$password,$dbname);

    if($conn->connect_error){
        die("链接失败:".$conn->connect_error);
    }

    $conn->set_charset("utf8");

    if($fenlei == ""){
        $result = $conn->query("select * from miaosha");
        $res = $result->fetch_all(MYSQLI_ASSOC);

        $result->close();
        echo json_encode($res);
    }else if($fenlei != ""){
        $result2 = $conn->query("select * from goods where fenlei='".$fenlei."'");
        $res2 = $result2 -> fetch_all(MYSQLI_ASSOC);
        $result2->close();
        echo json_encode($res2);
    }
   
    $conn->close();


?>
