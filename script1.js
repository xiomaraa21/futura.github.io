document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');
  const prevCursor = document.querySelector('.cursor.prev');
  const nextCursor = document.querySelector('.cursor.next');
  let currentIndex = 0;
  const slideWidth = slides[0].offsetWidth;

  prevCursor.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  });

  nextCursor.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % slides.length;
    slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  });
});
 
/*carrusel*/

  $(document).ready(function(){
    $('.slick-carousel').slick({
      dots: true, 
      arrows: true, 
      infinite: true, 
      speed: 300, 
      slidesToShow: 4, 
      slidesToScroll: 4, 
      responsive: [
        {
          breakpoint: 3000, 
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 868, 
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });

/*separador*/
jQuery(document).ready(function($){
  setTimeout(function(){
      $('.trans--grow').addClass('grow');
  }, 275);
});


/*botones contenedor*/
document.querySelectorAll('.slide-btn').forEach(button => {
  button.addEventListener('click', function() {
    const pageUrl = this.closest('a').getAttribute('href');
  });
});

if ( ! Modernizr.adownload ) { var $link = $('a'); $link.each(function() { var $download = $(this).attr('download'); if (typeof $download !== typeof undefined && $download !== false) { var $el = $('<div>').addClass('download-instruction').text('Right-click and select "Download Linked File"'); $el.insertAfter($(this)); } }); }
  
