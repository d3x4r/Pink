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

var formContest = document.querySelector("form");
var secondName = document.querySelector(".form__user-input--second-name");
var firstName = document.querySelector(".form__user-input--first-name");
var mail = document.querySelector(".form__contact-input--mail");
var modalError = document.querySelector(".modal--failure");
var modalSucces = document.querySelector(".modal--succes");
var modalCloseError = document.querySelector(".modal__button--failure");
var modalCloseSucces = document.querySelector(".modal__button--succes");

if (formContest) {

modalCloseError.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalError.classList.add("modal--close");
});

modalCloseSucces.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalSucces.classList.add("modal--close");
});

formContest.addEventListener("submit", function (evt) {
  if (!secondName.value || !firstName.value || !mail.value) {
    evt.preventDefault();
    modalError.classList.add("modal--show");
    modalError.classList.remove("modal--close");
  }
  else {
    evt.preventDefault();
    modalSucces.classList.add("modal--show");
    modalSucces.classList.remove("modal--close");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalError.classList.contains("modal--show")) {
      modalError.classList.remove("modal--show");
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalSucces.classList.contains("modal--show")) {
      modalSucces.classList.remove("modal--show");
    }
  }
});
}
