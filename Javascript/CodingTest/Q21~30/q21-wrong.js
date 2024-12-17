// 1부터 주어진 숫자 `n`까지 순회하면서 문자열을 생성해 배열에 담아 반환하는 함수를 구현한다.

// - 3의 배수는 "Fizz", 5의 배수는 "Buzz", 3의 배수이면서 5의 배수는 "FizzBuzz"이어야 한다.
// - 위 조건 중 어느 것도 참이 아닌 경우 순회중인 숫자를 문자열로 변환한다.
// - 반환하는 배열의 요소는 모두 문자열이어야 한다.
const fizzBuzz = (n) => {
    const fizzBuzz = new Array();
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            fizzBuzz.push('FizzBuzz');
        } else if (i % 3 === 0) {
            fizzBuzz.push('Fizz');
        } else if (i % 5 === 0) {
            fizzBuzz.push('Buzz');
        } else {
            fizzBuzz.push(String(i));
        }
    }
    return fizzBuzz;
};

console.log(fizzBuzz(3)); // ['1', '2', 'Fizz']
console.log(fizzBuzz(5)); // ['1', '2', 'Fizz', '4', 'Buzz']
console.log(fizzBuzz(20));
/* 
[
  '1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', 
  '11', 'Fizz', '13', '14', 'FizzBuzz', '16', '17', 'Fizz', '19', 'Buzz'
]
*/
