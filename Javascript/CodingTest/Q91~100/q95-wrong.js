// 문자열 `str`이 매개변수로 주어집니다. `str`에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

// ---

// ### 제한사항

// - 0 < `str`의 길이 < 1,000
// - `str` 은 소문자로만 이루어져 있습니다.
const solution = (str) => {
    const hash = {};

    for (char of str) {
        hash[char] = (hash[char] || 0) + 1;
    }
    return Object.keys(hash)
        .filter((key) => hash[key] === 1)
        .sort()
        .join('');
};

console.log(solution('abcabcadc')); // "d"
console.log(solution('abdc')); // "abcd"
console.log(solution('hello')); // "eho"
