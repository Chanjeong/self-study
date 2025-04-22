let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const n = +input[0];
let moves = [];
let count = 0;

function hanoi(n, from, to, aux) {
  if (n === 1) {
    count += 1;
    moves.push(`${from} ${to}`);
    return;
  }

  hanoi(n - 1, from, aux, to);
  moves.push(`${from} ${to}`);
  count += 1;
  hanoi(n - 1, aux, to, from);
}

hanoi(n, 1, 3, 2);
console.log(count);
console.log(moves.join('\n'));
