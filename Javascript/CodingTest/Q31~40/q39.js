// 문자열 배열 `intStrs`와 정수 `k`, `s`, `l`가 주어집니다. `intStrs`의 원소는 숫자로 이루어져 있습니다.

// 배열 `intStrs`의 각 원소마다 `s`번 인덱스에서 시작하는 길이 `l`짜리 부분 문자열을 잘라내 정수로 변환합니다. 이때 변환한 정수값이 `k`보다 큰 값들을 담은 배열을 return 하는 solution 함수를 완성해 주세요.

// ---

// ### 제한사항

// - 0 ≤ `s` < 100
// - 1 ≤ `l` ≤ 8
// - $10^{l - 1}$ ≤ `k` < $10^l$
// - 1 ≤ `intStrs`의 길이 ≤ 10,000
//     - `s` + `l` ≤ `intStrs`의 원소의 길이 ≤ 120

const solution = (intStrs, k, s, l) => {
    const solution = [];
    for (let i = 0; i < intStrs.length; i++) {
        if (k < intStrs[i].slice(s, s + l)) {
            //이러면 문자열이랑 숫자랑 비교하는 경우가 된다.
            solution.push(Number(intStrs[i].slice(s, s + l)));
        }
    }
    return solution;
    //return intStrs.map((v) => +v.slice(s, s + l)).filter((v) => v > k);
};

console.log(solution(['0123456789', '9876543210', '9999999999999'], 50000, 5, 5));
// [56789, 99999]
