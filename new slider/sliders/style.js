$(document).ready(function () {
  $(".swiper-filter").on("click", "a", function () {
    var filter = $(this).attr("data-filter");

    $(".swiper-product .swiper-slide").css("display", "none");
    $(".swiper-product .swiper-slide" + filter).css("display", "");
    $(".swiper-filter a").removeClass("swiper-active");
    $(this).addClass("swiper-active");

    productSwiper.updateSize();
    productSwiper.updateSlides();
    productSwiper.updateProgress();
    productSwiper.updateSlidesClasses();
    productSwiper.slideTo(0);
    productSwiper.scrollbar.updateSize();

    return false;
  });

  var filterSwiper = new Swiper(".swiper-filter", {
    slidesPerView: 4,
    spaceBetween: 30,
  });

  var productSwiper = new Swiper(".swiper-product", {
    /*grabCursor: true,*/
    observer: true,
    slidesPerView: 3.2,
    runCallbacksOnInit: true,
    observer: true,
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      snapOnRelease: true,
    },
    scrollbarHide: false,
    updateOnImagesReady: true,
  });
});
