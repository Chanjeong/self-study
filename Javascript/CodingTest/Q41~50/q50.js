// 정수 배열 `nums`와 정수 `n`이 매개변수로 주어집니다. `nums`의 원소를 앞에서부터 하나씩 더하다가 그 합이 `n`보다 커지는 순간 이때까지 더했던 원소들의 합을 return 하는 solution 함수를 작성해 주세요.

// ---

// ### 제한사항

// - 1 ≤ `nums`의 길이 ≤ 100
// - 1 ≤ `nums`의 원소 ≤ 100
// - 0 ≤ n < `nums`의 모든 원소의 합

const solution = (nums, n) => {
    // let sum = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     sum += nums[i];
    //     if (sum > n) return sum;
    // }
    // return sum;
    return nums.reduce((a, c) => (a <= n ? a + c : a));
};

console.log(solution([34, 5, 71, 29, 100, 34], 123)); // 139
console.log(solution([58, 44, 27, 10, 100], 139)); // 239
