// 9663. N-Queen

// 🏷️ 문제
// N-Queen 문제는 크기가 N × N인 체스판 위에 퀸 N개를 서로 공격할 수 없게 놓는 문제이다.
// N이 주어졌을 때, 퀸을 놓는 방법의 수를 구하는 프로그램을 작성하시오.

// 🏷️ 입력
// 첫째 줄에 N이 주어진다. (1 ≤ N < 15)

// 🏷️ 출력
// 첫째 줄에 퀸 N개를 서로 공격할 수 없게 놓는 경우의 수를 출력한다.

// 🏷️ 예제 입출력

// 입력
// 8

// 출력
// 92

let fs = require("fs");
let input = fs.readFileSync("backtracking_10.txt").toString().split("\n");

let n = Number(input[0]);
let seleted = [];
let answer = 0;

function check(x, y) {
  for (let [a, b] of seleted) {
    if (a == x || b == y) return false;
    if (Math.abs(x - a) == Math.abs(y - b)) return false;
  }
  return true;
}

function dfs(depth) {
  if (depth == n) {
    answer++;
  }
  for (let i = 0; i < n; i++) {
    if (!check(depth, i)) continue;
    seleted.push([depth, i]);
    dfs(depth + 1);
    seleted.pop();
  }
}

dfs(0);
console.log(answer);
