// 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 `nums`가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

// ---

// ### 제한사항

// - 1 ≤ `nums`의 길이 ≤ 100
// - 0 ≤ `nums`의 원소 ≤ 100,000
const solution = (nums) => {
    // let count = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     count += [...(nums[i] + '')].filter((v) => v === '7').length;
    // }
    // return count;
    return [...(nums.join('') + '')].filter((v) => v === '7').length;
};

console.log(solution([7, 77, 17])); // 4
console.log(solution([10, 29])); // 0
