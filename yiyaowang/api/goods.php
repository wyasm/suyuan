<?php
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

    $result = $conn->query("select * from goods");
    $res = $result->fetch_all(MYSQLI_ASSOC);

    $result->close();
    echo json_encode($res);
   
   
    $conn->close();
?>