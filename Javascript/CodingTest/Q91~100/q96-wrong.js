// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 `nums`가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

// ---

// ### 제한사항

// - 0 < `nums`의 길이 < 100
// - 0 ≤ `nums`의 원소 < 1000
const solution = (nums) => {
    const hash = {};

    for (const num of nums) {
        hash[num] = (hash[num] || 0) + 1;
    }
    const max = Math.max(...Object.values(hash));
    const filtered = Object.values(hash).filter((v) => v === max);
    return filtered.length > 1 ? -1 : max;
};

console.log(solution([1, 2, 3, 3, 3, 4])); // 3
console.log(solution([1, 1, 2, 2])); // -1
console.log(solution([1])); // 1
