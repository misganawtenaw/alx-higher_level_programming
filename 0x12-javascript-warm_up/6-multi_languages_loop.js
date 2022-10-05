#!/usr/bin/node

/*
Write a script that prints 3 lines: (like 1-multi_languages.js) but by using an array of string and a loop
    The first line: “C is fun”
    The second line: “Python is cool”
    The third line: “JavaScript is amazing”
    You must use console.log(...) to print all output
    You are not allowed to use var
    You are not allowed to use any if/else statement
*/

const array = ['C is fun', 'Python is cool', 'JavaScript is amazing'];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
