let input = require('fs')
  .readFileSync('C:/Users/ckswj/Desktop/Zerobase/Backjoon/example.txt', 'utf-8')
  .toString()
  .trim()
  .split('\n');
// let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solveNQueens(n) {
  let count = 0;

  const cols = new Array(n).fill(false); // 열에 퀸이 있는지
  const diag1 = new Array(2 * n - 1).fill(false); // ↘ 대각선 (row + col)
  const diag2 = new Array(2 * n - 1).fill(false); // ↙ 대각선 (row - col + n - 1)

  function backtrack(row) {
    if (row === n) {
      count++;
      return;
    }

    for (let col = 0; col < n; col++) {
      if (cols[col] || diag1[row + col] || diag2[row - col + n - 1]) continue;

      cols[col] = true;
      diag1[row + col] = true;
      diag2[row - col + n - 1] = true;

      backtrack(row + 1);

      cols[col] = false;
      diag1[row + col] = false;
      diag2[row - col + n - 1] = false;
    }
  }

  backtrack(0);
  return count;
}

console.log(solveNQueens(+input[0]));
