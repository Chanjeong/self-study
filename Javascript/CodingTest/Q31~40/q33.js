// 정수 배열 `nums`와 정수 `num1`, `num2`가 매개변수로 주어질 때, `nums`의 `num1`번 째 인덱스부터 `num2`번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요.

// ---

// ### 제한사항

// - 2 ≤ `nums`의 길이 ≤ 30
// - 0 ≤ `nums`의 원소 ≤ 1,000
// - 0 ≤`num1` < `num2` < `numbers`의 길이

const solution = (nums, num1, num2) => {
    return nums.slice(num1, num2 + 1);
};

console.log(solution([1, 2, 3, 4, 5], 1, 3)); // [2, 3, 4]
console.log(solution([1, 3, 5], 1, 2)); // [3, 5]
