let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].trim().split(' ').map(Number);

const name = {};
const num = {};

input.slice(1, N + 1).forEach((p, i) => {
  name[p.trim()] = i + 1;
  num[i + 1] = p.trim();
});

const result = input.slice(N + 1, N + M + 1).map(p => {
  if (isNaN(+p)) {
    return name[p.trim()];
  } else {
    return num[+p];
  }
});
console.log(result.join('\n'));
