// 문자열 `str`과 정수 배열 `indices`가 매개변수로 주어집니다. `str`의 `indices`의 원소들에 해당하는 인덱스의 글자들을 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

// ---

// ### 제한사항

// - 1 ≤ `str`의 길이 ≤ 1,000
// - `str`의 원소는 영소문자로 이루어져 있습니다.
// - 1 ≤ `indices`의 길이 ≤ 1,000
// - 0 ≤ `indices`의 원소 < `str`의 길이
const solution = (str, indices) => {
    // return indices.map((v) => str[v]).join('');
    return indices.reduce((sum, char) => sum + str[char], '');
};

console.log(solution('cvsgiorszzzmrpaqpe', [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7]));
// 'programmers'
console.log(solution('zpiaz', [1, 2, 0, 0, 3]));
// 'pizza'
