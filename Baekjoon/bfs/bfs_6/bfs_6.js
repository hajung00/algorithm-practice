// 18352. 특정 거리의 도시 찾기

// 🏷️ 문제
// 어떤 나라에는 1번부터 N번까지의 도시와 M개의 단방향 도로가 존재한다. 모든 도로의 거리는 1이다.
// 이 때 특정한 도시 X로부터 출발하여 도달할 수 있는 모든 도시 중에서, 최단 거리가 정확히 K인 모든 도시들의 번호를 출력하는 프로그램을 작성하시오.
// 또한 출발 도시 X에서 출발 도시 X로 가는 최단 거리는 항상 0이라고 가정한다.

// 🏷️ 입력
// 첫째 줄에 도시의 개수 N, 도로의 개수 M, 거리 정보 K, 출발 도시의 번호 X가 주어진다. (2 ≤ N ≤ 300,000, 1 ≤ M ≤ 1,000,000, 1 ≤ K ≤ 300,000, 1 ≤ X ≤ N) 둘째 줄부터 M개의 줄에 걸쳐서 두 개의 자연수 A, B가 공백을 기준으로 구분되어 주어진다.
// 이는 A번 도시에서 B번 도시로 이동하는 단방향 도로가 존재한다는 의미다. (1 ≤ A, B ≤ N) 단, A와 B는 서로 다른 자연수이다.

// 🏷️ 출력
// X로부터 출발하여 도달할 수 있는 도시 중에서, 최단 거리가 K인 모든 도시의 번호를 한 줄에 하나씩 오름차순으로 출력한다.
// 이 때 도달할 수 있는 도시 중에서, 최단 거리가 K인 도시가 하나도 존재하지 않으면 -1을 출력한다.

// 🏷️ 예제 입출력

// 입력
// 4 4 2 1
// 1 2
// 1 3
// 2 3
// 2 4

// 출력
// 4

let fs = require("fs");
let input = fs.readFileSync("bfs_6.txt").toString().split("\n");

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

let [n, m, k, x] = input[0].split(" ").map(Number);
let graph = [];
let distance = Array(n + 1).fill(-1);
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 1; i <= m; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
}

const queue = new Queue();
queue.enqueue(x);
distance[x] = 0;
let check = false;

while (queue.getLength() != 0) {
  const cur = queue.dequeue();

  for (let y of graph[cur]) {
    if (distance[y] == -1) {
      queue.enqueue(y);
      distance[y] = distance[cur] + 1;
    }
  }
}

for (let i = 1; i <= n; i++) {
  if (distance[i] == k) {
    console.log(i);
    check = true;
  }
}

if (!check) console.log(-1);
