let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = Array.from(Array(100), () => Array(100).fill(0));
let count = 0;

for (let i = 1; i < input.length; i++) {
  const [startX, startY] = input[i].trim().split(' ').map(Number);

  for (let l = 0; l < 10; l++) {
    for (let m = 0; m < 10; m++) {
      if (arr[startX + l][startY + m] !== 0) {
        continue;
      }
      if (arr[startX + l][startY + m] === 0) {
        arr[startX + l][startY + m] = 1;
        count += 1;
      }
    }
  }
}
console.log(count);
