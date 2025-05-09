let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
const student = input.slice(1).map(st => st.trim().split(' ').map(Number));

let max = -1;
let result;

for (let i = 0; i < student.length; i++) {
  let count = 0;
  for (let j = 0; j < student.length; j++) {
    for (let k = 0; k < n; k++) {
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
