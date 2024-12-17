// 정수 `l`과 `r`이 주어졌을 때, `l` 이상 `r`이하의 정수 중에서 숫자 "0"과 "5"로만 이루어진 모든 정수를 오름차순으로 저장한 배열을 return하는 solution 함수를 완성해 주세요.

// 만약 그러한 정수가 없다면, -1이 담긴 배열을 return 합니다.

// ---

// ### 제한사항

// - 1 ≤ `l` ≤ `r` ≤ 1,000,000

const solution = (l, r) => {
    // let res = [];
    // for (let i = l; i <= r; i++) {
    //     if ((i + '').replaceAll('0', '').replaceAll('5', '') === '') res.push(i);
    // }
    // return res.length ? res : [-1];
    let res = [];
    for (let i = l; i <= r; i++) {
        if ([...(i + '')].every((c) => c === '0' || c === '5')) res.push(i);
    }
    return res.length ? res : [-1];
};

console.log(solution(5, 555)); // [5, 50, 55, 500, 505, 550, 555]
console.log(solution(10, 20)); // [-1]
