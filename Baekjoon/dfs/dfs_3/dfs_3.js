// 1240. 노드사이의 거리

// 🏷️ 문제
// N개의 노드로 이루어진 트리가 주어지고 M개의 두 노드 쌍을 입력받을 때 두 노드 사이의 거리를 출력하라.

// 🏷️ 입력
// 첫째 줄에 노드의 개수 N과 거리를 알고 싶은 노드 쌍의 개수 M이 입력되고 다음 N-1개의 줄에 트리 상에 연결된 두 점과 거리를 입력받는다. 그 다음 줄에는 거리를 알고 싶은 M개의 노드 쌍이 한 줄에 한 쌍씩 입력된다.

// 🏷️ 출력
// M개의 줄에 차례대로 입력받은 두 노드 사이의 거리를 출력한다.

// 🏷️ 제한

// 2≤N≤1000
// 1≤M≤1000
// 트리 상에 연결된 두 점과 거리는 10\,00 이하인 자연수이다.
// 트리 노드의 번호는 부터 까지 자연수이며, 두 노드가 같은 번호를 갖는 경우는 없다.

// 🏷️ 예제 입출력

// 입력
// 4 2
// 2 1 2
// 4 3 2
// 1 4 3
// 1 2
// 3 2

// 출력
// 2
// 7

let fs = require("fs");
let input = fs.readFileSync("dfs_3.txt").toString().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let graph = [];
let line = n;
let visited;
let distance;

for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 1; i < n; i++) {
  let [x, y, v] = input[i].split(" ").map(Number);
  graph[x].push([y, v]);
  graph[y].push([x, v]);
}

function dfs(x, dist) {
  if (visited[x]) return;
  visited[x] = true;
  distance[x] = dist;
  for (let [y, cost] of graph[x]) {
    dfs(y, dist + cost);
  }
}

for (let i = 0; i < m; i++) {
  let [a, b] = input[line + i].split(" ").map(Number);
  visited = Array(n + 1).fill(false);
  distance = Array(n + 1).fill(-1);
  dfs(a, 0);
  console.log(distance[b]);
}
