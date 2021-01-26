<?php
$name=$_POST["user_name"];
$email=$_POST["user_email"];
$phone=$_POST["user_phone"];


$token="1672323034:AAG_vIJPvhEglh97xVq8Hos80KVOmbjZZhI";
$chat_id="-500038362";


$arr=array(
    "Имя пользователя"=>$name,
    "Email пользователя"=>$email,
    "Номер телефона пользователя"=>$phone
);
foreach($arr as $key=>$value){
    $txt .="<b>".$key."</b>".$value."%0A";
};

 $sendToTelegram=fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
 
 if($sendToTelegram){
     echo"Thank you";
 }else{
     echo "Error";
 }

?>