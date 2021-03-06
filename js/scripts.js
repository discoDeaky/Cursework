$(document).ready(function () {
  $(".hero").slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 2000,
  });
});

("use strict");
(function () {
  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add("back_to_top-show");
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove("back_to_top-show");
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -50);
      setTimeout(backToTop, 10);
    }
  }

  var goTopBtn = document.querySelector(".back_to_top");

  window.addEventListener("scroll", trackScroll);
  goTopBtn.addEventListener("click", backToTop);
})();
