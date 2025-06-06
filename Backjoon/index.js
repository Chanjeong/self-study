let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const n = +input[0];
const group = input[1].trim().split(' ').map(Number);
const arr = new Array(n);

for (let i = 0; i < group.length; i++) {}
