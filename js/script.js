$(function () {
  // 스크롤 시 header fade-in
  $(document).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $("#header").removeClass("deactive");
      $("#header").addClass("active");
    } else {
      $("#header").removeClass("active");
      $("#header").addClass("deactive");
    }
  });
});

const swiper = new Swiper(".product_swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,

  // If we need pagination
  pagination: {
    el: ".product_swiper_pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".product_swiper_next_btn",
    prevEl: ".product_swiper_prev_btn",
  },
});

const main_ad_swiper = new Swiper(".main_slide_ad", {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: "#main_slide_ad_next_btn",
    prevEl: "#main_slide_ad_prev_btn",
  },
  pagination: {
    el: "#main_slide_ad_pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

const brand_swiper = new Swiper(".main_brand_slide", {
  // Optional parameters
  direction: "horizontal",
  speed: 900,
  freeMode: true,
  slidesPerView: "auto",
  freeModeMomentum: true,
  draggable: false,
  scrollbar: {
    el: ".swiper-scrollbar",
    dragSize: 240,
    draggable: true,
  },
});


const main_review_swiper = new Swiper(".main_bestReview_content", {
  direction: "horizontal",
  loop: false,

  pagination: {
    el: ".swiper-pagination",
  },
});

const main_magazine_swiper = new Swiper(".main_magazine_thumList", {
  direction: "horizontal",
  speed: 900,
  freeMode: true,
  slidesPerView: "auto",
  freeModeMomentum: true,
  draggable: false,
  scrollbar: {
    el: ".swiper-scrollbar",
    dragSize: 240,
    draggable: true,
  },
});
