// 정수 리스트 `nums`가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요. 음수가 없다면 -1을 return합니다.

// ---

// ### 제한사항

// - 5 ≤ `nums`의 길이 ≤ 100
// - 10 ≤ `nums`의 원소 ≤ 100

// const solution = (nums) => {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] < 0) {
//             return i;
//         }
//     }
//     return -1;
// };

const solution = (nums) => nums.findIndex((v) => v < 0);

console.log(solution([12, 4, 15, 46, 38, -2, 15])); // 5
console.log(solution([13, 22, 53, 24, 15, 6])); // -1
