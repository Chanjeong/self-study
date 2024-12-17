// 양수 `n`, `m`이 주어지면 `n`부터 `m`까지 자연수의 합을 반환하는 함수를 구현한다.

// - `n` > `m`이면 0을 반환한다.
// - `n` = `m`이면 `n` 또는 `m`을 반환한다.

const sum = (n, m) => {
    let total;
    if (n > m) {
        total = 0;
    } else if (n === m) {
        total = n;
    } else {
        for (let i = n; i <= m; i++) {
            total += i;
        }
    }
    return total;
};

console.log(sum(3, 8)); // 33
console.log(sum(3, 3)); // 3
console.log(sum(3, 2)); // 0
