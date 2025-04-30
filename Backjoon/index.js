let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, A, operator] = input.map(v => v.split(' ').map(Number));

const calculator = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => ~~(a / b)
];

let max = -Infinity;
let min = Infinity;

const dfs = (count = 0, result = A[0]) => {
  if (count === N - 1) {
    max = Math.max(result, max);
    min = Math.min(result, min);
    return;
  }
  for (let i = 0; i < 4; i++) {
    if (!operator[i]) continue;
    operator[i]--;
    dfs(count + 1, calculator[i](result, A[count + 1]));
    operator[i]++;
  }
};

dfs();
console.log(max);
console.log(min);
