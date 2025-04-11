let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let stack = [];
let line = input[1].split(' ').map(Number);

let order = 1;

while (line.length > 0 || stack.length > 0) {
  if (line[0] === order) {
    line.shift();
    order += 1;
  } else if (stack[stack.length - 1] === order) {
    stack.pop();
    order += 1;
  } else if (line.length > 0) {
    stack.push(line.shift());
  } else {
    console.log('Sad');
    return;
  }
}
console.log('Nice');
