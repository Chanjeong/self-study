let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const MAX = 1000000;

const isPrime = Array(MAX + 1).fill(true);
isPrime[0] = false;
isPrime[1] = false;

for (let i = 2; i * i <= MAX; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= MAX; j += i) {
      isPrime[j] = false;
    }
  }
}

for (let i = 1; i < input.length; i++) {
  const num = +input[i];
  let count = 0;
  for (let a = 2; a <= num / 2; a++) {
    const b = num - a;
    if (isPrime[a] && isPrime[b]) {
      count += 1;
    }
  }
  console.log(count);
}
