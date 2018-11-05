var navMain = document.querySelector('.site-navigation');
var navToggle = document.querySelector('.site-navigation__toggle');

navMain.classList.remove('site-navigation--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('site-navigation--closed')) {
    navMain.classList.remove('site-navigation--closed');
    navMain.classList.add('site-navigation--open');
  } else {
    navMain.classList.add('site-navigation--closed');
    navMain.classList.remove('site-navigation--open');
  }
});
