// 문자열 `str`과 정수 `k`가 주어질 때, `str`을 `k`번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.

// ---

// ### 제한사항

// - 1 ≤ `str`의 길이 ≤ 100
// - `str`은 영소문자로만 이루어져 있습니다.
// - 1 ≤ `k` ≤ 100
const solution = (str, k) => {
    let res = '';
    for (let i = 0; i < k; i++) {
        res += str;
    }
    return res;
    //return str.repeat(k);
};

console.log(solution('string', 3)); // 'stringstringstring'
console.log(solution('love', 10)); // 'lovelovelovelovelovelovelovelovelovelove'
