// 문자 "A"와 "B"로 이루어진 문자열 `str`과 `part`가 주어집니다. `str`의 "A"를 "B"로, "B"를 "A"로 바꾼 문자열의 연속하는 부분 문자열 중 `part`이 있으면 1을 아니면 0을 return 하는 solution 함수를 완성하세요.

// ---

// ### 제한사항

// - 1 ≤ `str`의 길이 ≤ 100
// - 1 ≤ `part`의 길이 ≤ 10
//     - `str`과 `part`는 문자 "A"와 "B"로만 이루어진 문자열입니다.
const solution = (str, part) =>
    +[...str]
        .map((char) => (char === 'A' ? 'B' : 'A'))
        .join('')
        .includes(part);
// +str.replaceAll('A', 'X').replaceAll('B', 'A').replaceAll('X', 'A').includes(part);
//+str.replaceAll(/(A)|(B)/g, (_, a) => a ? 'B' : 'A').includes(part);

console.log(solution('ABBAA', 'AABB')); // 1
console.log(solution('ABAB', 'ABAB')); // 0
