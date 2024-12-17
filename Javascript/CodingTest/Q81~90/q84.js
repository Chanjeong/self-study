// 두 정수 `a`, `d`와 길이가 n인 boolean 배열 `included`가 주어집니다. 첫째항이 `a`, 공차가 `d`인 등차수열에서 `included[i]`가 i + 1항을 의미할 때, 이 등차수열의 1항부터 n항까지 `included`가 true인 항들만 더한 값을 return 하는 solution 함수를 작성해 주세요.

// ---

// ### 제한사항

// - 1 ≤ `a` ≤ 100
// - 1 ≤ `d` ≤ 100
// - 1 ≤ `included`의 길이 ≤ 100
// - `included`에는 true가 적어도 하나 존재합니다.

const solution = (a, d, included) => {
    const ans = [...included];
    return ans.map((v, i) => (v = a + d * i)).reduce((sum, num, i) => (included[i] === true ? (sum += num) : sum), 0);
    // return included.reduce((acc, flag, i) => (flag ? acc + a + d * i : acc), 0);
};

console.log(solution(3, 4, [true, false, false, true, true])); // 37
console.log(solution(7, 1, [false, false, false, true, false, false, false])); // 10
