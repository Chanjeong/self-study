// 정수 `start`와 `end`가 주어질 때, `start`부터 `end`까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// ---

// ### 제한사항

// - 0 ≤ `start` ≤ `end` ≤ 50
const solution = (start, end) => {
    const total = [];

    for (let i = start; i <= end; i++) {
        total.push(i);
    }

    return total;
};

console.log(solution(3, 10)); // [3, 4, 5, 6, 7, 8, 9, 10]
