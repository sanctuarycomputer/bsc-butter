(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {
  $('.slick-slider-content').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    nextArrow: $('#triangle-right'),
    prevArrow: $('#triangle-left')
  });
  $('#triangle-left').css("display", "none");
  $('.slick-slider-content').on('afterChange', function () {
    var currentSlide = $('.slick-slider-content').slick('slickCurrentSlide');
    var index = $('.slick-slide').length;

    if (currentSlide === 0) {
      $('#triangle-left').css("display", "none");
    } else {
      $('#triangle-left').css("display", "block");
    }
    if (currentSlide + 1 === index) {
      $('#triangle-right').css("display", "none");
    } else {
      $('#triangle-right').css("display", "block");
    }

    var titles = document.querySelectorAll('.steps-information-title ');

    titles.forEach(function (title) {
      title.style.display = 'none';
    });

    titles[currentSlide].style.display = 'inline-block';
    // for(var i = 0; i <title.length; i++) {
    //   let currentTitle = title[i];
    //   if(currentTitle.dataset.index === (currentSlide+1)){
    //     currentTitle.style.opacity = "1";
    //   }else{
    //     currentTitle.style.opacity = "0";
    //   }
    //   console.log(currentTitle, (currentSlide+1))
    // }
  });
});

},{}]},{},[1]);
