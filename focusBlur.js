$(document).ready(function(){

    $(function() {
       $(window).scroll(function () {
         if ($(this).scrollTop() == 0) {
           $('img').css('opacity','0');
           $('img').css('pointer-events','none');
           $('.title').css('opacity','1');
           $('.circle').css('opacity','1');
         }
          else if ($(this).scrollTop() > 0 && $(this).scrollTop() < 300) {
            $('img').css('filter','blur(10px)');
            $('img').css('-webkit-filter','blur(10px)');
            $('img').css('opacity','1');
            $('img').css('pointer-events','auto');
            $('.title').css('opacity','0');
            $('.circle').css('opacity','0');
          }
          else if ($(this).scrollTop() < 600) {
            $('img').css('filter','blur(8px)');
            $('img').css('-webkit-filter','blur(8px)');
          }
          else if ($(this).scrollTop() < 900) {
            $('img').css('filter','blur(6px)');
            $('img').css('-webkit-filter','blur(6px)');
          }
          else if ($(this).scrollTop() < 1200) {
            $('img').css('filter','blur(4px)');
            $('img').css('-webkit-filter','blur(4px)');
          }
          else if ($(this).scrollTop() < 1500) {
            $('img').css('filter','blur(2px)');
            $('img').css('-webkit-filter','blur(2px)');
          }
          else if ($(this).scrollTop() < 1800) {
            $('img').css('filter','blur(0px)');
            $('img').css('-webkit-filter','blur(0px)');
          }
          else if ($(this).scrollTop() < 2100) {
            $('img').css('filter','blur(2px)');
            $('img').css('-webkit-filter','blur(2px)');
          }
          else if ($(this).scrollTop() < 2400) {
            $('img').css('filter','blur(4px)');
            $('img').css('-webkit-filter','blur(4px)');
          }
          else if ($(this).scrollTop() < 2700) {
            $('img').css('filter','blur(6px)');
            $('img').css('-webkit-filter','blur(6px)');
          }
          else if ($(this).scrollTop() < 3000) {
            $('img').css('filter','blur(8px)');
            $('img').css('-webkit-filter','blur(8px)');
            $('img').css('opacity','1');
            $('img').css('pointer-events','auto');
            $('.title').css('opacity','0');
            $('.circle').css('opacity','0');
          }
          else if ($(this).scrollTop() > 3000){
            $('img').css('filter','blur(10px)');
            $('img').css('-webkit-filter','blur(10px)');
            $('img').css('opacity','0');
            $('img').css('pointer-events','none');
            $('.title').css('opacity','1');
            $('.circle').css('opacity','1');
          }
          else {
            $('img').css('opacity','1');
          }
       });
    });
  
  });