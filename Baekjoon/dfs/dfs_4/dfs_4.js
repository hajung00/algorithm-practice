// 4803. 트리

// 🏷️ 문제
// 그래프는 정점과 간선으로 이루어져 있다. 두 정점 사이에 경로가 있다면, 두 정점은 연결되어 있다고 한다. 연결 요소는 모든 정점이 서로 연결되어 있는 정점의 부분집합이다. 그래프는 하나 또는 그 이상의 연결 요소로 이루어져 있다.
// 트리는 사이클이 없는 연결 요소이다. 트리에는 여러 성질이 있다. 예를 들어, 트리는 정점이 n개, 간선이 n-1개 있다. 또, 임의의 두 정점에 대해서 경로가 유일하다.
// 그래프가 주어졌을 때, 트리의 개수를 세는 프로그램을 작성하시오.

// 🏷️ 입력
// 입력은 여러 개의 테스트 케이스로 이루어져 있다. 각 테스트 케이스의 첫째 줄에는 n ≤ 500과 m ≤ n(n-1)/2을 만족하는 정점의 개수 n과 간선의 개수 m이 주어진다. 다음 m개의 줄에는 간선을 나타내는 두 개의 정수가 주어진다. 같은 간선은 여러 번 주어지지 않는다. 정점은 1번부터 n번까지 번호가 매겨져 있다. 입력의 마지막 줄에는 0이 두 개 주어진다.

// 🏷️ 출력
// 입력으로 주어진 그래프에 트리가 없다면 "No trees."를, 한 개라면 "There is one tree."를, T개(T > 1)라면 "A forest of T trees."를 테스트 케이스 번호와 함께 출력한다.

// 🏷️ 예제 입출력

// 입력
// 6 3
// 1 2
// 2 3
// 3 4
// 6 5
// 1 2
// 2 3
// 3 4
// 4 5
// 5 6
// 6 6
// 1 2
// 2 3
// 1 3
// 4 5
// 5 6
// 6 4
// 0 0

// 출력
// Case 1: A forest of 3 trees.
// Case 2: There is one tree.
// Case 3: No trees.

let fs = require("fs");
let input = fs.readFileSync("dfs_4.txt").toString().split("\n");

let line = 0;
let testCase = 1;
let graph = [];
let visited;

function cycle(x, prev) {
  visited[x] = true;
  for (let y of graph[x]) {
    if (!visited[y]) {
      if (cycle(y, x)) return true;
    } else if (y !== prev) return true;
  }
  return false;
}

while (true) {
  let [x, y] = input[line].split(" ").map(Number);
  if (x == 0 && y == 0) break;
  for (let i = 1; i <= x; i++) {
    graph[i] = [];
  }
  visited = Array(x + 1).fill(false);
  for (let i = 1; i <= y; i++) {
    let [a, b] = input[line + i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }
  let count = 0;
  for (let i = 1; i <= x; i++) {
    if (!visited[i]) {
      if (!cycle(i, 0)) count++;
    }
  }

  if (count == 0) console.log(`Case ${testCase}: No trees.`);
  else if (count == 1) console.log(`Case ${testCase}: There is one tree.`);
  else if (count > 1)
    console.log(`Case ${testCase}: A forest of ${count} trees.`);

  line += y + 1;
  testCase++;
}
