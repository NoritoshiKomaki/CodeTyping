let word;
let loc;
let score;
let miss;
let startTime;
let testTimer;
let timeoutId;
let isPlaying = false;
let num = 0;
let elapsedTime = 0;
let cnt = 3;
let second = 0;
let number = 1;

const tab2 = '    ';
const tab3 = tab2 + '  ';
const tab4 = tab3 + '  ';
const tab5 = tab4 + '  ';
const tab6 = tab5 + '  ';

$(document).keydown(function (e) {
  if (e.keyCode == 32) {
    e.preventDefault();
    $(target).append(" ")
  }
});

$(function() {
  $('#head').text(
`<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <title>c-typing</title>
  </head>
  <body>`
  )
  
  $('.ranking').hover(
    function() {
      $(this).children('.dropdown').addClass('open');
    }, function() {
      $(this).children('.dropdown').removeClass('open');
    }
  );
  $('#retry').on('click', function() {
    location.reload();
  });
  $('#r-submit').on('click', function() {
    $('#r-string').text('登録が完了しました');
  });

  $(function(){
    $('#play').on('click',function(){
        $('.js-modal').fadeIn();
        return false;
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    });
});
})