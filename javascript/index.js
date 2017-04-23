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
    let $slidingBarTitles = $('.middle-title')
    $titles.each((index, title) => {
      let $title = $(title);
      if ($title.attr('data-method') === currentSlideMethod) {
        $title.addClass('active');
      } else {
        $title.removeClass('active');
      }
    });
    /*
    $slidingBarTitles.each((index, slidingBarTitle) => {
      let $slidingBarTitle = $(slidingBarTitle);
      if ($slidingBarTitle.attr('data-method') === currentSlideMethod) {
        animation2();
        $slidingBarTitle.addClass('active')
      } else{
        animation1();
        $slidingBarTitle.removeClass('active')
      }
    });
    */
  });

  /*
  var el = document.getElementById("sliding-underline")
  function animation1(){
    dynamics.animate(el, {
      translateX: -100,
    }, {
      type: dynamics.spring,
      frequency: 100,
      friction: 200,
      duration: 1500,
    })
  }
  animation1();
  function animation2(){
    dynamics.animate(el, {
      translateX: 100,
    }, {
      type: dynamics.spring,
      frequency: 100,
      friction: 200,
      duration: 1500,
    })
  }
  */
});
