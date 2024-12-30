let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

for (let i = 0; i < input.length; i++) {
  if (input[i].split(' ').length === 1) {
    continue;
  }
  console.log(Number(input[i].split(' ')[0]) + Number(input[i].split(' ')[1]));
}
