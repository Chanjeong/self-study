function solution(n, computers) {
  let visited = new Array(n).fill(false);

  let networkCount = 0;

  function DFS(node) {
    visited[node] = true;

    for (let i = 0; i < n; i++) {
      if (computers[node][i] === 1 && !visited[i]) {
        DFS(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      DFS(i);
      networkCount += 1;
    }
  }
  return networkCount;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1]
  ])
);
