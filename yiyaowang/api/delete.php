<?php
    $curid = isset($_GET["syid"])?$_GET["syid"]:"";    

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


    if($curid!=""){
        $res = $conn->query("delete from cart where id='".$curid."'");
        if($res){
            $result2 = $conn->query("select * from cart");
            $res2 = $result2->fetch_all(MYSQLI_ASSOC);
            $result2->close();
            echo json_encode($res2,JSON_UNESCAPED_UNICODE);
            $conn->close();
        }
   }
    
?>
