// 10819. 차이를 최대로

// 🏷️ 문제
// N개의 정수로 이루어진 배열 A가 주어진다. 이때, 배열에 들어있는 정수의 순서를 적절히 바꿔서 다음 식의 최댓값을 구하는 프로그램을 작성하시오.
// |A[0] - A[1]| + |A[1] - A[2]| + ... + |A[N-2] - A[N-1]|

// 🏷️ 입력
// 첫째 줄에 N (3 ≤ N ≤ 8)이 주어진다. 둘째 줄에는 배열 A에 들어있는 정수가 주어진다. 배열에 들어있는 정수는 -100보다 크거나 같고, 100보다 작거나 같다.

// 🏷️ 출력
// 첫째 줄에 배열에 들어있는 수의 순서를 적절히 바꿔서 얻을 수 있는 식의 최댓값을 출력한다.

// 🏷️ 예제 입출력

// 입력
// 6
// 20 1 15 8 4 10

// 출력
// 62

let fs = require("fs");
let input = fs.readFileSync("dfs_11.txt").toString().split("\n");

let n = Number(input[0]);
let array = input[1].split(" ").map(Number);
let visited = Array(n).fill(false);
let seleted = [];
let answer = 0;

function dfs(depth) {
  if (depth == n) {
    let sum = 0;
    for (let i = 0; i < n - 1; i++) {
      sum += Math.abs(seleted[i] - seleted[i + 1]);
    }
    answer = Math.max(answer, sum);
  }
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    if (!visited[i]) {
      visited[i] = true;
      seleted.push(array[i]);
      dfs(depth + 1);
      visited[i] = false;
      seleted.pop();
    }
  }
}

dfs(0);
console.log(answer);
