// 문자열 배열 `strings`가 주어집니다. `strings`의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때 가장 개수가 많은 그룹의 크기를 return 하는 solution 함수를 완성해 주세요.

// ---

// ### 제한사항

// - 1 ≤ `strings`의 길이 ≤ 100,000
//     - 1 ≤ `strings`의 원소의 길이 ≤ 30
//     - `strings`의 원소들은 알파벳 소문자로 이루어진 문자열입니다.

const solution = (strings) => {
    const hash = {};
    // {1: 2, 2: 2, 3:1};
    for (const string of strings) {
        hash[string.length] = (hash[string.length] || 0) + 1;
    }

    return Math.max(...Object.values(hash));
};

console.log(solution(['a', 'bc', 'd', 'efg', 'hi', 'abc', 'efg', 'qwe'])); // 2
