let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
  const A = +input[i];
  let count = 1;
  let res = [];
  if (A === -1) continue;
  while (count <= A / 2) {
    if (A % count === 0) res.push(count);
    count += 1;
  }
  const total = res.reduce((acc, cum) => acc + cum, 0);
  if (total === A) {
    let ans = `${A} = `;
    for (let i = 0; i < res.length; i++) {
      ans += `${res[i]} + `;
    }
    console.log(ans.slice(0, ans.length - 3));
  } else {
    console.log(`${A} is NOT perfect.`);
  }
}
