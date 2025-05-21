let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

let num = input[0];
n = num;
let count = 0;
if (+num < 10) num = '0' + num;

while (true) {
  let [first, second] = num.split('').map(Number);
  let sum = first + second;
  num = String(second) + String(sum)[String(sum).length - 1];
  count += 1;
  if (+n === +num) break;
}
console.log(count);
