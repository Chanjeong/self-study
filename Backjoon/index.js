let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const clock = input[0].toString().split(' ');

const a = Number(clock[0]);
const b = Number(clock[1]);
const c = Number(input[1]);

const hour = Math.trunc((b + c) / 60);
const minute = (b + c) % 60;

if (a + hour >= 24) {
  console.log(24 - (a + hour), minute);
} else console.log(a + hour, minute);
