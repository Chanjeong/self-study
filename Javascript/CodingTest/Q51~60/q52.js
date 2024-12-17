// 문자들이 담겨있는 배열 `arr`가 주어집니다. `arr`의 원소들을 순서대로 이어 붙인 문자열을 return하는 solution함수를 작성해 주세요.

// ---

// ### 제한사항

// - 1 ≤ `arr`의 길이 ≤ 200
//     - `arr`의 원소는 전부 알파벳 소문자로 이루어진 길이가 1인 문자열입니다.
const solution = (arr) => {
    // return arr.reduce((c, a) => c + a);
    return arr.join('');
};

console.log(solution(['a', 'b', 'c'])); // 'abc'
