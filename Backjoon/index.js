let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [A, B] = input.map(Number);

function isPrime(n) {
  if (n < 2) return false; // 1은 소수가 아님
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

let res = [];
for (let i = A; i <= B; i++) {
  if (isPrime(i)) res.push(i);
}

if (res.length === 0) {
  console.log(-1);
} else {
  console.log(res.reduce((acc, cum) => acc + cum, 0));
  console.log(res[0]);
}
