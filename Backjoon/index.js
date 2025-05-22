let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

let idx = 0;
let scenarioNum = 1;

while (true) {
  const n = parseInt(input[idx]);
  if (n === 0) break;

  const names = input.slice(idx + 1, idx + 1 + n);
  const count = new Array(n).fill(0);

  for (let i = idx + 1 + n; i < idx + 1 + n + (2 * n - 1); i++) {
    const num = parseInt(input[i].split(' ')[0]);
    count[num - 1]++;
  }

  const lostIdx = count.findIndex(c => c === 1);
  console.log(`${scenarioNum} ${names[lostIdx]}`);

  idx = idx + 1 + n + (2 * n - 1);
  scenarioNum++;
}
