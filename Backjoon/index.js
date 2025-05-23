let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');

let index = 0;
let groupNum = 1;
let group = [];
let scoreGroup = [];
let count = 0;
while (true) {
  let n = parseInt(input[index]);

  if (n === 0) break;

  for (let i = index + 1; i < index + 1 + n; i++) {
    const [student, ...score] = input[i].trim().split(' ');
    group.push(student);
    scoreGroup.push(score);
  }
  console.log(`Group ${groupNum}`);
  for (let i = 0; i < scoreGroup.length; i++) {
    for (let j = 0; j < scoreGroup[i].length; j++) {
      if (scoreGroup[i][j] === 'N') {
        const target = (i - j - 1 + n) % n;
        console.log(`${group[target]} was nasty about ${group[i]}`);
        count += 1;
      }
    }
  }
  if (count === 0) console.log(`Nobody was nasty about Debby`);
  console.log('\r');
  count = 0;
  groupNum += 1;
  group = [];
  scoreGroup = [];
  index = index + n + 1;
}
