import './img/logo.svg'
import './header.styl'

$('.menu-hamburger').on('click', function() {
  $('.header-menu__list').toggleClass('header-menu__list_active');
  $('.menu-hamburger').toggleClass('menu-hamburger__close');
})

$(document).on('click', function(e) {
  const gamburger = $(e.target).closest('.menu-hamburger');
  const gamburgerClose = $('.menu-hamburger__close');
  if(!gamburgerClose.length || gamburger.length) {
    return false;
  }
  const popup = $(e.target).closest('.header-menu__list_active');
  if(!popup.length) {
    $('.header-menu__list').removeClass('header-menu__list_active');
    $('.menu-hamburger').removeClass('menu-hamburger__close');
  }
})