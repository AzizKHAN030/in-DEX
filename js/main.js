$(window).on("scroll", function () {
    $(".navbar").toggleClass("scrolled", $(this).scrollTop() > $(window).height()*0.5);
});
$(window).on("scroll", function () {
    $(".main-logo").toggleClass("logo_2", $(this).scrollTop() > $(window).height()*0.5);
    setInterval(function () {
        if ($(".main-logo").hasClass("logo_2")) {
            $(".logo_2").attr("src", "images/logo_655.png");
        } else {
            $(".main-logo").attr("src", "images/logo_03.png");
        }
    }, 100);

});
$(window).on("scroll", function () {
    $(".nav-link").toggleClass("scrolled-nav-link", $(this).scrollTop() > $(window).height()*0.5);
});
$(window).on("scroll", function () {
    $(".navbar-toggler").toggleClass("custom-toggler", $(this).scrollTop() > $(window).height()*0.5);
});

