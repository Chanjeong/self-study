// 정수 리스트 `nums`와 정수 `n`이 주어질 때, `n` 번째 원소부터 마지막 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// ---

// ### 제한사항

// - 2 ≤ `nums`의 길이 ≤ 30
// - 1 ≤ `nums`의 원소 ≤ 9
// - 1 ≤ `n` ≤ `nums`의 길이
const solution = (nums, n) => {
    return nums.filter((v, i) => i + 1 >= n);
    //nums.slice(n-1);
};

console.log(solution([2, 1, 6], 3)); // [6]
console.log(solution([5, 2, 1, 7, 5], 2)); // [2, 1, 7, 5]
