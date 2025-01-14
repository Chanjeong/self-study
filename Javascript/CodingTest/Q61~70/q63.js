// 문자열 `str`이 매개변수로 주어집니다. `str`에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.

// ---

// ### 제한사항

// - 1 ≤ `str` ≤ 110
// - `str`은 대문자, 소문자, 공백으로 구성되어 있습니다.
// - 대문자와 소문자를 구분합니다.
// - 공백(" ")도 하나의 문자로 구분합니다.
// - 중복된 문자 중 가장 앞에 있는 문자를 남깁니다.
const solution = (str) => {
    // let res = [];
    // for (const char of str) {
    //     if (!res.includes(char)) res.push(char);
    // }
    // return res.join('');
    return [...new Set(str)].join('');
};

console.log(solution('people')); // 'peol'
console.log(solution('We are the world')); // 'We arthwold'
