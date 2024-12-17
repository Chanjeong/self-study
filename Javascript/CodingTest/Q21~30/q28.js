// 정수가 담긴 리스트 `nums`가 주어질 때, `nums`의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

// ---

// ### 제한사항

// - 1 ≤ `nums`의 길이 ≤ 100
// - 0 ≤ `nums`의 원소 ≤ 1,000

const solution = (nums) => {
    // let even = 0;
    // let odd = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] % 2 === 0) {
    //         even += 1;
    //     } else {
    //         odd += 1;
    //     }
    // }
    // return [even, odd];
    const even = nums.filter((num) => num % 2 === 0).length;
    return [even, nums.length - even];
};

console.log(solution([1, 2, 3, 4, 5])); // [2, 3]
console.log(solution([1, 3, 5, 7])); // [0, 4]
