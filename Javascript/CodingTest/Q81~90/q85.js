// 양의 정수(1 ≤ n ≤ 100)를 전달받아 각 자릿수의 합을 반환한다.
// 숫자를 문자열로 변환하는 방법은 사용하지 않는다.
const sumOfDigits = (n) => {
    // return [...(n + '')].reduce((sum, num) => (sum += +num), 0);
    let sum = 0;
    while (n !== 0) {
        sum += n % 10;
        n = Math.trunc(n / 10);
    }
    return sum;
};

console.log(sumOfDigits(1)); // 1
console.log(sumOfDigits(123)); // 6
console.log(sumOfDigits(1010)); // 2
console.log(sumOfDigits(54321)); // 15
