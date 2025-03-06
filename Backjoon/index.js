let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [a, b, c] = input.map(element => +element.trim());

if (a + b + c !== 180) console.log('Error');
else {
  if (a === 60 && b === 60 && c === 60) console.log('Equilateral');
  else if ((a === b && a !== c) || (a === c && b !== c) || (b === c && a !== c))
    console.log('Isosceles');
  else console.log('Scalene');
}
