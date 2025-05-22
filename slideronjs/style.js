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

    return false;
  });

  var filterSwiper = new Swiper(".swiper-filter", {
    slidesPerView: "auto",
    spaceBetween: 20,
  });

  var productSwiper = new Swiper(".swiper-product", {
    observer: true,
    // slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      delay: 1000, // Slide every 3 seconds
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
});
