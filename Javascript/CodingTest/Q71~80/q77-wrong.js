// 문자열 `str`과 `part`가 주어집니다. `str`의 부분 문자열중 `part`로 끝나는 가장 긴 부분 문자열을 찾아서 return 하는 solution 함수를 완성해 주세요.

// ---

// ### 제한사항

// - 5 ≤ `str` ≤ 20
// - 1 ≤ `part` ≤ 5
//     - `part`은 반드시 `str`의 부분 문자열로 주어집니다.
// - `str`과 `part`에 등장하는 알파벳은 대문자와 소문자를 구분합니다.
const solution = (str, part) => str.slice(0, str.lastIndexOf(part) + part.length);

console.log(solution('AbCdEFG', 'dE')); // 'AbCdE'
console.log(solution('AAAAaaaa', 'a')); // 'AAAAaaaa'
