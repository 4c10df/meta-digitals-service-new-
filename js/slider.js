/// what our customer are saying slider code////
document.addEventListener('DOMContentLoaded', () => {
    var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,

    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: ".more_next",
        prevEl: ".less_prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
    });
});
/// what our customer are saying slider code////
