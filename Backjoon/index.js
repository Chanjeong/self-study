let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

let N = +input[0];

let turn = true;

let dp = Array(1001).fill(0);

dp[0] = false;
dp[1] = true;
dp[2] = false;
dp[3] = true;

for (let i = 4; i <= N; i++) {
  if (!dp[i - 1] || !dp[i - 3]) {
    dp[i] = true;
  } else {
    dp[i] = false;
  }
}

console.log(dp[N] ? 'SK' : 'CY');
