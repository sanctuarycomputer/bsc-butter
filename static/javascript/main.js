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

  $('.slick-slider-content').on('afterChange', function () {
    var $currentSlide = $('.slick-active');
    var currentSlideMethod = $currentSlide.attr('data-method');
    var $titles = $('.steps-information-title');
    $titles.each(function (index, title) {
      var $title = $(title);
      if ($title.attr('data-method') === currentSlideMethod) {
        $title.addClass('active');
      } else {
        $title.removeClass('active');
      }
    });
  });
});

},{}]},{},[1]);
