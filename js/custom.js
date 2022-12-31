// ..............Custom JavaScript Code.................


 /******* */
(function ($) {
  "use strict";
  jQuery(document).ready(function ($) {



   
         //model_lsit
     $('.model-list').owlCarousel({  
        items: 4,
        autoplay: true,
        autoplayTimeout:5000,
        smartSpeed: 1000,
        loop: true,
        margin: 20,
        dots: true,
        nav:false,
        responsiveClass:true,
        responsive:{
           0:{
               items:1,
               dots: true,
               margin:20,
              

           },
           500:{
            items:2,
            dots: true,
            margin:20,
           

            },
           600:{
               items:3,
               dots: true,
               margin:20,
               
           },
           1000:{
               items:4,
               loop:false,
               dots: false,
               mouseDrag: false,
              
            
           }
        }
      
    });
    //collaboration_box
   
     //collaboration_box
     $('.collaboration_box-list').owlCarousel({  
        items: 4,
        autoplay: true,
        autoplayTimeout:5000,
        smartSpeed: 1000,
        loop: true,
        margin: 20,
        dots: true,
        nav:false,
        responsiveClass:true,
        responsive:{
           0:{
               items:1,
               dots: true,
               margin:5,
              

           },
           500:{
            items:2,
            dots: true,
            margin:5,
           

            },
           600:{
               items:2,
               dots: true,
               
           },
           1000:{
               items:4,
               loop:true,
               dots: true,
              
            
           }
        }
      
    });
    //collaboration_box
    $('.testimonial-list').owlCarousel({  
      items: 1,
      autoplay: true,
      autoplayTimeout:5000,
      loop: true,
      dots:true,
      nav:false,
      responsiveClass:true,
      responsive:{
         0:{
             items:1,
             nav:false,
        

         },
         600:{
             items:1,
             nav:false
         },
         1000:{
             items:1,
             loop:true,
             nav:false,
         }
      }
    
  });



  });

}(jQuery));
