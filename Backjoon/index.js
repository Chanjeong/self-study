let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim();

const board = input[0].split('.');
let result = [];

for (let i = 0; i < board.length; i++) {
  const segment = board[i];
  const len = segment.length;

  if (len % 2 !== 0) {
    console.log(-1);
    return;
  }

  const aCount = Math.floor(len / 4);
  const bCount = (len % 4) / 2;

  result.push('AAAA'.repeat(aCount) + 'BB'.repeat(bCount));
}

// .으로 이어붙이기 (원래 있던 점들을 보존함)
console.log(result);
console.log(result.join('.'));
