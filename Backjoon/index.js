let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = [];
for (let i = 1; i < input.length; i++) {
  arr.push(+input[i].trim());
}

arr.sort((a, b) => a - b);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
