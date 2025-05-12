let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const N = +input[0];

const student = input.slice(1).map(s => s.trim().split(' '));

let max = -Infinity;
let result = 0;
for (let i = 0; i < N; i++) {
  let count = 0;
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < 5; k++) {
      if (i === j) continue;
      if (student[i][k] === student[j][k]) {
        count += 1;
        break;
      }
    }
  }
  if (count > max) {
    max = count;
    result = i + 1;
  }
}
console.log(result);
