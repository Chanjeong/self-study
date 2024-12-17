// 정수 리스트 `nums`와 정수 `n`이 주어질 때, `nums`의 첫 번째 원소부터 마지막 원소까지 `n`개 간격으로 저장되어있는 원소들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// ---

// ### 제한사항

// - 5 ≤ `nums`의 길이 ≤ 20
// - 1 ≤ `nums`의 원소 ≤ 9
// - 1 ≤ `n` ≤ 4
const solution = (nums, n) => {
    // let res = [];
    // for (let i = 0; i < nums.length; i++) {
    //     if (i % n === 0) {
    //         res.push(nums[i]);
    //     }
    // }
    // return res;
    return nums.filter((v, i) => i % n === 0);
};

console.log(solution([4, 2, 6, 1, 7, 6], 2)); // [4, 6, 7]
console.log(solution([4, 2, 6, 1, 7, 6], 4)); // [4, 7]
