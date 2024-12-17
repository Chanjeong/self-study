function solution(numbers) {
  if (numbers.length === 1) return [numbers];

  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    const fixed = numbers[i];
    const rest = numbers.slice(0, i).concat(numbers.slice(i + 1));

    const permutations = permute(rest);
    for (const perm of permutations) {
      result.push([fixed, ...perm]);
    }
  }

  return result;
}
console.log(permute([1, 2, 3]));

function solution(brown, yellow) {
  const total = brown + yellow;

  for (let height = 3; height <= Math.sqrt(total); height++) {
    if (total % height === 0) {
      const width = total / height;

      if ((width - 2) * (height - 2) === yellow) {
        return [width, height];
      }
    }
  }
  return [];
}
function solution(field, n) {
  const r = field.length;
  const c = field[0].length;
  let maxPlants = 0;

  for (let i = 0; i <= r - n; i++) {
    for (let j = 0; j <= c - n; j++) {
      let sum = 0;

      for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
          sum += field[i + x][j + y];
        }
      }

      maxPlants = Math.max(maxPlants, sum);
    }
  }

  return maxPlants;
}
function solution(N, K) {
  let count = 0;
  let people = Array.from({ length: N }, (_, i) => i + 1);
  while (people.length !== 1) {
    count = (count + K - 1) % people.length;
    people.splice(count, 1);
  }
  return people[0];
}

console.log(solution(7, 3));

function solution(n) {
  let matrix = Array.from({ length: n }, () => Array(n).fill(0));
  let num = 1;
  let direction = 0; // 0: right, 1: down, 2: left, 3: up
  let row = 0,
    col = 0;

  const directions = [
    [0, 1], // right
    [1, 0], // down
    [0, -1], // left
    [-1, 0] // up
  ];

  while (num <= n * n) {
    matrix[row][col] = num++;
    let nextRow = row + directions[direction][0];
    let nextCol = col + directions[direction][1];

    if (nextRow < 0 || nextRow >= n || nextCol < 0 || nextCol >= n || matrix[nextRow][nextCol] !== 0) {
      direction = (direction + 1) % 4; // 방향 전환 (시계방향)
      nextRow = row + directions[direction][0];
      nextCol = col + directions[direction][1];
    }

    row = nextRow;
    col = nextCol;
  }

  return matrix;
}

// 이 계산은 direction 값을 1 증가시키고, 그 결과를 4로 나눈 나머지로 다시 설정합니다.

// 이 연산을 통해 direction은 항상 0, 1, 2, 3 중 하나의 값을 가지게 되며, 다음과 같이 동작합니다:

// 0 + 1 = 1 % 4 = 1 (오른쪽 → 아래)
// 1 + 1 = 2 % 4 = 2 (아래 → 왼쪽)
// 2 + 1 = 3 % 4 = 3 (왼쪽 → 위)
// 3 + 1 = 4 % 4 = 0 (위 → 다시 오른쪽)
// 이렇게 해서 direction 값이 계속 0, 1, 2, 3 사이에서 순환하며, 시계방향으로 방향을 전환하게 됩니다.

// 요약
// 4로 나누는 이유: direction 값이 0에서 3까지 반복적으로 순환하도록 하기 위해.
// 모듈로 연산의 역할: direction 값이 4 이상이 되지 않도록 제한하여 시계방향으로 회전할 때 올바른 방향으로 설정되게 함.

function solution(h, w) {
  let dp = Array.from({ length: h + 1 }, () => Array(w + 1).fill(0));

  dp[1][1] = 1;

  for (let i = 1; i <= h; i++) {
    for (let j = 1; j <= w; j++) {
      if (i > 1) dp[i][j] += dp[i - 1][j];
      if (j > 1) dp[i][j] += dp[i][j - 1];
    }
  }

  return dp[h][w];
}

console.log(solution(2, 3));

