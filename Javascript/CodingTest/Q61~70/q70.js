// 문자열 `str`이 주어집니다. "x"를 기준으로 해당 문자열을 잘라내 배열을 만든 후 사전순으로 정렬한 배열을 return 하는 solution 함수를 완성해 주세요.

// 단, 빈 문자열은 반환할 배열에 넣지 않습니다.

// ---

// ### 제한사항

// - 1 ≤ `str` ≤ 100,000
//     - `str`은 알파벳 소문자로 이루어진 문자열입니다.
const solution = (str) =>
    str
        .split('x')
        .filter((v) => v !== '')
        .sort();

console.log(solution('axbxcxdx')); // ["a","b","c","d"]
console.log(solution('dxccxbbbxaaaa')); // ["aaaa","bbb","cc","d"]
