$(function(){
  $(document).on("click", '#active', function(){
      $('.active').fadeIn();
  });
  $('.close').on('click',function(){
      $('.active').fadeOut();
  });
});