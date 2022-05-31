$(document).ready(function () {
  $(".home-product-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
  });
  $('#click_btn').on("click", function(){  //вешаем событие на клик по кнопке id="btn1"
    $('#menu').toggle(); //включает/выключает элемент id="text"
  });
  $('#dropbtn').on("click", function(){  //вешаем событие на клик по кнопке id="btn1"
    $('#dropdown').toggle(); //включает/выключает элемент id="text"
  });
  $('.questions__acc-link').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass('questions__acc-link--active')
    $(this).children('.questions__acc-text').slideToggle()
  });
  $('.questions__acc-link').on('click', function (e) {
    e.preventDefault()
    $(this).addClass('bg-black');
  });
  $('#click').on('click', function() {
    $('#click').css('background', '#3597D0');
    });
    $('#click-2').on('click', function() {
    $('#click-2').css('background', '#3597D0');
    });
    $('#click-3').on('click', function() {
    $('#click-3').css('background', '#3597D0');
    });
    $('#click-4').on('click', function() {
    $('#click-4').css('background', '#3597D0');
    });
    $('#click-5').on('click', function() {
    $('#click-5').css('background', '#3597D0');
    });
    $('#click-6').on('click', function() {
    $('#click-6').css('background', '#3597D0');
    });
    $('#click-7').on('click', function() {
    $('#click-7').css('background', '#3597D0');
    });
});

