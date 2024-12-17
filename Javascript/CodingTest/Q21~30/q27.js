// 정수 배열 `nums`가 매개변수로 주어집니다. `nums`의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

// ---

// ### 제한사항

// - 10,000 ≤ `nums`의 원소 ≤ 10,000
// - 1 ≤ `nums`의 길이 ≤ 1,000

const solution = (nums) => {
    // const twice = [];
    // for (let i = 0; i < nums.length; i++) {
    //     twice.push(nums[i] * 2);
    // }
    // return twice;
    // return nums.map((number) => number * 2);
    return Array.from(nums, (v) => v * 2);
};

console.log(solution([1, 2, 3, 4, 5])); // [2, 4, 6, 8, 10]
console.log(solution([1, 2, 100, -99, 1, 2, 3])); // [2, 4, 200, -198, 2, 4, 6]
