let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const memo = Array.from({ length: 31 }, () => Array(31).fill(0));

function combination(n, r) {
  if (memo[n][r]) return memo[n][r];
  if (n === r || r === 0) return 1;
  return (memo[n][r] = combination(n - 1, r - 1) + combination(n - 1, r));
}
for (let i = 1; i < input.length; i++) {
  const [N, M] = input[i].trim().split(' ').map(Number);
  console.log(combination(M, N));
}
