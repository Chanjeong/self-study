// 영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 영어 점수와 수학 점수를 담은 2차원 정수 배열 `scores`가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.

// ---

// ### 제한사항

// - 0 ≤ `scores`[0], `scores`[1] ≤ 100
// - 1 ≤ `scores`의 길이 ≤ 10
// - `scores`의 원소 길이는 2입니다.
// - `scores`는 중복된 원소를 갖지 않습니다.

const solution = (scores) => {
    const averages = scores.map(([eng, math]) => (eng + math) / 2);
    return averages.map((average) => averages.toSorted((a, b) => b - a).indexOf(average) + 1);
};

console.log(
    solution([
        [80, 70],
        [90, 50],
        [40, 70],
        [50, 80],
    ])
);
// [1, 2, 4, 3]
console.log(
    solution([
        [80, 70],
        [70, 80],
        [30, 50],
        [90, 100],
        [100, 90],
        [100, 100],
        [10, 30],
    ])
);
// [4, 4, 6, 2, 2, 1, 7]

// const solution = (scores) => {
//     const averages = scores.map(([eng, math]) => (eng + math) / 2);
//     const sortedAverages = averages.toSorted((a, b) => b - a);
//     return averages.map((avg) => sortedAverages.indexOf(avg) + 1);
// };
