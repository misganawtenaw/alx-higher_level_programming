#!/usr/bin/node

/*
Write a script that prints the addition of 2 integers
    The first argument is the first integer
    The second argument is the second integer
    You have to define a function with this prototype: function add(a, b)
*/
const argv = process.argv;
// Passed arguments start from index: 2
const arg1 = parseInt(argv[2]);
const arg2 = parseInt(argv[3]);

function add (a, b) {
  console.log(a + b);
}

add(arg1, arg2);
