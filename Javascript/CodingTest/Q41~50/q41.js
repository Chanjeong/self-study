// `nums`의 각 element 중 `divisor`로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.

// `divisor`로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// ### 제한사항

// - `nums`는 자연수를 담은 배열입니다.
// - 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// - `divisor`는 자연수입니다.
// - `nums`는 길이 1 이상인 배열입니다.

const solution = (nums, divisor) => {
    const res = nums.filter((v) => v % divisor === 0);
    return res.length ? res.sort((a, b) => a - b) : [-1];
};

console.log(solution([5, 9, 7, 10], 5)); // [5, 10]
console.log(solution([2, 36, 1, 3], 1)); // [1, 2, 3, 36]
console.log(solution([3, 2, 6], 10)); // [-1]
