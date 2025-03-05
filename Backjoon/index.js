let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [x, y, w, h] = input[0].split(' ').map(Number);
console.log(x, y, w, h);
console.log(Math.min(w - x, x, h - y, y));
