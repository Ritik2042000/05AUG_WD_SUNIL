$(window).scroll(function () {
    let Topscrolled = $(window).scrollTop();
    console.log(Topscrolled);
    if (Topscrolled > 0) {
        $(".dog").addClass("animated")
    }
    // else {
    //     $(".header-img").removeClass("animated")
    // }

})


$(window).scroll(function () {
    let Topscrolled = $(window).scrollTop();

    if (Topscrolled > 1150) {
        $(".dog3").addClass("animated2")
    }
    else {
        $(".dog3").removeClass("animated2")
    }

})


$(window).scroll(function () {
    let Topscrolled = $(window).scrollTop();

    if (Topscrolled > 350) {
        $(".dog2").addClass("animated2")
    }
    else {
        $(".dog2").removeClass("animated2")
    }

})


$(window).scroll(function () {
    let Topscrolled = $(window).scrollTop();

    if (Topscrolled > 1700) {
        $(".dog4").addClass("animated")
    }
    else {
        $(".dog4").removeClass("animated")
    }


})


$(window).scroll(function () {
    let Topscrolled = $(window).scrollTop();

    if (Topscrolled > 1980) {
        $(".packet3").addClass("animated")
    }
    else {
        $(".packet3").removeClass("animated")
    }

})