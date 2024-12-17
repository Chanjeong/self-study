// PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다. 알파벳이 담긴 배열 `spell`과 외계어 사전 `dic`이 매개변수로 주어집니다. `spell`에 담긴 알파벳을 한번씩만 모두 사용한 단어가 `dic`에 존재한다면 1, 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.

// ---

// ### 제한사항

// - `spell`과 `dic`의 원소는 알파벳 소문자로만 이루어져있습니다.
// - 2 ≤ `spell`의 크기 ≤ 10
// - `spell`의 원소의 길이는 1입니다.
// - 1 ≤ `dic`의 크기 ≤ 10
// - 1 ≤ `dic`의 원소의 길이 ≤ 10
// - `spell`의 원소를 모두 사용해 단어를 만들어야 합니다.
// - `spell`의 원소를 모두 사용해 만들 수 있는 단어는 `dic`에 두 개 이상 존재하지 않습니다.
// - `dic`과 `spell` 모두 중복된 원소를 갖지 않습니다.
// const solution = (spell, dic) =>
//     // (dic.some((word) => [...word].sort().join('') === spell.sort().join('')) ? 1 : 2);
//     {
//         for (const word of dic) {
//             if (word.length === spell.length && spell.every((c) => word.includes(c))) return 1;
//         }
//         return 2;
//     };

const solution = (spell, dic) => {
    for (const word of dic) {
        const wordSet = new Set(word);
        if (word.length === spell.length && spell.every((c) => wordSet.has(c))) return 1;
    }
    return 2;
};
console.log(solution(['p', 'o', 's'], ['sod', 'eocd', 'qixm', 'adio', 'soo'])); // 2
console.log(solution(['z', 'd', 'x'], ['def', 'dww', 'dzx', 'loveaw'])); // 1
console.log(solution(['s', 'o', 'm', 'd'], ['moos', 'dzx', 'smm', 'sunmmo', 'som'])); // 2
