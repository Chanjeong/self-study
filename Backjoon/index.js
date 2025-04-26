let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const number = input[1].trim().split(' ').map(Number);
const calc = input[2].trim().split(' ').map(Number);

let max = -Infinity;
let min = Infinity;

function dfs(idx, currentResult, plus, minus, multiply, divide) {
  if (idx === number.length) {
    max = Math.max(currentResult, max);
    min = Math.min(currentResult, min);
    return;
  }

  const nextNumber = number[idx];
  if (plus > 0)
    dfs(idx + 1, currentResult + nextNumber, plus - 1, minus, multiply, divide);
  if (minus > 0)
    dfs(idx + 1, currentResult - nextNumber, plus, minus - 1, multiply, divide);
  if (multiply > 0)
    dfs(idx + 1, currentResult * nextNumber, plus, minus, multiply - 1, divide);
  if (divide > 0) {
    // 나눗셈 처리: C++14 방식
    const temp =
      currentResult < 0
        ? -Math.trunc(Math.abs(currentResult) / nextNumber)
        : Math.floor(currentResult / nextNumber);
    dfs(idx + 1, temp, plus, minus, multiply, divide - 1);
  }
}
dfs(1, number[0], ...calc);
console.log(max);
console.log(min);
