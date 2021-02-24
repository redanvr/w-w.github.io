$(window).scroll(function() {
    if ($(document).scrollTop() > 10) {
        $("header").addClass("anim-nav");
            } else {
        $("header").removeClass("anim-nav");
    }
});