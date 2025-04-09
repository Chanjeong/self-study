let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 1; i < input.length; i++) {
  const vps = input[i].trim();
  let stack = [];
  let isValid = true;

  for (const char of vps) {
    if (char === '(') stack.push(char);
    else {
      if (stack.length > 0) {
        stack.pop();
      } else {
        isValid = false;
        break;
      }
    }
  }
  if (stack.length > 0) isValid = false;
  console.log(isValid ? 'YES' : 'NO');
}
