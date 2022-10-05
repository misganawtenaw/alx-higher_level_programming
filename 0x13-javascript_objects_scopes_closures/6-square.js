#!/usr/bin/node

const Square5 = require('./5-square');

class Square extends Square5 {
  constructor (size) {
    super(size);
    this.size = size;
  }

  charPrint (c) {
    let ch = 'X';
    let char = '';
    if (c !== undefined) {
      ch = c;
    }

    for (let i = 0; i < this.width; i++) {
      char = char + ch;
    }
    for (let i = 0; i < this.height; i++) {
      console.log(char);
    }
  }
}

module.exports = Square;
