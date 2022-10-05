#!/usr/bin/node

exports.converter = function (base) {
  this.base = base;
  return function (number) {
    return number.toString(this.base);
  };
};
