<?php
$login=$_POST["login"];
$email=$_POST["email"];
$telephone=$_POST["telephone"];

$login=htmlspecialchars($login);
$email=htmlspecialchars($email);
$telephone=htmlspecialchars($telephone);

$login=urldecode($login);
$email=urldecode($email);
$telephone=urldecode($telephone);

$login=trim($login);
$email=trim($email);
$telephone=trim($telephone);

if(mail("rasulov_azizbek@inbox.ru",
        "Новое письмо с сайтаж",
        "Логин: ".$login."\n".
        "Email: ".$email."\n".
        "Телефон: ".$telephone,
        "From: no-reply@mydomain.ru \r\n")
        )
        {
            echo("Письмо успешно отправлено!");
        }
        else {
            echo("Произошла ошибка, проверьте позже");
    };

?>