function solution(A, K) {
  let sorted = A.sort((a, b) => a - b);
  let left = 0;
  let right = sorted.length - 1;
  let count = 0;

  while (left <= right) {
    if (sorted[left] + sorted[right] <= K) {
      left++;
    }
    right--;
    count++;
  }

  return count;
}
function solution(puzzle, word) {
  const rows = puzzle.length;
  const cols = puzzle[0].length;
  const wordLength = word.length;

  // 방향 배열: 상, 하, 좌, 우
  const directions = [
    [-1, 0], // 위
    [1, 0], // 아래
    [0, -1], // 왼쪽
    [0, 1] // 오른쪽
  ];

  function dfs(x, y, index) {
    // 단어를 모두 찾으면 true를 반환
    if (index === wordLength) return true;

    // 범위를 벗어나거나 현재 위치의 글자가 일치하지 않으면 false를 반환
    if (x < 0 || x >= rows || y < 0 || y >= cols || puzzle[x][y] !== word[index]) {
      return false;
    }

    // 현재 위치의 글자를 임시로 저장하고 방문 표시
    const temp = puzzle[x][y];
    puzzle[x][y] = '#';

    // 4가지 방향으로 이동
    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;
      if (dfs(newX, newY, index + 1)) {
        return true;
      }
    }

    // 방문 표시를 해제
    puzzle[x][y] = temp;

    return false;
  }

  // 퍼즐의 모든 위치에서 탐색 시작
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (puzzle[i][j] === word[0] && dfs(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
}

function solution(State, linkName) {
  const targetState = Array(State.length).fill(1).join('');
  const visited = new Set();
  const queue = [{ state: State.slice(), steps: 0 }];

  visited.add(State.join(''));

  while (queue.length > 0) {
    const { state, steps } = queue.shift();
    const currentStateString = state.join('');

    if (currentStateString === targetState) {
      return steps;
    }

    for (let i = 0; i < linkName.length; i++) {
      const newState = state.slice();
      for (const index of linkName[i]) {
        newState[index] = newState[index] === 1 ? 0 : 1;
      }

      const newStateString = newState.join('');
      if (!visited.has(newStateString)) {
        visited.add(newStateString);
        queue.push({ state: newState, steps: steps + 1 });
      }
    }
  }

  return -1;
}

function solution(arr) {
  for (let i = 1; i <= Math.floor((arr.length - 1) / 2); i++) {
    let left = 2 * i;
    let right = 2 * i + 1;

    if (left < arr.length && arr[i] > arr[left]) {
      return 'NO';
    }

    if (right < arr.length && arr[i] > arr[right]) {
      return 'NO';
    }
  }
  return 'YES';
}

console.log(solution([0, 5, 10, 15])); // YES
console.log(solution([0, 20, 22, 17])); // NO

function solution(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  const dfs = (i, j) => {
    if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] === '0') {
      return;
    }
    grid[i][j] = '0'; // 방문한 위치를 0으로 변경
    dfs(i - 1, j); // 상
    dfs(i + 1, j); // 하
    dfs(i, j - 1); // 좌
    dfs(i, j + 1); // 우
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1') {
        count++;
        dfs(i, j);
      }
    }
  }

  return count;
}

console.log(
  solution([
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
  ])
); // Output: 3
function solution(history, infected) {
  let infect = false;
  let currentPatients = [];
  let res = [];

  for (let i = 0; i < history.length; i++) {
    let patient = Math.abs(history[i]);

    if (history[i] > 0) {
      // 환자가 병원에 들어올 때
      currentPatients.push(patient);
      if (patient === infected) {
        infect = true;
        // 감염된 환자가 들어오면 현재 병원에 있는 모든 환자를 결과에 추가
        for (let p of currentPatients) {
          if (p !== infected && !res.includes(p)) {
            res.push(p);
          }
        }
      } else if (infect && !res.includes(patient)) {
        res.push(patient);
      }
    } else {
      // 환자가 병원을 떠날 때
      currentPatients = currentPatients.filter(p => p !== patient);
      if (patient === infected) {
        infect = false;
      }
    }
  }

  return res.sort((a, b) => a - b);
}

console.log(solution([3, 2, -3, 1, 5, 6, -1, -2, 4, -4, 1, -5, -6, -1], 2)); // 예상 출력: [1, 3, 5, 6]
console.log(solution([1, -1, 2, -2], 2)); // 예상 출력: []
console.log(solution([1, 2, -1, 3, -2, -3], 2)); // 예상 출력: [1, 3]
console.log(solution([1, 3, 2, -2, -1, -3], 3)); // 예상 출력: [1, 2]
