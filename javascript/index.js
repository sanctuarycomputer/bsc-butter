$(document).ready(function (){

  $('.slick-slider-content').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    nextArrow: $('#triangle-right'),
    prevArrow: $('#triangle-left')
  });

  $('.slick-slider-content').on('afterChange', function(){
    let $currentSlide = $('.slick-active')
    let currentSlideMethod = $currentSlide.attr('data-method')
    let $titles = $('.steps-information-title')
    $titles.each((index, title) => {
      let $title = $(title);
      if ($title.attr('data-method') === currentSlideMethod) {
        $title.addClass('active');
      } else {
        $title.removeClass('active');
      }
    });
  });
});
