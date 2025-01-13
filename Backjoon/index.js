let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString().trim()
  .split('\n')
// let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const filtered = input.map(el => Number(el.trim()));

let array = [];

for(let i = 0; i < filtered.length; i++){
  let a = filtered[i] % 42;
  if(!array.includes(a)){
    array.push(a)
  }
}
console.log(array.length);

