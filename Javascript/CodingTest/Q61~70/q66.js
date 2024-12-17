// 단어가 공백 한 개 이상으로 구분되어 있는 문자열 `str`이 매개변수로 주어질 때, `str`에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

// ---

// ### 제한사항

// - `str`은 영소문자와 공백으로만 이루어져 있습니다.
// - 1 ≤ `str`의 길이 ≤ 1,000
// - `str`의 맨 앞과 맨 뒤에도 공백이 있을 수 있습니다.
// - `str`에는 단어가 하나 이상 존재합니다.
const solution = (str) => str.split(' ').filter((v) => v !== '');

console.log(solution(' i    love  you')); // ["i", "love", "you"]
console.log(solution('    programmers  ')); // ["programmers"]
