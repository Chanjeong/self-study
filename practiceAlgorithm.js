function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const directions = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1]
  ];

  const queue = [[0, 0, 1]];
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  visited[0][0] = true;

  while (queue.length > 0) {
    const [x, y, dist] = queue.shift();

    if (x === n - 1 && y === m - 1) {
      return dist;
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (ny >= 0 && ny < n && nx >= 0 && nx < m && maps[nx][ny] === 1 && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny, dist + 1]);
      }
    }
  }
  return -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1]
  ])
); // 11

//문제는 각 집(1)에 대해 가장 가까운 버스 정류장(0)까지의 거리를 계산하는 것입니다. 이를 해결하기 위해 **BFS(너비 우선 탐색)**를 사용하는 것이 효율적입니다. BFS를 사용하면 거리 정보를 레이어별로 탐색하면서 쉽게 계산할 수 있습니다.
