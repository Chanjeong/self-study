// 숫자 배열 *`scores`*가 주어지면 모든 요소의 평균을 반환하는 함수를 구현한다.

// - 평균이 실수인 경우 반올림해 정수를 반환한다.
//     - [Math.round]
// - *`scores`*가 빈 배열이면 0을 반환한다.

const average = (scores) => {
    // let total = 0;
    // if (scores.length === 0) {
    //     return 0;
    // } else {
    //     for (let i = 0; i < scores.length; i++) {
    //         total += scores[i];
    //     }
    //     return Math.round(total / scores.length);
    // }
    if (scores.length === 0) return 0;
    const total = scores.reduce((accum, curren) => accum + curren);
    return Math.round(total / scores.length);
};

console.log(average([73, 82, 99])); // 85
console.log(average([50, 100, 90, 45, 70])); // 71
console.log(average([100])); // 100
console.log(average([])); // 0
