var RunFn = (function () {
  var $carouselIcons = [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>',
  ];
  function runnCarousel(holder) {
    var $carousel = $(holder);
    if (!$().owlCarousel) {
      console.log("carousel: owlCarousel plugin is missing.");
      return true;
    }
    if ($carousel.length > 0) {
      $carousel.each(function () {
        var elem = $(this),
          carouselNav = elem.attr("data-arrows"),
          touchDrag = elem.attr("data-touch"),
          carouselDots = elem.attr("data-dots") || true,
          carouseldotsData = elem.attr("data-dotsData") || false,
          carouselAutoPlay = elem.attr("data-autoplay") || false,
          carouselAutoplayTimeout = elem.attr("data-autoplay-timeout") || 3000,
          carouselAutoWidth = elem.attr("data-auto-width") || false,
          resizeHeight = elem.attr("auto-height") || false,
          carouseAnimateIn = elem.attr("data-animate-in") || false,
          carouseAnimateOut = elem.attr("data-animate-out") || false,
          carouselLoop = elem.attr("data-loop") || false,
          carouselMargin = elem.attr("data-margin") || 0,
          carouselVideo = elem.attr("data-video") || false,
          carouselItems = elem.attr("data-items") || 4,
          carouselSlideBy = elem.attr("data-slideBy") || 1,
          centerMode = elem.attr("data-center") || false,
          carouselItemsLg = elem.attr("data-items-lg") || Number(carouselItems),
          carouselItemsMd =
            elem.attr("data-items-md") || Number(carouselItemsLg),
          carouselItemsSm =
            elem.attr("data-items-sm") || Number(carouselItemsMd),
          carouselItemsXs =
            elem.attr("data-items-xs") || Number(carouselItemsSm),
          carouselItemsXxs =
            elem.attr("data-items-xxs") || Number(carouselItemsXs);
        if (carouselItemsMd >= 3) {
          var carouselItemsSm = elem.attr("data-items-sm") || Number(2);
        }
        if (carouselItemsSm >= 2) {
          var carouselItemsXs = elem.attr("data-items-xs") || Number(2);
        }
        if (carouselItemsXs >= 1) {
          var carouselItemsXxs = elem.attr("data-items-xxs") || Number(1);
        }
        if (carouselNav == "false") {
          carouselNav = false;
        } else {
          carouselNav = true;
        }
        if (carouselDots == "false") {
          carouselDots = false;
        } else {
          carouselDots = true;
        }
        if (carouseldotsData == "true") {
          carouseldotsData = true;
        } else {
          carouseldotsData = false;
        }
        if (carouselAutoPlay == "false") {
          carouselAutoPlay = false;
        }
        var t = setTimeout(function () {
          elem.owlCarousel({
            nav: carouselNav,
            dots: carouselDots,
            dotsData: carouseldotsData,
            thumbs: true,
            thumbsPrerendered: true,
            navText: $carouselIcons,
            autoplay: carouselAutoPlay,
            autoplayTimeout: carouselAutoplayTimeout,
            autoplayHoverPause: true,
            autoWidth: carouselAutoWidth,
            autoHeight: resizeHeight,
            loop: carouselLoop,
            margin: Number(carouselMargin),
            smartSpeed: Number(800),
            video: carouselVideo,
            slideBy: Number(carouselSlideBy),
            animateIn: carouseAnimateIn,
            animateOut: carouseAnimateOut,
            video: true,
            center: centerMode,
            lazyLoad: true,
            videoWidth: true,
            videoHeight: true,
            touchDrag: touchDrag,
            mouseDrag: touchDrag,
            onInitialize: function (event) {
              // setTimeout(function () {
              elem.addClass("owl-carousel owl-theme");
              //    }, 1000);
            },
            responsive: {
              0: {
                items: Number(carouselItemsXxs),
              },
              480: {
                items: Number(carouselItemsXs),
              },
              768: {
                items: Number(carouselItemsSm),
              },
              992: {
                items: Number(carouselItemsMd),
              },
              1200: {
                items: Number(carouselItemsLg),
              },
            },
          });
        }, 0);
      });
    }
  }
  function syncOwl(slider_1, slider_2) {
    var sync1 = $(slider_1);
    var sync2 = $(slider_2);

    var thumbnailItemClass = ".owl-item";

    var slides = sync1
      .owlCarousel({
        autoplayHoverPause: true,
        video: true,
        startPosition: 12,
        items: 1,
        loop: true,
        margin: 10,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplayHoverPause: false,
        nav: false,
        dots: false,
      })
      .on("changed.owl.carousel", syncPosition);

    function syncPosition(el) {
      $owl_slider = $(this).data("owl.carousel");
      var loop = $owl_slider.options.loop;

      if (loop) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
        if (current < 0) {
          current = count;
        }
        if (current > count) {
          current = 0;
        }
      } else {
        var current = el.item.index;
      }

      var owl_thumbnail = sync2.data("owl.carousel");
      var itemClass = "." + owl_thumbnail.options.itemClass;

      var thumbnailCurrentItem = sync2
        .find(itemClass)
        .removeClass("synced")
        .eq(current);

      thumbnailCurrentItem.addClass("synced");

      if (!thumbnailCurrentItem.hasClass("active")) {
        var duration = 300;
        sync2.trigger("to.owl.carousel", [current, duration, true]);
      }
    }
    var thumbs = sync2
      .owlCarousel({
        autoplayHoverPause: true,
        startPosition: 12,
        items: 4,
        loop: false,
        margin: 10,
        autoplay: false,
        nav: false,
        dots: false,
        onInitialized: function (e) {
          var thumbnailCurrentItem = $(e.target)
            .find(thumbnailItemClass)
            .eq(this._current);
          thumbnailCurrentItem.addClass("synced");
        },
      })
      .on("click", thumbnailItemClass, function (e) {
        e.preventDefault();
        var duration = 300;
        var itemIndex = $(e.target).parents(thumbnailItemClass).index();
        sync1.trigger("to.owl.carousel", [itemIndex, duration, true]);
      })
      .on("changed.owl.carousel", function (el) {
        var number = el.item.index;
        $owl_slider = sync1.data("owl.carousel");
        $owl_slider.to(number, 100, true);
      });
  }
  function menuscroll(menuItem) {
    $(menuItem).click(function (event) {
      event.preventDefault();

      var defaultAnchorOffset = 0;

      var anchor = $(this).attr("data-id");

      $("html,body").animate(
        {
          scrollTop: $("#" + anchor).offset().top - 130,
        },
        500
      );
    });
  }

  function backTop(btnScrollTop) {
    $(window).scroll(function () {
      var scrollTop = $(document).scrollTop();
      if (scrollTop > 200) {
        $(btnScrollTop).show("fast");
      } else {
        $(btnScrollTop).hide("fast");
      }
    });

    $(btnScrollTop).click(function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, "slow");
    });
  }
  function mmenu(mmenuItems) {
    $(mmenuItems).mmenu();
  }
  function hoverMenu() {
    $(".menu-cat").hover(
      function () {
        $('.ovelay').show();
      }, function () {
        $('.ovelay').hide();
      }
    );
  }
  function dropSearch() {
    $('.drop-cat-search').click(function () {
      $('.list-cat-search').toggleClass('active');
    });
    $(document).mouseup(function (e) {
      var container = $(".drop-search");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.list-cat-search').removeClass('active');
      }
    });
  }

  function changeCateSearch() {
    $('.list-cat-search a').click(function() {
       let cateSearch = $(this).text();

       // thay doi text
       $('.drop-cat-search').text(cateSearch);
    })
  }

  function menuSticky() {
    // grab the initial top offset of the navigation 
    var stickyNavTop = 400;

    // our function that decides weather the navigation bar should have "fixed" css position or not.
    var stickyNav = function () {
      var scrollTop = $(window).scrollTop(); // our current vertical position from the top

      // if we've scrolled more than the navigation, change its position to fixed to stick to top,
      // otherwise change it back to relative
      if (scrollTop > stickyNavTop) {
        $('.header').addClass('sticky');
        $('.menu-fixed').addClass('show-menu-sticky');
        $('.js-menu-fixed').removeClass('active');
      } else {
        $('.header').removeClass('sticky');
        $('.menu-fixed').removeClass('show-menu-sticky');
      }
    };

    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function () {
      stickyNav();
    });
  }

  function showFixed(){
    $('.btn-cat-fixed').click( function(e){
      $('.js-menu-fixed').toggleClass('active');
      e.preventDefault()
    });

    $(document).mouseup(function (e) {
      var container = $(".show-menu-sticky");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.show-menu-sticky .js-menu-fixed').removeClass('active');
      }
    });
  }
  function changeImgProduct(){
    $('#product-slider-img img').click(function (e) {
      e.preventDefault();
      var ths = $(this).attr('data-img');
      $('.large-image .checkurl').attr('src', ths);
      var thumbLargeimg = $('.product-detail-left .large-image img').attr('src');
      console.log(thumbLargeimg);
      $('#product-slider-img .owl-item .item').each(function () {
        var srcimage = $(this).find('a img').attr('data-img');
        if (srcimage == thumbLargeimg) {
          $(this).find('a').addClass('active');
        } else {
          $(this).find('a').removeClass('active');
        }
      });
    })
  }
  function changeConfig(holder){
    $(holder).on('click', function() {
      $(holder).removeClass('active');
      $(this).addClass('active');
    })
  }
  function boxSearch(click){
    $(click).click(function(){
      $(this).parent().toggleClass('active');

    })
  }
  function chooseBank(holder){
    $(holder).click(function() {

      $(this).parent().find('a').removeClass('active');
      $(this).addClass('active');
    })
  }
  function menuMobile(){
    $('.btn-toggle-menu').click(function(){
      $('.main-menu').stop().toggle(100);
      $('.ovelay').stop().toggle();
      $('.search-main').stop().hide();
    });
    $('.has-sub').click(function(e){
      $(this).children('.sub-menu').stop().toggle(100);
      $(this).toggleClass('active');
      e.preventDefault();
      e.stopImmediatePropagation();
    });
  }
  function showSeachM(){
    $('.btn-seach-mobile').click(function (){
      $('.search-main').stop().toggle();
      $('.main-menu').stop().hide();
    });
  }
  function scrollTo(holder){
    $('html,body').animate({
      scrollTop: $(holder).offset().top - 100
    }, 'slow');
  }
  function formatCurrency(a) {
    var b = parseFloat(a).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1.").toString();
    var len = b.length;
    b = b.substring(0, len - 3);
    return b;
  }
  return {
    runnCarousel: runnCarousel,
    syncOwl: syncOwl,
    menuscroll: menuscroll,
    backTop: backTop,
    mmenu: mmenu,
    hoverMenu: hoverMenu,
    dropSearch: dropSearch,
    menuSticky: menuSticky,
    showFixed: showFixed,
    changeImgProduct : changeImgProduct ,
    changeConfig : changeConfig ,
    boxSearch : boxSearch,
    chooseBank : chooseBank,
    menuMobile: menuMobile,
    showSeachM: showSeachM,  
    scrollTo : scrollTo,
    changeCateSearch : changeCateSearch,
    formatCurrency : formatCurrency
  };
})();

$(window).bind('load', function () {
  RunFn.dropSearch();
  RunFn.menuSticky();
  RunFn.showFixed();
  RunFn.hoverMenu();
  RunFn.menuMobile();
  RunFn.showSeachM();
  RunFn.changeCateSearch();
})
