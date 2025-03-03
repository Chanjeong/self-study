let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let row = 1;
let num = +input[0];

while (num - row > 0) {
  num = num - row;
  row += 1;
}

if (row % 2 === 1) {
  console.log(`${row + 1 - num}/${num}`);
} else {
  console.log(`${num}/${row + 1 - num}`);
}
