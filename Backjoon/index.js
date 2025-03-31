let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = [];
for (let i = 1; i < input.length; i++) {
  arr.push(input[i].trim().split(' ').map(Number));
}
arr.sort(([a, b], [c, d]) => a - c || b - d);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i].join(' '));
}
