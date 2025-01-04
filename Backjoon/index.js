let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .split(' ');
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for (let i = 1; i <= Number(input); i++) {
  console.log(' '.repeat(Number(input) - i) + '*'.repeat(i));
}
