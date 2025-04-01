let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input[1].split(' ').map(Number);

let sorted = Array.from(new Set(arr)).sort();

const hash = {};
for (let i = 0; i < sorted.length; i++) {
  hash[sorted[i]] = i;
}

for (let i = 0; i < arr.length; i++) {
  arr[i] = hash[arr[i]];
}
console.log(arr.join(' '));
