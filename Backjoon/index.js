let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, K] = input[0].trim().split(' ').map(Number);

let result = [];
function dfs(depth, ones) {
  if (depth === N) {
    console.log(result.join(''));
    return;
  }

  result.push('0');
  dfs(depth + 1, ones);
  result.pop();
  if (ones < K) {
    result.push('1');
    dfs(depth + 1, ones + 1);
    result.pop();
  }
}

dfs(0, 0);
