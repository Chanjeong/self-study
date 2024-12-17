// 문자열 `str`이 주어집니다. `str`을 문자 "x"를 기준으로 나눴을 때 나눠진 문자열 각각의 길이를 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

// ---

// ### 제한사항

// - 1 ≤ `str`의 길이 ≤ 100,000
//     - `str`은 알파벳 소문자로 이루어진 문자열입니다.

const solution = (str) => {
    return str.split('x').map((v) => v.length);
};

console.log(solution('oxooxoxxox')); // [1, 2, 1, 0, 1, 0]
console.log(solution('xabcxdefxghi')); // [0, 3, 3, 3]
