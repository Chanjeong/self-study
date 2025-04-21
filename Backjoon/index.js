let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function recursion(s, l, r, counter) {
  counter.count++;
  if (l >= r) return 1;
  else if (s[l] !== s[r]) return 0;
  else {
    return recursion(s, l + 1, r - 1, counter);
  }
}

function isPalindrome(s) {
  let counter = { count: 0 };
  return [recursion(s, 0, s.length - 1, counter), counter.count];
}

for (let i = 1; i < input.length; i++) {
  const word = input[i].trim();
  const [result, count] = isPalindrome(word);
  console.log(result, count);
}
