// 길이가 같은 두 문자열 `str1`과 `str2`가 주어집니다.

// 두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.

// ---

// ### 제한사항

// - 1 ≤ `str1`의 길이 = `str2`의 길이 ≤ 10
//     - `str1`과 `str2`는 알파벳 소문자로 이루어진 문자열입니다.
const solution = (str1, str2) => {
    return [...str1].map((v, i) => v + str2[i]).join('');
    //return [...str1].reduce((prev, char, i) => prev + char + str2[i], '');
};

console.log(solution('aaaaa', 'bbbbb')); // 'ababababab'
