let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [num, ...boardLines] = [...input].map(el => el.trim());
const [a, b] = num.split(' ').map(Number);
const board = boardLines.map(line => line.split(''));
console.log(board);
