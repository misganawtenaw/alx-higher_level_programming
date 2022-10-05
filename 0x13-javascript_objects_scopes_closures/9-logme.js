#!/usr/bin/node

const list = [];
let count;

exports.logMe = function (item) {
  count = list.push(item);
  console.log(`${count - 1}: ${item}`);
};
