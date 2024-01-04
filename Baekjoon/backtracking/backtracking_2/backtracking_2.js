// 10974. 모든 순열

// 🏷️ 문제
// N이 주어졌을 때, 1부터 N까지의 수로 이루어진 순열을 사전순으로 출력하는 프로그램을 작성하시오.

// 🏷️ 입력
// 첫째 줄에 N(1 ≤ N ≤ 8)이 주어진다.

// 🏷️ 출력
// 첫째 줄부터 N!개의 줄에 걸쳐서 모든 순열을 사전순으로 출력한다.

// 🏷️ 예제 입출력

// 입력
// 3

// 출력
// 1 2 3
// 1 3 2
// 2 1 3
// 2 3 1
// 3 1 2
// 3 2 1

let fs = require("fs");
let input = fs.readFileSync("backtracking_2.txt").toString().split("\n");

let n = Number(input[0]);
let arr = Array(n)
  .fill()
  .map((v, i) => i + 1);
let visited = Array(n).fill(false);
let selected = [];

function dfs(arr, depth) {
  if (n == depth) {
    console.log(selected.toString().replaceAll(",", " "));
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue;
    selected.push(i + 1);
    visited[i] = true;
    dfs(arr, depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

dfs(arr, 0);
