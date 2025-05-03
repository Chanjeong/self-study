let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(' ').map(Number);
const array = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let result = [];
let output = [];

function dfs(depth, start) {
  if (depth === M) {
    output.push(result.join(' '));
    return;
  }

  for (let i = start; i < N; i++) {
    result.push(array[i]);
    dfs(depth + 1, i);
    result.pop();
  }
}

dfs(0, 0);
console.log(output.join('\n'));
