(function() {
  'use strict';

  const prevArrow = `<div class="cursor-pointer">
                        <img src="https://res.cloudinary.com/hackafro/image/upload/v1526809640/left_cqfgva.svg" alt="" class="mr-4 slide-trigger">
                     </div>`;
  const nextArrow = `<div class="cursor-pointer">
                        <img src="https://res.cloudinary.com/hackafro/image/upload/v1526809639/right_tz8o6l.svg" alt="" class="slide-trigger">
                     </div>`;
  const arrowContainers = $('.slide-button-container');
  const jobSlides = $('.job-slides');
  const options = {
    prevArrow,
    nextArrow,
    appendArrows: arrowContainers,
    lazyLoad: 'ondemand',
    autoplay: true,
    autoplaySpeed: 4000,
    infinite: true,
  };
  const jobOptions = {
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    draggable: false,
    autoplaySpeed: 4500,
    speed: 400,
    slidesToShow: 1,
  };
  const arrows = [...document.querySelectorAll('.arrow')];

  function moveSlide(e) {
    if (this.classList.contains('next')) {
      jobSlides.slick('slickNext');
    } else {
      jobSlides.slick('slickPrev');
    }
  }

  arrows.forEach((arrow) => arrow.addEventListener('click', moveSlide));
  try {
    jobSlides.slick(jobOptions);

    $('.carousel').slick(options);
  } catch (e) {}
})();
