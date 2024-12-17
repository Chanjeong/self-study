// 0과 1로만 이루어진 정수 배열 `arr`가 주어집니다. `arr`를 이용해 새로운 배열 `stk`을 만드려고 합니다.

// `i`의 초기값을 0으로 설정하고 `i`가 `arr`의 길이보다 작으면 다음을 반복합니다.

// - 만약 `stk`이 빈 배열이라면 `arr[i]`를 `stk`에 추가하고 `i`에 1을 더합니다.
// - `stk`에 원소가 있고, `stk`의 마지막 원소가 `arr[i]`와 같으면 `stk`의 마지막 원소를 `stk`에서 제거하고 `i`에 1을 더합니다.
// - `stk`에 원소가 있는데 `stk`의 마지막 원소가 `arr[i]`와 다르면 `stk`의 맨 마지막에 `arr[i]`를 추가하고 `i`에 1을 더합니다.

// 위 작업을 마친 후 만들어진 `stk`을 return 하는 solution 함수를 완성해 주세요.

// 단, 만약 빈 배열을 return 해야한다면 [-1]을 return 합니다.

// ---

// ### 제한사항

// - 1 ≤ `arr`의 길이 ≤ 1,000,000
//     - `arr`의 원소는 0 또는 1 입니다.

const solution = (arr) => {
    const stk = [];
    let i = 0;
    for (let i = 0; i < arr.length; i++) {
        if (stk.at(-1) !== arr[i]) {
            stk.push(arr[i]);
        } else {
            stk.pop();
        }
    }
    return stk.length ? stk : [-1];
};

console.log(solution([0, 1, 1, 1, 0])); // [0, 1, 0]
console.log(solution([0, 1, 0, 1, 0])); // [0, 1, 0, 1, 0]
console.log(solution([0, 1, 1, 0])); // [-1]
