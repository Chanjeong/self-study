const directions = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1]
];

function BFS(startData, maps) {
  const row = maps.length;
  const col = maps[0].length;
  let queue = [startData];

  while (queue.length) {
    let [x, y, dist] = queue.shift();
    maps[x][y] = 0;

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx === row - 1 && ny === col - 1) {
        return dist + 1;
      } else if (nx >= 0 && nx < row && ny >= 0 && ny < col && maps[nx][ny] === 1) {
        maps[nx][ny] = 0;
        queue.push([nx, ny, dist + 1]);
      }
    }
  }
  return -1;
}

function solution(maps) {
  return BFS([0, 0, 1], maps);
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
