// 문자열 `str`, `overwriteStr`과 정수 `s`가 주어집니다. 문자열 `str`의 인덱스 `s`부터 `overwriteStr`의 길이만큼을 문자열 `overwriteStr`으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

// ---

// ### 제한사항

// - `str`와 `overwriteStr`은 숫자와 알파벳으로 이루어져 있습니다.
// - 1 ≤ `overwriteStr`의 길이 ≤ `str`의 길이 ≤ 1,000
// - 0 ≤ `s` ≤ `str`의 길이 - `overwriteStr`의 길이
const solution = (str, overwriteStr, s) => {
    return str.slice(0, s) + overwriteStr + str.slice(s + overwriteStr.length);
};

console.log(solution('He11oWor1d', 'lloWorl', 2)); // 'HelloWorld'
console.log(solution('Program29b8UYP', 'merS123', 7)); // 'ProgrammerS123'
