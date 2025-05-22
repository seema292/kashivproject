var slider = new Swiper(".gallery-slider", {
  slidesPerView: 1,
  loop: true,
  loopedSlides: 6,
  noSwiping: true,
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    thresholdDelta: 70,
  },
  noSwipingClass: "swiper-slide",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var thumbs = new Swiper(".gallery-thumbs", {
  slidesPerView: "auto",
  spaceBetween: 10,
  centeredSlides: false,
  loop: true,
  slideToClickedSlide: true,
});

slider.controller.control = thumbs;
thumbs.controller.control = slider;

/*
inspiration 
https://dribbble.com/shots/4675498-Photography-Website/attachments/10530248?mode=media
*/
