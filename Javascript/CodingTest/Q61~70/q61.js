// 문자열 `str`이 매개변수로 주어질 때, `str`의 각 문자를 요소로 갖는 배열을 return 하도록 solution 함수를 완성해보세요.

// ---

// ### 입출력 예
const solution = (str) => {
    return [...str];
};

console.log(solution('Hello world'));
// ["H", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
console.log(solution('')); // []
