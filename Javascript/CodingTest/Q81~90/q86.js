// 정수 `n`이 매개변수로 주어질 때, `n`의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

// ---

// ### 제한사항

// - 1 ≤ `n` ≤ 10,000
const findDivisors = (n) =>
    Array.from({ length: n }, (_, i) => i + 1)
        .filter((num) => n % num === 0)
        .sort((a, b) => a - b);

console.log(findDivisors(1)); // [1]
console.log(findDivisors(15)); // [1, 3, 5, 15]
console.log(findDivisors(16)); // [1, 2, 4, 8, 16]
console.log(findDivisors(24)); // [1, 2, 3, 4, 6, 8, 12, 24]
console.log(findDivisors(29)); // [1, 29]
