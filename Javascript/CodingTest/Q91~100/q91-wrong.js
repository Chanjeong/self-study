// 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 `nums`가 매개변수로 주어질 때, `nums`를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

// ---

// ### 제한사항

// - `nums`는 소문자로만 구성되어 있습니다.
// - `nums`는 "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" 들이 공백 없이 조합되어 있습니다.
// - 1 ≤ `nums`의 길이 ≤ 50
// - "zero"는 `nums`의 맨 앞에 올 수 없습니다.
const solution = (nums) => {
    const hash = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    };

    for ([keys, values] of Object.entries(hash)) {
        nums = nums.replaceAll(keys, values);
    }
    return nums;
};

console.log(solution('onetwothreefourfivesixseveneightnine')); // 123456789
console.log(solution('onefourzerosixseven')); // 14067
