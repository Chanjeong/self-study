// 정수가 담긴 리스트 `nums`가 주어집니다. `nums`의 홀수만 순서대로 이어 붙인 수와 짝수만 순서대로 이어 붙인 수의 합을 return하도록 solution 함수를 완성해주세요.

// ---

// ### 제한사항

// - 2 ≤ `nums`의 길이 ≤ 10
// - 1 ≤ `nums`의 원소 ≤ 9
// - `nums`에는 적어도 한 개씩의 짝수와 홀수가 있습니다.
const solution = (nums) => {
    const odd = Number(nums.filter((v) => v % 2 === 1).join(''));
    const even = Number(nums.filter((v) => v % 2 === 0).join(''));
    return odd + even;
};

console.log(solution([3, 4, 5, 2, 1])); // 393
console.log(solution([5, 7, 8, 3])); // 581
