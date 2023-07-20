

$(document).ready(function(){

    $('#nav').slicknav({

       
    }); 

    $('#nav').onePageNav({
        
        currentClass: 'current',

    });


    $('.project-popup').magnificPopup({

        type:'image',
        gallery:{
            enabled:true
          }

    });

    $('.video-popup').magnificPopup({

        type:'iframe',

    });

    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });

    $('.slick-slid').slick({

       
        slidesToShow: 2,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa-solid fa-chevron-right"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa-solid fa-chevron-left"></i></button>',
        dots: true,
        infinite: true,
        loop: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings:{
                    arrows:false,
                }
            },

            {
                breakpoint: 480,
                settings:{
                    arrows:false,
                    slidesToShow: 1,
                }
            }
        ]

    
      });

    


});



$(window).on('scroll', function(){

    if($(this).scrollTop() > 50){
        
        $('.header-area').addClass('sticky');
        
    }
    else{

        $('.header-area').removeClass('sticky');
    }
});
