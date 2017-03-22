$(document).ready(function (){
  $('.slick-slider-content').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    nextArrow: $('#triangle-right'),
    prevArrow: $('#triangle-left')
  });
  $('#triangle-left').css("display","none");
  $('.slick-slider-content').on('afterChange', function(){
    let currentSlide = $('.slick-slider-content').slick('slickCurrentSlide');
    let index = $('.slick-slide').length;

    if (currentSlide === 0){
      $('#triangle-left').css("display","none");
    }else{
      $('#triangle-left').css("display","block");
    }
    if ((currentSlide + 1 )=== index){
      $('#triangle-right').css("display","none");
    }else{
      $('#triangle-right').css("display","block");
    }

    let titles = document.querySelectorAll('.steps-information-title ');

    titles.forEach((title) => {
      title.style.display = 'none';
    });

    titles[currentSlide].style.display = 'inline-block';
    // for(var i = 0; i <title.length; i++) {
    //   let currentTitle = title[i];
    //   if(currentTitle.dataset.index === (currentSlide+1)){
    //     currentTitle.style.opacity = "1";
    //   }else{
    //     currentTitle.style.opacity = "0";
    //   }
    //   console.log(currentTitle, (currentSlide+1))
    // }
  });
});
