// 10026. 적록색약

// 🏷️ 문제
// 적록색약은 빨간색과 초록색의 차이를 거의 느끼지 못한다. 따라서, 적록색약인 사람이 보는 그림은 아닌 사람이 보는 그림과는 좀 다를 수 있다.
// 크기가 N×N인 그리드의 각 칸에 R(빨강), G(초록), B(파랑) 중 하나를 색칠한 그림이 있다. 그림은 몇 개의 구역으로 나뉘어져 있는데, 구역은 같은 색으로 이루어져 있다. 또, 같은 색상이 상하좌우로 인접해 있는 경우에 두 글자는 같은 구역에 속한다. (색상의 차이를 거의 느끼지 못하는 경우도 같은 색상이라 한다)
// 예를 들어, 그림이 아래와 같은 경우에

// RRRBB
// GGBBB
// BBBRR
// BBRRR
// RRRRR

// 적록색약이 아닌 사람이 봤을 때 구역의 수는 총 4개이다. (빨강 2, 파랑 1, 초록 1) 하지만, 적록색약인 사람은 구역을 3개 볼 수 있다. (빨강-초록 2, 파랑 1)
// 그림이 입력으로 주어졌을 때, 적록색약인 사람이 봤을 때와 아닌 사람이 봤을 때 구역의 수를 구하는 프로그램을 작성하시오.

// 🏷️ 입력
// 첫째 줄에 N이 주어진다. (1 ≤ N ≤ 100)
// 둘째 줄부터 N개 줄에는 그림이 주어진다.

// 🏷️ 출력
// 적록색약이 아닌 사람이 봤을 때의 구역의 개수와 적록색약인 사람이 봤을 때의 구역의 수를 공백으로 구분해 출력한다.

// 🏷️ 예제 입출력

// 입력
// 5
// RRRBB
// GGBBB
// BBBRR
// BBRRR
// RRRRR

// 출력
// 4 3

let fs = require("fs");
let input = fs.readFileSync("dfs_9.txt").toString().split("\n");

let n = Number(input[0]);
let array = [];
for (let i = 1; i <= n; i++) array.push(input[i].split(""));

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let result1 = 0;
let result2 = 0;

function dfs(x, y) {
  if (!visited[x][y]) {
    visited[x][y] = true;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
      if (array[x][y] == array[nx][ny]) dfs(nx, ny);
    }
    return true;
  }
  return false;
}

let visited = [];
for (let i = 0; i < n; i++) visited.push(Array(n).fill(false));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(i, j)) result1++;
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (array[i][j] == "R") array[i][j] = "G";
  }
}

visited = [];
for (let i = 0; i < n; i++) visited.push(Array(n).fill(false));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (dfs(i, j)) result2++;
  }
}

console.log(result1 + " " + result2);
