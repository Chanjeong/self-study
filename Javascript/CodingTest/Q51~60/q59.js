// 문자열 `str`과 정수 배열 `indices`가 주어질 때, `str`에서 `indices`의 원소에 해당하는 인덱스의 글자를 지우고 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

// ---

// ### 제한사항

// - 1 ≤ `indices`의 길이 < `str`의 길이 ≤ 100
// - `str`은 영소문자로만 이루어져 있습니다
// - 0 ≤ `indices`의 원소 < `str`의 길이
// - `indices`의 원소는 모두 서로 다릅니다.
const solution = (str, indices) => {
    return [...str].filter((v, i) => !indices.includes(i)).join('');
};

console.log(solution('apporoograpemmemprs', [1, 16, 6, 15, 0, 10, 11, 3])); // 'programmers'
