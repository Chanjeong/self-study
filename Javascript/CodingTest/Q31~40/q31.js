// 정수 리스트 `nums`와 찾으려는 정수 `n`이 주어질 때, `nums`안에 `n`이 있으면 1을 없으면 0을 return하도록 solution 함수를 완성해주세요.

// ---

// ### 제한사항

// - 3 ≤ `nums`의 길이 ≤ 100
// - 1 ≤ `nums`의 원소 ≤ 100
// - 1 ≤ `n` ≤ 100

const solution = (nums, n) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === n) return 1;
    }
    return 0;
    //+(nums.include(n))
};

console.log(solution([1, 2, 3, 4, 5], 3)); // 1
console.log(solution([15, 98, 23, 2, 15], 20)); // 0
