// 정수 리스트 `nums`와 정수 `n`이 주어질 때, `nums`를 `n` 번째 원소 이후의 원소들과 `n` 번째까지의 원소들로 나눠 `n` 번째 원소 이후의 원소들을 `n` 번째까지의 원소들 앞에 붙인 리스트를 return하도록 solution 함수를 완성해주세요.

// ---

// ### 제한사항

// - 2 ≤ `nums`의 길이 ≤ 30
// - 1 ≤ `nums`의 원소 ≤ 9
// - 1 ≤ `n` ≤ `nums`의 길이
const solution = (nums, n) => {
    const afterN = nums.filter((v, i) => i >= n);
    const beforeN = nums.filter((v, i) => i < n);
    return afterN.concat(beforeN);
    // const solution=(l,n)=>[...l.slice(n),...l.slice(0,n)]
};

console.log(solution([2, 1, 6], 1)); // [1, 6, 2]
console.log(solution([5, 2, 1, 7, 5], 3)); // [7, 5, 5, 2, 1]
