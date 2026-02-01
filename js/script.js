 $(document).ready(function(){
            var articlesCarousel = $('.baner-owl').owlCarousel({
                rtl: true,
                loop: true,
                
                nav: false,
                dots: false,
                // center: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                smartSpeed: 1000,
        //          animateOut: 'fadeOut',
        // animateIn: 'fadeIn',
         navText: [
            '<img src="images/nav-left.png" >',
             '<img src="images/nav-right.png" >'
        ],
               
                responsive: {
                    0: {
                        items: 1,
                        
                    },
                     1200: {
                        items: 1,
                nav: true,

                        
                    },
                    
                  
                }
            });
            
            
         
        });

        if ($(".owl-support").length) {
  $(".owl-support").owlCarousel({
    // autoplay: true,
    loop: false,
    rtl: true,
    nav: false,
    margin:20,
    navText: [],
    lazyLoad: true,
    responsive: {
      0: {
        items: 1,
        dots: true,
        autoplay:true,
        loop:true,
        autoplayHoverPause: true,
      },
      500: {
        items: 1,
        dots: true,
      },
      768: {
        items: 2,
        dots: true,
      },
      991: {
        items: 3,
        dots: true,
      },
      1200: {
        items: 5,
        touchDrag: false,
        mouseDrag: false
      },
    },
  });
}

 $(document).ready(function(){
            var articlesCarousel = $('.blog-owl').owlCarousel({
                rtl: true,
                loop: true,
                
                nav: false,
                dots: false,
                // center: true,
                // autoplay: true,
                // autoplayTimeout: 5000,
                // autoplayHoverPause: true,
                // smartSpeed: 1000,
        //          animateOut: 'fadeOut',
        // animateIn: 'fadeIn',
         navText: [
            '<img src="images/nav-left.png" >',
             '<img src="images/nav-right.png" >'
        ],
               
                responsive: {
                    0: {
                        items: 1,
                        
                    },
                     1200: {
                        items: 3,
                nav: true,

                        
                    },
                    
                  
                }
            });
            
            
         
        });