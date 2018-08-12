import "bootstrap/js/dist/util";
import "bootstrap/js/dist/scrollspy";
import "bootstrap/js/dist/collapse";
import "jquery-easing";
import runAnalytics from "./analytics";

$(document).ready(function () {

  // BEGIN Header
  $(function () {
    const Breakpoint = 1024;
    let $html = $('html');

    const handleHeader = event => {
      const $this = $(event.target) || $(event);
      const headerClass = '.js-m-header';
      const stickyClass = 'm-header_sticky';

      if (window.innerWidth >= Breakpoint) {
        if ($this.scrollTop() > 50) {
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

    const handleBody = event => {
      const $this = $(event.target) || $(event);

      if ($this.scrollTop() > 50) {
        $('body').addClass('is-scrolled')
      } else {
        $('body').removeClass('is-scrolled');
      }
    };

    $(window).on('scroll', event => {
      handleHeader(event);
      handleBody(event);
    });
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

  const initMap = () => {
    const mapContainer = document.querySelector('.contacts__map');

    if (mapContainer) {
      const izo = { lat: 50.4765582, lng: 30.503495816 };

      const mapOptions = {
        zoom: 15,
        center: izo
      };

      const map = new google.maps.Map(mapContainer, mapOptions);

      const marker = new google.maps.Marker({
        position: izo,
        map
      })
    }
  };

  initMap();

  runAnalytics();

});