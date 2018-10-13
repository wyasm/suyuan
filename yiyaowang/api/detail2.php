<?php
    $curid = isset($_GET["syid"])?$_GET["syid"]:"2";

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "yiyaowang";


    // ====================查询数据库数据==========================
    
    $conn = new mysqli($servername,$username,$password,$dbname);

    if($conn->connect_error){
        die($conn->$connect_error);
    }

    $conn->set_charset("utf8");

    $result = $conn->query('select*from goods where id="'.$curid.'"');
    $res = $result->fetch_all(MYSQLI_ASSOC);
    // var_dump($res);
    // echo打印字符串
     $result->close();       
    echo json_encode($res,JSON_UNESCAPED_UNICODE);
    $conn->close();



?>