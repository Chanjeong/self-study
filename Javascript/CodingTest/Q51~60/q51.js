// 숫자로만 이루어진 문자열 `nStr`이 주어질 때, `nStr`을 정수로 변환하여 return하도록 solution 함수를 완성해주세요.

// ---

// ### 제한사항

// - 1 ≤ `nStr` ≤ 5
// - `nStr`은 0부터 9까지의 정수 문자로만 이루어져 있습니다.

const solution = (nStr) => {
    return Number(nStr);
    //const solution = Number
};

console.log(solution('10')); // 10
console.log(solution('8542')); // 8542
