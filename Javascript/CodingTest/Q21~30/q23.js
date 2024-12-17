// 양수 n이 주어지면 1부터 n까지 자연수의 합을 반환하는 함수를 구현한다.
const sum = (n) => {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
};

console.log(sum(10)); // 55
console.log(sum(2)); // 3
console.log(sum(1)); // 1
