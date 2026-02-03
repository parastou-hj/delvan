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
       
               
                responsive: {
                    0: {
                        items: 1,
                        
                    },
                     1200: {
                        items: 1,
                dots: true,

                        
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
                dots: true,
                // center: true,
                // autoplay: true,
                // autoplayTimeout: 5000,
                // autoplayHoverPause: true,
                // smartSpeed: 1000,
        //          animateOut: 'fadeOut',
        // animateIn: 'fadeIn',
        
               
                responsive: {
                    0: {
                        items: 1,
                        
                    },
                     1200: {
                        items: 3,
                

                        
                    },
                    
                  
                }
            });
            
            
         
        });
         document.addEventListener("DOMContentLoaded", () => {
      const items = document.querySelectorAll(".menu li");
      let timer;

      items.forEach(item => {
        item.addEventListener("mouseenter", () => {
          clearTimeout(timer);
          const siblings = item.parentElement.querySelectorAll(":scope > li");
          siblings.forEach(sib => {
            if (sib !== item) sib.classList.remove("active");
          });
          item.classList.add("active");
        });

        item.addEventListener("mouseleave", () => {
          timer = setTimeout(() => {
            item.classList.remove("active");
          }, 250);
        });
      });

      // برای موبایل - کلیک کردن
      if (window.innerWidth <= 768) {
        items.forEach(item => {
          const link = item.querySelector("a");
          if (item.querySelector(".submenu")) {
            link.addEventListener("click", (e) => {
              e.preventDefault();
              item.classList.toggle("active");
            });
          }
        });
      }
    });

    document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.querySelector('.search');
    const searchBox = document.querySelector('.search-box-wrapper');
    const closeSearchBtn = document.getElementById('closeSearch');
    const searchInput = document.getElementById('searchInput');
    
   
    if (searchIcon) {
        searchIcon.addEventListener('click', function(e) {
            e.preventDefault();
            searchBox.classList.add('active');
            
           
            setTimeout(() => {
                searchInput.focus();
            }, 400);
        });
    }
    
   
    if (closeSearchBtn) {
        closeSearchBtn.addEventListener('click', function() {
            searchBox.classList.remove('active');
        });
    }
    
   
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchBox.classList.contains('active')) {
            searchBox.classList.remove('active');
        }
    });
    
    
    document.addEventListener('click', function(e) {
        if (!searchBox.contains(e.target) && !searchIcon.contains(e.target)) {
            searchBox.classList.remove('active');
        }
    });
    
    
    searchBox.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    });
      function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

         document.addEventListener('DOMContentLoaded', () => {
            const header = document.querySelector('header');
            const logoFix = document.querySelector('.logo-img-fix');
            const logo = document.querySelector('.logo');


            if (!header || !logoFix) {
                return;
            }

            const toggleScrolled = () => {
                const isScrolled = window.scrollY > 0;
                header.classList.toggle('scrolled', isScrolled);
                logoFix.classList.toggle('scrolled', isScrolled);
                logo.classList.toggle('scrolled', isScrolled);
            };

            toggleScrolled();
            window.addEventListener('scroll', toggleScrolled);
        });