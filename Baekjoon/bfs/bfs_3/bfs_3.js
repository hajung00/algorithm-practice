// 1707. 이분 그래프

// 🏷️ 문제
// 그래프의 정점의 집합을 둘로 분할하여, 각 집합에 속한 정점끼리는 서로 인접하지 않도록 분할할 수 있을 때, 그러한 그래프를 특별히 이분 그래프 (Bipartite Graph) 라 부른다.
// 그래프가 입력으로 주어졌을 때, 이 그래프가 이분 그래프인지 아닌지 판별하는 프로그램을 작성하시오.

// 🏷️ 입력
// 입력은 여러 개의 테스트 케이스로 구성되어 있는데, 첫째 줄에 테스트 케이스의 개수 K가 주어진다. 각 테스트 케이스의 첫째 줄에는 그래프의 정점의 개수 V와 간선의 개수 E가 빈 칸을 사이에 두고 순서대로 주어진다. 각 정점에는 1부터 V까지 차례로 번호가 붙어 있다.
// 이어서 둘째 줄부터 E개의 줄에 걸쳐 간선에 대한 정보가 주어지는데, 각 줄에 인접한 두 정점의 번호 u, v (u ≠ v)가 빈 칸을 사이에 두고 주어진다.

// 🏷️ 출력
// K개의 줄에 걸쳐 입력으로 주어진 그래프가 이분 그래프이면 YES, 아니면 NO를 순서대로 출력한다.

// 🏷️ 예제 입출력

// 입력
// 2
// 3 2
// 1 3
// 2 3
// 4 4
// 1 2
// 2 3
// 3 4
// 4 2

// 출력
// YES
// NO

let fs = require("fs");
let input = fs.readFileSync("bfs_3.txt").toString().split("\n");

let testCase = Number(input[0]);
let line = 1;

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

function bfs(item, graph, visited) {
  const queue = new Queue();
  queue.enqueue(item);
  visited[item] = 0;
  while (queue.getLength() != 0) {
    const x = queue.dequeue();
    for (let y of graph[x]) {
      if (visited[y] == -1) {
        visited[y] = (visited[x] + 1) % 2;
        queue.enqueue(y);
      }
    }
  }
}

function isBipartite(graph, visited) {
  for (let x = 1; x < visited.length; x++) {
    for (let y of graph[x]) {
      if (visited[x] == visited[y]) return false;
    }
  }
  return true;
}

while (testCase--) {
  let [v, e] = input[line].split(" ").map(Number);
  let visited = Array(v + 1).fill(-1);
  let graph = [];
  for (let i = 1; i <= v; i++) graph[i] = [];
  for (let i = 1; i <= e; i++) {
    let [x, y] = input[line + i].split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }
  for (let i = 1; i <= v; i++) {
    if (visited[i] == -1) bfs(i, graph, visited);
  }
  if (isBipartite(graph, visited)) console.log("YES");
  else console.log("NO");
  line += e + 1;
}
