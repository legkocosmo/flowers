$(document).ready(function () {

  const flowersSlider = new Swiper('.flowers-slider', {
    // Optional parameters
    // direction: 'vertical',
    loop: true, //бесконечно
    slidesPerView: 6,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {

      0: {
        slidesPerView: 1,
        // spaceBetween: 20
      },
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        // spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        // spaceBetween: 30
      },
      576: {
        slidesPerView: 3,
        // spaceBetween: 40
      },

      // when window width is >= 768px
      768: {
        slidesPerView: 4,
        // spaceBetween: 40
      },
      992: {
        slidesPerView: 6,
        // spaceBetween: 40
      }
    }

  });

  const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    // direction: 'vertical',
    loop: true, //бесконечно
    slidesPerView: 1,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  $("#review1").on('click', function() {

    $.fancybox.open([
      {
        src  : 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
        opts : {
          caption : 'First caption',
          thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
        }
      },
      {
        src  : 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
        opts : {
          caption : 'Second caption',
          thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : true
      }
    });
  
  });
})
