// 문자열 `str`과 정수 `num1`, `num2`가 매개변수로 주어질 때, `str`에서 인덱스 `num1`과 인덱스 `num2`에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

// ---

// ### 제한사항

// - 1 < `str`의 길이 < 100
// - 0 ≤ `num1`, `num2` < `str`의 길이
// - `str`은 소문자로 이루어져 있습니다.
// - `num1` ≠ `num2`

const solution = (str, num1, num2) => {
    let copy = [...str];
    [copy[num1], copy[num2]] = [copy[num2], copy[num1]];
    return copy.join('');
};

console.log(solution('hello', 1, 2)); // 'hlelo'
console.log(solution('I love you', 3, 6)); // 'I l veoyou'
