// 11657. 타임머신

// 🏷️ 문제
// N개의 도시가 있다. 그리고 한 도시에서 출발하여 다른 도시에 도착하는 버스가 M개 있다. 각 버스는 A, B, C로 나타낼 수 있는데, A는 시작도시, B는 도착도시, C는 버스를 타고 이동하는데 걸리는 시간이다. 시간 C가 양수가 아닌 경우가 있다. C = 0인 경우는 순간 이동을 하는 경우, C < 0인 경우는 타임머신으로 시간을 되돌아가는 경우이다.
// 1번 도시에서 출발해서 나머지 도시로 가는 가장 빠른 시간을 구하는 프로그램을 작성하시오.

// 🏷️ 입력
// 첫째 줄에 도시의 개수 N (1 ≤ N ≤ 500), 버스 노선의 개수 M (1 ≤ M ≤ 6,000)이 주어진다.
// 둘째 줄부터 M개의 줄에는 버스 노선의 정보 A, B, C (1 ≤ A, B ≤ N, -10,000 ≤ C ≤ 10,000)가 주어진다.

// 🏷️ 출력
// 만약 1번 도시에서 출발해 어떤 도시로 가는 과정에서 시간을 무한히 오래 전으로 되돌릴 수 있다면 첫째 줄에 -1을 출력한다. 그렇지 않다면 N-1개 줄에 걸쳐 각 줄에 1번 도시에서 출발해 2번 도시, 3번 도시, ..., N번 도시로 가는 가장 빠른 시간을 순서대로 출력한다. 만약 해당 도시로 가는 경로가 없다면 대신 -1을 출력한다.

// 🏷️ 예제 입출력

// 입력
// 3 4
// 1 2 4
// 1 3 3
// 2 3 -1
// 3 1 -2

// 출력
// 4
// 3

let fs = require("fs");
let input = fs.readFileSync("dijkstra_3.txt").toString().split("\n");
let INF = 1e9;

let [n, m] = input[0].split(" ").map(Number);
let graph = [];
let dist = Array(n + 1).fill(INF);
for (let i = 0; i < m; i++) {
  graph.push(input[i + 1].split(" ").map(Number));
}

function df(start) {
  dist[start] = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let [cur, next, cost] = graph[j];
      if (dist[cur] != INF && dist[next] > dist[cur] + cost) {
        dist[next] = dist[cur] + cost;
        if (i == n - 1) return true;
      }
    }
  }
  return false;
}

let cycle = df(1);
if (cycle) console.log(-1);
else {
  for (let i = 2; i <= n; i++) {
    if (dist[i] == INF) console.log(-1);
    else console.log(dist[i]);
  }
}

console.log(graph);
