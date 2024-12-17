// 외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 `emergency`가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.

// ---

// ### 제한사항

// - 중복된 원소는 없습니다.
// - 1 ≤ `emergency`의 길이 ≤ 10
// - 1 ≤ `emergency`의 원소 ≤ 100

// const solution = (emergency) => {
//     return emergency.map((v) => emergency.toSorted((a, b) => b - a).indexOf(v) + 1);
// };

const solution = (emergency) => {
    const hash = {};
    let sorted = emergency.toSorted((a, b) => b - a);
    let count = 1;
    for (const item of sorted) {
        hash[item] = (hash[item] || 0) + count;
        count += 1;
    }
    let res = [];
    for (const item of emergency) {
        res.push(hash[item]);
    }
    return res;
};

console.log(solution([3, 76, 24])); // [3, 1, 2]
console.log(solution([1, 2, 3, 4, 5, 6, 7])); // [7, 6, 5, 4, 3, 2, 1]
console.log(solution([30, 10, 23, 6, 100])); // [2, 4, 3, 5, 1]
