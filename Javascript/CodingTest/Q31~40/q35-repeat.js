// 정수 `n`과 `k`가 주어졌을 때, 1 이상 `n`이하의 정수 중에서 `k`의 배수를 오름차순으로 저장한 배열을 return하는 solution 함수를 완성해 주세요.

// ---

// ### 제한사항

// - 1 ≤ `n` ≤ 1,000,000
// - 1 ≤ `k` ≤ min(1,000, n)
// const solution = (n, k) => {
//     // const solution = [];
//     // for (let i = k; i <= n; i+=k) if (i % k === 0) solution.push(i);

//     // return solution;
//     return Array.from({ length: n }, (v, i) => i + 1).filter((v) => v % k === 0);
//     // return Array.from({ length: Math.trunc(n/k) }, (v, i) => (i + 1)*k)
// };

const solution = (n, k) => {
    return Array.from({ length: Math.trunc(n / k) }, (_, i) => (i + 1) * k);
};

console.log(solution(10, 3)); // [3, 6, 9]
console.log(solution(15, 5)); // [5, 10, 15]
