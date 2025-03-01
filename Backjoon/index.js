let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// 4 -> 4**2개 정사각형 -> 4**3개의 정사각형
//4+5 -> (4+5)+(4*4**1) -> 전의 갯수 + (4* 4**n-1)

const num = +input[0];
const side = Math.pow(2, num) + 1;
console.log(side * side);
