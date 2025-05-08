let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let col = +input[0];
let row = 1;
while (col - row > 0) {
  col = col - row;
  row += 1;
}

//col은 그 대각선 안에서의 위치로 바뀌게 됨
if (row % 2 === 1) {
  console.log(`${row + 1 - col}/${col}`);
} else {
  console.log(`${col}/${row + 1 - col}`);
}
