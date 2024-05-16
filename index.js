function Menu(e){
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close",list.classList.add('top-[51px]') ,
     list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[51px]'),
     list.classList.remove('opacity-100'))
}

// rotate logo
document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('rotate-on-scroll');
    window.addEventListener('scroll', () => {
        // Calculate the rotation based on the scroll position
        const scrollPosition = window.scrollY;
        const rotation = scrollPosition % 360; // Keep the rotation within 0-359 degrees
        image.style.transform = `rotate(${rotation}deg)`;
    });
});
// rotate logo
  
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

document.addEventListener('DOMContentLoaded', () => {
   
    // Add scroll event listener
    window.addEventListener('scroll', function() {
        var scrollY = window.scrollY;
        var header = document.querySelector('header');
        var ul = document.querySelector('ul.cass');

        // Check if the window width is at least md breakpoint (768px)
        if (window.innerWidth >= 768) {
            // Add or remove 'scrolled' class based on scroll position
            if (scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        } else {
            // Remove 'scrolled' class if window width is below md breakpoint
            header.classList.remove('scrolled');
        }
    });


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

