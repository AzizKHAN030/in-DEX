$(window).on("scroll", function () {
    $(".navbar").toggleClass("scrolled", $(this).scrollTop() > $(window).height()*0.5);
});
$(window).on("scroll", function () {
    $(".main-logo").toggleClass("logo_2", $(this).scrollTop() > $(window).height()*0.5);
    setInterval(function () {
        if ($(".main-logo").hasClass("logo_2")) {
            $(".logo_2").attr("src", "images/logo_white.png");
        } else {
            $(".main-logo").attr("src", "images/logo.png");
        }
    }, 100);

});
$(window).on("scroll", function () {
    $(".nav-link").toggleClass("scrolled-nav-link", $(this).scrollTop() > $(window).height()*0.5);
});
$(window).on("scroll", function () {
    $(".navbar-toggler").toggleClass("custom-toggler", $(this).scrollTop() > $(window).height()*0.5);
});

$(document).ready(function(){
    $("#navLinks").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top-65}, 1000);
    });
});
function validate() {
    let name=document.forms["contactForm"]["user_name"].value;
    if (name==""){
        alert("Укажите Ваше имя");
        return false;
    }
    if(name.length>25 || /\d/.test(name)){
        alert("Проверьте правописание имени");
        return false;
    }
    let phoneNum=document.forms["contactForm"]["user_phone"].value; 
    if(phoneNum=="" || phoneNum.lenght>12 || phoneNum.length<9 || /\D/.test(phoneNum)){
        alert("Введите правильный формат номера!");
        return false;
    }
}
