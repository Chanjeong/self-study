// 정수로 이루어진 리스트 `nums`가 주어집니다. `nums`에서 가장 작은 5개의 수를 제외한 수들을 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// ---

// ### 제한사항

// - 6 ≤ `nums`의 길이 ≤ 30
// - 1 ≤ `nums`의 원소 ≤ 100
const solution = (nums) => {
    return nums.sort((a, b) => a - b).slice(5);
};

console.log(solution([12, 4, 15, 46, 38, 1, 14, 56, 32, 10]));
// [15, 32, 38, 46, 56]
