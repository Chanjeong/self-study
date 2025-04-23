let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].trim().split(' ').map(Number);

const visited = new Array(N + 1).fill(false);

function backTracking(path) {
  if (path.length === M) {
    console.log(path.join(' '));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if ((!visited[i] && path[path.length - 1] < i) || path.length === 0) {
      visited[i] = true;
      path.push(i);
      backTracking(path);
      path.pop();
      visited[i] = false;
    }
  }
}

backTracking([]);
