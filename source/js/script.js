'use strict';

// Бургер-меню
var nav = document.querySelector('.nav');
var navList = nav.querySelector('.nav__list');
var navItems = nav.querySelectorAll('.nav__item');
var navLinks = nav.querySelectorAll('.nav__link');
var logo = nav.querySelector('.nav__logo');
var burger = nav.querySelector('.nav__burger');

nav.classList.remove('nav--nojs');
nav.classList.remove('header__nav--nojs');
navList.classList.remove('nav__list--nojs');

for (var i = 0; i < navItems.length; i++) {
  navItems[i].classList.remove('nav__item--nojs');
}

for (var k = 0; k < navLinks.length; k++) {
  navLinks[k].classList.remove('nav__link--nojs');
}

burger.classList.remove('nav__burger--nojs');

burger.addEventListener('click', function () {
  if (burger.classList.contains('nav__burger--cross')) {
    burger.classList.remove('nav__burger--cross');
    nav.classList.remove('header__nav--js');
    nav.classList.remove('nav--js');
    logo.classList.remove('nav__logo--js');
    navList.classList.remove('nav__list--js');

  } else {
    burger.classList.add('nav__burger--cross');
    nav.classList.add('header__nav--js');
    nav.classList.add('nav--js');
    logo.classList.add('nav__logo--js');
    navList.classList.add('nav__list--js');
  }
});

// Табы
document.querySelectorAll('.tabs__country').forEach((item) =>
  item.addEventListener('click', function (elem) {
    elem.preventDefault();
    var id = elem.target.getAttribute('href').replace('#', '');

    document.querySelectorAll('.tabs__info').forEach(
      (child) => child.classList.remove('tabs__info--active'));

    document.getElementById(id).classList.add('tabs__info--active')
  }));

// Local Storage
var submitForm = document.querySelector('.purchase__submit');
var userPhone = document.querySelector('#user-phone');
var userEmail = document.querySelector('#user-email');
var isStorageSupport = true;
var storagePhone = '';
var storageEmail = '';

try {
  storagePhone = localStorage.getItem('phone');
  storageEmail = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
  console.log(666)
}

// Купить тур

var trigger = document.querySelectorAll('.tariffs__button');
var purchase = document.querySelector('.purchase');

trigger.forEach((item) =>
  item.addEventListener('click', function (elem) {
    elem.preventDefault();
    purchase.classList.add('body__modal--active');
    if (storagePhone && storageEmail) {
        userPhone.value = storagePhone;
        userEmail.value = storageEmail;
        userPhone.focus();
    } else {
      userPhone.focus();
    }
}));

var closePurchase = document.querySelector('.purchase__close');

closePurchase.addEventListener('click', function (elem) {
  elem.preventDefault();
  purchase.classList.remove('body__modal--active');
})

window.addEventListener('keydown', function (evt) {
  if (evt.key === `Escape`) {
    if (purchase.classList.contains('body__modal--active')) {
      evt.preventDefault();
      purchase.classList.remove('body__modal--active');
    }
  }
});

// "Отзыв"
var success = document.querySelector('.success');
var closeSuccess = document.querySelector('.success__close');
var formSubmit = document.querySelector('.form__submit');

formSubmit.addEventListener('click', function (elem) {
  elem.preventDefault();
  success.classList.add('body__modal--active');
});

closeSuccess.addEventListener('click', function (elem) {
  elem.preventDefault();
  success.classList.remove('body__modal--active');
})

window.addEventListener('keydown', function (evt) {
  if (evt.key === `Escape`) {
    if (success.classList.contains('body__modal--active')) {
      evt.preventDefault();
      success.classList.remove('body__modal--active');
    }
  }
});
