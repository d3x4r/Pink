var navMain = document.querySelector('.site-navigation');
var navToggle = document.querySelector('.site-navigation__toggle');

navMain.classList.remove('site-navigation--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('site-navigation--closed')) {
    navMain.classList.remove('site-navigation--closed');
    navMain.classList.add('site-navigation--open');
  } else {
    navMain.classList.add('site-navigation--closed');
    navMain.classList.remove('site-navigation--open');
  }
});

var form = document.querySelector("form");
var second_name = document.querySelector(".form__user-input--second-name");
var first_name = document.querySelector(".form__user-input--first-name");
var mail = document.querySelector(".form__contact-input--mail");
var modal_error = document.querySelector(".modal--failure");
var modal_ok = document.querySelector(".modal--succes");

var modal_close_failure = document.querySelector(".modal__button--failure");

var modal_close_ok = document.querySelector(".modal__button--succes");


modal_close_failure.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal_error.classList.add("modal--close");
});

modal_close_ok.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal_ok.classList.add("modal--close");
});

form.addEventListener("submit", function (evt) {
  if (!second_name.value || !first_name.value || !mail.value) {
    evt.preventDefault();
    modal_error.classList.add("modal--show");
    modal_error.classList.remove("modal--close");
    console.log("Нужно ввести логин и пароль");
  }
  else {
    evt.preventDefault();
    modal_ok.classList.add("modal--show");
    modal_ok.classList.remove("modal--close");
    console.log("123");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal_error.classList.contains("modal--show")) {
      modal_error.classList.remove("modal--show");
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal_ok.classList.contains("modal--show")) {
      modal_ok.classList.remove("modal--show");
    }
  }
});
