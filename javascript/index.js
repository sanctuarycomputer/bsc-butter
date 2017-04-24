$(document).ready(function (){
  $('.trigger').waypoint({
    offset: 1,
    handler(direction) {
      if (direction === 'down') {
        $('nav').addClass('active');
      } else {
        $('nav').removeClass('active');
      }
    }
  });
  $('.prompt').on('click', function() {
    $.smoothScroll({
      scrollTarget: $('.prompt')
    });
  });
});
