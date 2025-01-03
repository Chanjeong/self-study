function solution(A, B) {
  let cate = [];
  let recommend = new Set();
  for (let i = 0; i < A.length; i++) {
    const [category, broadcast] = A[i];
    if (broadcast === B[0]) {
      cate.push(category);
    }
  }
  for (let i = 0; i < A.length; i++) {
    const [category, broadcast] = A[i];
    if (broadcast !== B[0] && cate.includes(category)) recommend.add(broadcast);
  }

  return Array.from(recommend).length + 1;
}

console.log(
  solution(
    [
      ['Game', 'broadcast1'],
      ['Sport', 'broadcast1'],
      ['Vlog', 'broadcast1'],
      ['Game', 'broadcast2'],
      ['Sport', 'broadcast3'],
      ['Vlog', 'broadcast4']
    ],
    ['broadcast1']
  )
);
