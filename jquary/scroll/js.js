
$(window).scroll(function () {
    let Topscrolled = $(window).scrollTop();
    // console.log(Topscrolled);
    if (Topscrolled > 0) {
        $(".header-img").addClass("animated")
    }
    else {
        $(".header-img").removeClass("animated")
    }


})



$(window).scroll(function () {
    let Topscrolled = $(window).scrollTop();

    if (Topscrolled > 700) {
        $(".food-item ").addClass("animated2")
    }
    else {
        $(".food-item ").removeClass("animated2")
    }


})
$(window).scroll(function () {
    let Topscrolled = $(window).scrollTop();

    if (Topscrolled > 1390) {
        $(".menu-item-img").addClass("animated3")
    }
    else {
        $(".menu-item-img").removeClass("animated3")
    }


})
$(window).scroll(function () {
    let Topscrolled = $(window).scrollTop();

    if (Topscrolled > 1790) {
        $(".left-sid-img").addClass("animated")
    }
    else {
        $(".left-sid-img").removeClass("animated")
    }


})
$(window).scroll(function () {
    let Topscrolled = $(window).scrollTop();

    if (Topscrolled > 1800) {
        $(".right-si-img").addClass("animated")
    }
    else {
        $(".right-si-img").removeClass("animated")
    }


})
