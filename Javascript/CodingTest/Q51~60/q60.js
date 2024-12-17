// 문자열 `str`과 정수 `s`, `e`가 매개변수로 주어질 때, `str`에서 인덱스 `s`부터 인덱스 `e`까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.

// ---

// ### 제한사항

// - `str`은 숫자와 알파벳으로만 이루어져 있습니다.
// - 1 ≤ `str`의 길이 ≤ 1,000
// - 0 ≤ `s` ≤ `e` < `str`의 길이
const solution = (str, s, e) => {
    return str.slice(0, s) + [...str.slice(s, e + 1)].reverse().join('') + str.slice(e + 1);
};

console.log(solution('Progra21Sremm3', 6, 12)); // 'ProgrammerS123'
console.log(solution('Stanley1yelnatS', 4, 10)); // 'Stanley1yelnatS'
