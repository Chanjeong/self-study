// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

// ### 제한사항

// 0 < `n` ≤ 1000

const solution = (n) => {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            total += i;
        }
    }
    return total;
};

console.log(solution(10)); // 30
console.log(solution(4)); // 6
console.log(solution(3)); // 2
console.log(solution(1)); // 0
