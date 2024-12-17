// 정수 배열 `arr`가 주어집니다. `arr`를 이용해 새로운 배열 `stk`를 만드려고 합니다.

// 변수 `i`를 만들어 초기값을 0으로 설정한 후 `i`가 `arr`의 길이보다 작으면 다음 작업을 반복합니다.

// - 만약 `stk`가 빈 배열이라면 `arr[i]`를 `stk`에 추가하고 `i`에 1을 더합니다.
// - `stk`에 원소가 있고, `stk`의 마지막 원소가 `arr[i]`보다 작으면 `arr[i]`를 `stk`의 뒤에 추가하고 `i`에 1을 더합니다.
// - `stk`에 원소가 있는데 `stk`의 마지막 원소가 `arr[i]`보다 크거나 같으면 `stk`의 마지막 원소를 `stk`에서 제거합니다.

// 위 작업을 마친 후 만들어진 `stk`를 return 하는 solution 함수를 완성해 주세요.

// ---

// ### 제한사항

// - 1 ≤ `arr`의 길이 ≤ 100,000
//     - 1 ≤ `arr`의 원소 ≤ 100,000

const solution = (arr) => {
    let i = 0;
    const stk = [];
    while (i < arr.length) {
        if (stk.length === 0 || stk.at(-1) < arr[i]) {
            stk.push(arr[i]);
            i += 1;
        } else {
            stk.pop();
        }
    }
    return stk;
};

console.log(solution([1, 4, 2, 5, 3])); // [1, 2, 3]

// 처음에 i = 0;
// stk = [arr[0] = 1], stk = [1];
// i = 1, stk의 마지막 원소 = 1, arr[i] = 4, stk = [1,4];
// i = 2, stk의 마지막 원소 = 4, arr[2] = 2, stk = [1];
// i = 3, stk의 마지막 원소 = 1, arr[3] = 5, stk = [1, 2, 5];
// i = 4, stk의 마지막 원소 = 5, arr[4] = 3, stk = [1, 2, 3];
