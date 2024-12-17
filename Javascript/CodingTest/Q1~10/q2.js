// 정수 `num1`, `num2`가 매개변수로 주어질 때, `num1`을 `num2`로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.

// - 0 < `num1` ≤ 100
// - 0 < `num2` ≤ 100

function solution(num1, num2) {
    return Math.floor(num1 / num2);
}

console.log(solution(10, 5));
console.log(solution(7, 2));
