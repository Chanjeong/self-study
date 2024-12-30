function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  const compareWords = (word1, word2) => {
    let count = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) count += 1;
      if (count > 1) return false;
    }
    return count === 1;
  };

  let queue = [[begin, 0]];
  let visited = new Set();

  while (queue.length) {
    const [current, steps] = queue.shift();
    if (current === target) return steps;

    for (const word of words) {
      if (!visited.has(word) && compareWords(current, word)) {
        visited.add(word);
        queue.push([word, steps + 1]);
      }
    }
  }
  return 0;
}

console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])); // 4
console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log'])); // 0
