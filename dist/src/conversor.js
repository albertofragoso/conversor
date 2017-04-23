"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var mass = 0.45359237;

var convertKg = exports.convertKg = function convertKg() {
  for (var _len = arguments.length, kilogramos = Array(_len), _key = 0; _key < _len; _key++) {
    kilogramos[_key] = arguments[_key];
  }

  return kilogramos.map(function (kilogramo) {
    return (kilogramo / mass).toFixed(5);
  });
};

var convertLb = exports.convertLb = function convertLb() {
  for (var _len2 = arguments.length, pounds = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    pounds[_key2] = arguments[_key2];
  }

  return pounds.map(function (pound) {
    return (pound * mass).toFixed(5);
  });
};