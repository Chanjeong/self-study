let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let num = 0;
while (num++ !== +input[0]) {
  const [...element] = (num + '').split('').map(Number);
  const total = [...element].reduce((acc, cum) => acc + cum, 0);
  if (total + num === +input[0]) return console.log(num);
}
return console.log(0);
