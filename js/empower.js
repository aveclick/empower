$(function(){
  $('.header__burger').click(function(event){
  $('.header__burger, .header__menu').toggleClass('active');
  $('body').toggleClass('lock');
  });
  $('.header__menu__list a').click(function(event){
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});

$(function(){
var scrolling = $(".header__container");
$(window).scroll(function(){
  if ( $(this).scrollTop() >= 150){
    scrolling.addClass("scrolling");
  } else if($(this).scrollTop() <= 150 && scrolling.hasClass("scrolling")) {
    scrolling.removeClass("scrolling");
  }
  });
});
