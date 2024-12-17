// 정수가 담긴 배열 `array`와 정수 `n`이 매개변수로 주어질 때, `array`에 `n`이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

// ---

// ### 제한사항

// - 1 ≤ `array`의 길이 ≤ 100
// - 0 ≤ `array`의 원소 ≤ 1,000
// - 0 ≤ `n` ≤ 1,000

const solution = (array, n) => {
    // let total = 0;
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] === n) {
    //         total += 1;
    //     }
    // }
    // return total;

    return array.filter((v) => v === n).length;
};

console.log(solution([1, 1, 2, 3, 4, 5], 1)); // 2
console.log(solution([0, 2, 3, 4], 1)); // 0
