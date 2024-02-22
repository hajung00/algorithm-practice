// 11404. 플로이드

// 🏷️ 문제
// n(2 ≤ n ≤ 100)개의 도시가 있다. 그리고 한 도시에서 출발하여 다른 도시에 도착하는 m(1 ≤ m ≤ 100,000)개의 버스가 있다. 각 버스는 한 번 사용할 때 필요한 비용이 있다.
// 모든 도시의 쌍 (A, B)에 대해서 도시 A에서 B로 가는데 필요한 비용의 최솟값을 구하는 프로그램을 작성하시오.

// 🏷️ 입력
// 첫째 줄에 도시의 개수 n이 주어지고 둘째 줄에는 버스의 개수 m이 주어진다. 그리고 셋째 줄부터 m+2줄까지 다음과 같은 버스의 정보가 주어진다. 먼저 처음에는 그 버스의 출발 도시의 번호가 주어진다. 버스의 정보는 버스의 시작 도시 a, 도착 도시 b, 한 번 타는데 필요한 비용 c로 이루어져 있다. 시작 도시와 도착 도시가 같은 경우는 없다. 비용은 100,000보다 작거나 같은 자연수이다.
// 시작 도시와 도착 도시를 연결하는 노선은 하나가 아닐 수 있다.

// 🏷️ 출력
// n개의 줄을 출력해야 한다. i번째 줄에 출력하는 j번째 숫자는 도시 i에서 j로 가는데 필요한 최소 비용이다. 만약, i에서 j로 갈 수 없는 경우에는 그 자리에 0을 출력한다.

// 🏷️ 예제 입출력

// 입력
// 5
// 14
// 1 2 2
// 1 3 3
// 1 4 1
// 1 5 10
// 2 4 2
// 3 4 1
// 3 5 1
// 4 5 3
// 3 5 10
// 3 1 8
// 1 4 2
// 5 1 7
// 3 4 2
// 5 2 4

// 출력
// 0 2 3 1 4
// 12 0 15 2 5
// 8 5 0 1 1
// 10 7 13 0 3
// 7 4 10 6 0

let fs = require("fs");
let input = fs.readFileSync("dijkstra_2.txt").toString().split("\n");
let INF = 1e9;

let n = Number(input[0]);
let m = Number(input[1]);
let graph = [Array(n + 1).fill(INF)];
for (let i = 1; i <= n; i++) {
  graph.push(Array(n + 1).fill(INF));
  graph[i][i] = 0;
}

for (let i = 2; i <= m + 1; i++) {
  let [a, b, c] = input[i].split(" ").map(Number);
  graph[a][b] = Math.min(graph[a][b], c);
}

for (let k = 1; k <= n; k++) {
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
    }
  }
}

for (let i = 1; i <= n; i++) {
  let line = "";
  for (let j = 1; j <= n; j++) {
    if (graph[i][j] == INF) line += "0 ";
    else line += graph[i][j] + " ";
  }
  console.log(line);
}
