<?php
        
    $syid = isset($_GET["syid"])?$_GET["syid"]:"";
    $title = isset($_GET["title"])?$_GET["title"]:"";
    $imgurl = isset($_GET["imgurl"])?$_GET["imgurl"]:"";
    $price = isset($_GET["price"])?$_GET["price"]:"";
    $qty = isset($_GET["qty"])?$_GET["qty"]:"";
    $jqty = isset($_GET["jqty"])?$_GET["jqty"]:"";
    $guige = isset($_GET["guige"])?$_GET["guige"]:"";
    $zhongliang = isset($_GET["zhongliang"])?$_GET["zhongliang"]:"";
    $total = isset($_GET["total"])?$_GET["total"]:"";


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

    $result = $conn->query('select*from cart where id="'.$syid.'"');
    $res = $result->fetch_all(MYSQLI_ASSOC);
    // var_dump($res);
    // echo打印字符串
    if($res == [] && $syid != ""){       
       $res2 = $conn->query("insert into cart(id,title,imgurl,price,guige,zhongliang,qty,jqty) values('".$syid."','".$title."','".$imgurl."','".$price."','".$guige."','".$zhongliang."','".$qty."','".$qty."')"); 

        if($res2){
            $result = $conn->query('select * from cart');
            $res2 = $result->fetch_all(MYSQLI_ASSOC);
            $result->close();
            echo json_encode($res2,JSON_UNESCAPED_UNICODE);
            $conn->close();
            // echo "ok";
        }else{
            echo $conn->error;
        }  
    }else{
        $nqty = $jqty+$qty;
        // var_dump($nqty);
        // 
        $res3 = $conn->query("update cart set jqty ='".$nqty."' where id ='".$syid."'");
        
        if($res3){
            $result3 = $conn->query("select * from cart");
            $res3 = $result3->fetch_all(MYSQLI_ASSOC);
            $result3->close();
            echo json_encode($res3,JSON_UNESCAPED_UNICODE);
            $conn->close();
        }      
    }
    
     // $result->close();       
    // echo json_encode($res,JSON_UNESCAPED_UNICODE);
    // $conn->close();



?>