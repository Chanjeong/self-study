// 문자열 `str`이 매개변수로 주어질 때, `str` 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

// ---

// ### 제한사항

// - 1 ≤ `str`의 길이 ≤ 100
// - `str`에는 숫자가 한 개 이상 포함되어 있습니다.
// - `str`은 영어 소문자 또는 0부터 9까지의 숫자로 이루어져 있습니다.
const solution = (str) =>
    // [...str]
    //     .filter((v) => !isNaN(v))
    //     .map(Number)
    //     .sort((a, b) => a - b);

    [...str]
        .filter((v) => Number.isInteger(+v))
        .map(Number)
        .sort();

console.log(solution('hi12392')); // [1, 2, 2, 3, 9]
console.log(solution('p2o4i8gj2')); // [2, 2, 4, 8]
console.log(solution('abcde0')); // [0]
