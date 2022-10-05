#!/usr/bin/node

const dict = require('./101-data').dict;
// console.log(dict);

const newKeys = new Set(Object.values(dict));
const newValues = Object.keys(dict);
const newDict = {};

for (const value of newKeys) {
  newDict[value] = [];
  // console.log(value);
  for (let i = 0; i < newValues.length; i++) {
    if (value === dict[newValues[i]]) {
      newDict[value].push(newValues[i]);
    }
  }
}
console.log(newDict);
