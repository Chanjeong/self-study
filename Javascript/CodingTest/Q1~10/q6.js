// 정수 `num`과 `n`이 매개 변수로 주어질 때,
// `num`이 `n`의 배수이면 1을 return `n`의 배수가 아니라면 0을 return하도록 solution 함수를 완성해주세요.

// ### 제한사항

//  2 ≤ `num` ≤ 100
//  2 ≤ `n` ≤ 9

const solution = (num, n) => {
    if (num % n === 0) {
        return 1;
    }
    // num % n === 0 ? 1 : 0;
    return 0;
};

console.log(solution(98, 2)); // 1
console.log(solution(34, 3)); // 0
