<?php
    $jqty = isset($_GET["jqty"])?$_GET["jqty"]:"";
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

    if($curid ==""&&$jqty ==""){
        $result = $conn->query("select * from cart");
        $res = $result->fetch_all(MYSQLI_ASSOC);             
        $result->close();
        echo json_encode($res,JSON_UNESCAPED_UNICODE);
        $conn->close();
    }
    //  if($curid==""){
    //     $result = $conn->query("select * from cart");
    //     $res = $result->fetch_all(MYSQLI_ASSOC);             
    //     $result->close();
    //     echo json_encode($res,JSON_UNESCAPED_UNICODE);
    //     $conn->close();
    // }
    else if($curid!=""&&$jqty!=""){
        $res4 = $conn->query("update cart set jqty ='".$jqty."' where id ='".$curid."'");
        if($res4){
            $result3 = $conn->query("select * from cart");
            $res3 = $result3->fetch_all(MYSQLI_ASSOC);
            $result3->close();
            echo json_encode($res3,JSON_UNESCAPED_UNICODE);
            $conn->close();
        }else{
            echo false;
        } 
    }
    else{       
        $result2 = $conn->query('select * from cart where id="'.$curid.'"');
        $res2 = $result2->fetch_all(MYSQLI_ASSOC);
        if($res2){
            $result2->close();
            echo json_encode($res2,JSON_UNESCAPED_UNICODE);
        }else{
            echo 0;
        }
        
            
        $conn->close();
    }
    



?>