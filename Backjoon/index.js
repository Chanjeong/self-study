let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

console.log(...input[1].split(' '));
