let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

let res = [];
for (let i = 1; i < input.length - 1; i++) {
  res.push(+input[i + 1] - +input[i]);
}

let commonGcd = res[0];
for (let i = 1; i < res.length; i++) {
  commonGcd = gcd(commonGcd, res[i]);
}
let ans = 0;
for (let i = 0; i < res.length; i++) {
  ans += res[i] / commonGcd - 1;
}
console.log(ans);
