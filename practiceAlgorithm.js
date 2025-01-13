function solution(w, h) {
  function gcb(a, b) {
    return b === 0 ? a : gcb(b, a % b);
  }

  const totalSquare = w * h;
  const trash = w + h - gcb(w, h);

  return totalSquare - trash;
}

console.log(solution(8, 12));
