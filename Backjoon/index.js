let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [a, b, c, d, e, f] = input[0].split(' ').map(Number);

const x = (c * e - b * f) / (a * e - b * d);
const y = (a * f - c * d) / (a * e - b * d);

console.log(parseInt(x), parseInt(y));
