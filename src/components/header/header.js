import './img/logo.svg'
import './header.styl'

$('.menu-hamburger').on('click', function () {
  $('.header-menu__list').toggleClass('header-menu__list_active');
  $('.menu-hamburger').toggleClass('menu-hamburger__close');
})