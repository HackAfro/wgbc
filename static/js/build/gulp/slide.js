(function() {
  'use strict';

  const prevArrow = `<div class="cursor-pointer">
                        <img src="static/imgs/left.svg" alt="" class="mr-4 slide-trigger">
                     </div>`;
  const nextArrow = `<div class="cursor-pointer">
                        <img src="static/imgs/right.svg" alt="" class="slide-trigger">
                     </div>`;
  const arrowContainers = $('.slide-button-container');

  const options = {
    prevArrow,
    nextArrow,
    appendArrows: arrowContainers,
    lazyLoad: 'ondemand',
    autoplay: true,
    autoplaySpeed: 4000, 
    infinite: true,
  };

  $('.carousel').slick(options);
  console.log('fire');
})();
