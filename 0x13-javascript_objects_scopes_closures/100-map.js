#!/usr/bin/node

const list = require('./100-data').list;
// const newList = list.map(x => x * list.indexOf(x));
const newList = list.map((element, index) => element * index);
/*
const newList = [];
for (let i = 0; i < list.length; i++) {
  newList[i] = list[i] * (i);
}
*/
console.log(list);
console.log(newList);
