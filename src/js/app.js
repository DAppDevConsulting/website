import "slick-carousel/slick/slick";
import "bootstrap/js/dist/util";
import "bootstrap/js/dist/modal";
import "bootstrap/js/dist/scrollspy";
import "jquery-easing";



$(document).ready(function () {

  // BEGIN Sliders
  $(".js-slider-testimonials").slick({
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }

    ]
  });

  $(".js-slider-technologies").slick({
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    dots: false,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }

    ]
  });
  // END Sliders


  // BEGIN Header
  $(function () {
    const Breakpoint = 1024;
    let $html = $('html');

    const handleHeader = (event) => {
      const $this = $(event.target) || $(event);
      const headerClass = '.js-m-header';
      const stickyClass = 'm-header_sticky';

      if (window.innerWidth >= Breakpoint) {
        if ($this.scrollTop() > 515) {
          $(headerClass).addClass(stickyClass);
        } else {
          $(headerClass).removeClass(stickyClass);
        }
      } else {
        $(headerClass).removeClass(stickyClass);
      }
    };

    $('.js-menu-toggle').on('click', () => {
      if ($html.hasClass('noscroll')) {
        $html.removeClass('noscroll');
        return;
      }

      $html.addClass('noscroll');

    });

    $(window).on('resize', () => {
      if ($html.hasClass('noscroll') && window.innerWidth >= breakpoint) {
        $html.removeClass('noscroll');
      }

      handleHeader(window);
    });

    $(window).on('scroll', handleHeader);
  });
  // END Header


  // BEGIN Header scroll
  (function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('#pageNav a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#pageNav',
      offset: 300
    });

  })(jQuery);
  // END Header scroll


});
