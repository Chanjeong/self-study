// 정수 `num`와 `n`, `m`이 주어집니다. `num`가 `n`의 배수이면서 `m`의 배수이면 1을 아니라면
// 0을 return하도록 solution 함수를 완성해주세요.

// ### 제한사항

//  10 ≤ `num` ≤ 100
//  2 ≤ `n`, `m` < 10

const solution = (num, n, m) => {
    return num % n === 0 && num % m === 0 ? 1 : 0;
};

console.log(solution(60, 2, 3)); // 1
console.log(solution(55, 10, 5)); // 0
