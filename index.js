function Menu(e){
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close",list.classList.add('top-[51px]') ,
     list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[51px]'),
     list.classList.remove('opacity-100'))
}

  
// play video
document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('myVideo');

    // Listen for the 'ended' event
    video.addEventListener('ended', () => {
        // Restart the video by setting the current time to 0
        video.currentTime = 0;
        video.play(); // Start playing again
    });
});

//// bg color for nav  ////////
document.addEventListener('DOMContentLoaded', () => {
    function changeBg(){
        var navbar = document.getElementById('navbar')
        var scrollValue = window.scrollY;
        
        if(scrollValue < 100){
            navbar.classList.remove('bgColor');
        } else{
            navbar.classList.add('bgColor');
        }
    }

    window.addEventListener('scroll', changeBg)
});
//// bg color for nav end ////////


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

