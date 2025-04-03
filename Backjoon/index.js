let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let s = input[0].split('');

let substrings = new Set();

for (let i = 0; i < s.length; i++) {
  for (let j = i + 1; j <= s.length; j++) {
    substrings.add(s.slice(i, j).join(''));
  }
}

console.log(substrings.size);
