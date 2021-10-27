

 //slim header//

 $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     if (window.matchMedia('(min-width: 1200px)').matches) {
        if (scroll >= 50) {
          $("header").addClass("slim-header");           
              
         } else {
          $("header").removeClass("slim-header");   
          
         }
      } 
   });
 //slim header//

 