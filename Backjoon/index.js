let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

const N = +input[0];
let dp = Array(1001).fill(false);

dp[0] = true;
dp[1] = false;
dp[2] = true;
dp[3] = false;

for (let i = 4; i <= N; i++) {
  if (!dp[i - 1] || !dp[i - 3]) {
    dp[i] = true;
  } else {
    dp[i] = false;
  }
}

console.log(dp[N] ? 'SK' : 'CY');
