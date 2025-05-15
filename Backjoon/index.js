let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let [A, B, N] = input[0].trim().split(' ').map(Number);
let result = 0;

A = A % B;

for (let i = 0; i < N; i++) {
  A = A * 10;
  result = Math.floor(A / B);
  A %= B;
}

console.log(result);
