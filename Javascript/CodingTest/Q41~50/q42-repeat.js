// 정수 리스트 `nums`가 주어집니다. 가장 첫 번째 원소를 1번 원소라고 할 때, 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return 하도록 solution 함수를 완성해주세요. 두 값이 같을 경우 그 값을 return합니다.

// ---

// ### 제한사항

// - 5 ≤ `nums`의 길이 ≤ 50
// - 9 ≤ `nums`의 원소 ≤ 9

const solution = (nums) => {
    // let evenNum = 0;
    // let oddNum = 0;
    // for (let i = 0; i < nums.length; i++) {
    //     if (i % 2 === 0) {
    //         oddNum += nums[i];
    //     } else {
    //         evenNum += nums[i];
    //     }
    // }
    // return evenNum >= oddNum ? evenNum : oddNum;

    // const oddNum = nums.filter((v, i) => i % 2 === 0).reduce((accum, curr) => accum + curr);
    // const evenNum = nums.filter((v, i) => i % 2 !== 0).reduce((accum, curr) => accum + curr);

    return Math.max(oddNum, evenNum);
};

console.log(solution([4, 2, 6, 1, 7, 6])); // 17
console.log(solution([-1, 2, 5, 6, 3])); // 8
