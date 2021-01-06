var RunFn = (function () {
  var $carouselIcons = [
    '<i class="fal fa-chevron-left"></i>',
    '<i class="fal fa-chevron-right"></i>',
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
            mouseDrag: false,
            touchDrag: true,
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

  function tooltip(holder , hoverHolder){
    var h_tooltip = 0;
    var pad = 10;
    var x_mouse = 0; var y_mouse = 0;
    var wrap_left = 0;
    var wrap_right = 0;
    var wrap_top = 0;
    var wrap_bottom = 0;

    $(hoverHolder).mousemove(function(e){

      wrap_left = 0;
      wrap_top = $(window).scrollTop();
      wrap_bottom = $(window).height();
      wrap_right = $(window).width();
      x_mouse = e.pageX;
      y_mouse = e.pageY;


    
      if(x_mouse  > wrap_right) $(holder).css("left",x_mouse  - pad);
      else $(holder).css("left",x_mouse + pad);

      
      if(y_mouse  < wrap_top) $(holder).css("top",wrap_top);
      else $(holder).css("top",y_mouse - h_tooltip - pad);
       $(holder).show();

    });

    $(hoverHolder).mouseout(function(){
        $(holder).hide();
    });
}
  //show popup
  function showPopup(holder) {
    $(holder).click(function() {
      let a = $(this).attr('data-holder');
      $(".bg-opacity").fadeIn();
      $("#" + a).fadeIn();
      $("#" + a).find(".modal-body").addClass("open");
      $("#" + a).find(".js-steps-slider").slick('setPosition');
      $('body').toggleClass('modal-open');
    })
  }

  //close popup:
  function closePopup(holder) {
    $('body').toggleClass('modal-open');
    $(".preview-theme").fadeOut();
    $(".bg-opacity").fadeOut();
    
  }
  return {
    runnCarousel: runnCarousel,
    syncOwl: syncOwl,
    menuscroll: menuscroll,
    backTop: backTop,
    mmenu: mmenu,
    changeImgProduct : changeImgProduct ,
    changeConfig : changeConfig ,
    boxSearch : boxSearch,
    chooseBank : chooseBank,
    tooltip : tooltip,
    showPopup: showPopup ,
    closePopup : closePopup
  };
})();
