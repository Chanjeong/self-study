let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
  let char = input[i].trim();

  if (char === '*') break;

  let isSurprising = true;
  for (let d = 0; d < char.length; d++) {
    let hash = new Set();
    for (let j = 0; j + d + 1 < char.length; j++) {
      const c = char[j] + char[j + d + 1];

      if (hash.has(c)) {
        isSurprising = false;
        break;
      } else {
        hash.add(c);
      }
    }
    if (!isSurprising) break;
  }

  console.log(`${char} is ${isSurprising ? 'surprising.' : 'NOT.'}`);
}
