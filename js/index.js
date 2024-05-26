function Menu(e){
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close",list.classList.add('top-[52px]') ,
     list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[52px]'),
     list.classList.remove('opacity-100'))
}

  

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



