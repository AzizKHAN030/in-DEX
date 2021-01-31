<?php
$name=$_POST["user_name"];
$phone=$_POST["user_phone"];


$token="1629048622:AAEUfkeQDcP1D5FAmRV7kOWfFTVzylp8LJ8";
$chat_id="-543715839";
$siteName="IN-DEX.UZ";


$arr=array(
    "Cообщение с сайта: " => $siteName,
    "Имя пользователя: " => $name,
    "Номер телефона пользователя: " => $phone
);
foreach($arr as $key => $value){
    $txt .="<b>".$key."</b>".$value."%0A";
};

 $sendToTelegram=fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
 if ($sendToTelegram){
     header("Location: index.html");}
     else {echo ("Что то пошло не так! Попробуйте еще раз.");}

?>