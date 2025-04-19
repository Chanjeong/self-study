let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const numbers = input.slice(1).map(Number);

// 1. 산술평균 (반올림)
const sum = numbers.reduce((acc, cur) => acc + cur, 0);
const average = Math.round(sum / N); // toFixed 쓰면 -0 나올 수 있어서 사용 지양
console.log(average === -0 ? 0 : average); // -0 방지

// 2. 중앙값
const sorted = [...numbers].sort((a, b) => a - b);
console.log(sorted[Math.floor(N / 2)]);

// 3. 최빈값
const freq = new Map();
for (let num of numbers) {
  freq.set(num, (freq.get(num) || 0) + 1);
}

// frequency 정렬: 개수 내림차순 → 값 오름차순
const sortedFreq = [...freq.entries()].sort((a, b) => {
  if (b[1] === a[1]) return a[0] - b[0]; // 개수 같으면 값 오름차순
  return b[1] - a[1]; // 개수 내림차순
});

// 최빈값 중 두 번째로 작은 값 처리
if (sortedFreq.length > 1 && sortedFreq[0][1] === sortedFreq[1][1]) {
  console.log(sortedFreq[1][0]);
} else {
  console.log(sortedFreq[0][0]);
}

// 4. 범위
const range = Math.max(...numbers) - Math.min(...numbers);
console.log(range);
