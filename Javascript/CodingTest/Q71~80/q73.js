// 문자열 `str`과 `n`이 매개변수로 주어질 때, `str`을 길이 `n`씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

// ---

// ### 제한사항

// - 1 ≤ `str`의 길이 ≤ 100
// - 1 ≤ `n` ≤ `str`의 길이
// - `str`은 알파벳 소문자, 대문자, 숫자로 이루어져 있습니다.

const solution = (str, n) => {
    // let res = [];
    // for (let i = 0; i < str.length; i += n) {
    //     res.push(str.slice(i, i + n));
    // }
    // return res;
    return Array.from({ length: Math.ceil(str.length / n) }, (_, i) => str.slice(i * n, (i + 1) * n));
};

console.log(solution('abc1Addfggg4556b', 6)); // ["abc1Ad", "dfggg4", "556b"]
console.log(solution('abcdef123', 3)); // ["abc", "def", "123"]
