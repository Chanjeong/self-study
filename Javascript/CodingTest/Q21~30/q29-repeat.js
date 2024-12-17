// 정수가 담긴 리스트 `nums`가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

// ---

// ### 제한사항

// - 2 ≤ `nums`의 길이 ≤ 10
// - 1 ≤ `nums`의 원소 ≤ 9

const solution = (nums) => {
    // let multiTotal = 1;
    // let plusTotal = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     plusTotal += nums[i];
    //     multiTotal *= nums[i];
    // }
    // return multiTotal < plusTotal ** 2 ? 1 : 0;

    var multiTotal = nums.reduce((accum, curr) => accum * curr, 1);
    var plusTotal = nums.reduce((accum, curren) => accum + curren);
    return multiTotal > plusTotal ** 2 ? 0 : 1;
};

console.log(solution([3, 4, 5, 2, 1])); // 1
console.log(solution([5, 7, 8, 3])); // 0
