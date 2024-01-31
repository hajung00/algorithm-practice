// 5214. 환승

// 🏷️ 문제
// 아주 먼 미래에 사람들이 가장 많이 사용하는 대중교통은 하이퍼튜브이다.
// 하이퍼튜브 하나는 역 K개를 서로 연결한다. 1번역에서 N번역으로 가는데 방문하는 최소 역의 수는 몇 개일까?

// 🏷️ 입력
// 첫째 줄에 역의 수 N과 한 하이퍼튜브가 서로 연결하는 역의 개수 K, 하이퍼튜브의 개수 M이 주어진다. (1 ≤ N ≤ 100,000, 1 ≤ K, M ≤ 1000)
// 다음 M개 줄에는 하이퍼튜브의 정보가 한 줄에 하나씩 주어진다. 총 K개 숫자가 주어지며, 이 숫자는 그 하이퍼튜브가 서로 연결하는 역의 번호이다.

// 🏷️ 출력
// 첫째 줄에 1번역에서 N번역으로 가는데 방문하는 역의 개수의 최솟값을 출력한다. 만약, 갈 수 없다면 -1을 출력한다.

// 🏷️ 예제 입출력

// 입력
// 9 3 5
// 1 2 3
// 1 4 5
// 3 6 7
// 5 6 7
// 6 8 9

// 출력
// 4

let fs = require("fs");
let input = fs.readFileSync("bfs_7.txt").toString().split("\n");

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

let [n, k, m] = input[0].split(" ").map(Number);
let graph = [];
let visited = Array(n + m + 1).fill(false);
let check = false;

for (let i = 1; i <= n + m; i++) {
  graph[i] = [];
}

for (let i = 1; i <= m; i++) {
  let cur = input[i].split(" ").map(Number);
  for (let x of cur) {
    graph[x].push(n + i);
    graph[n + i].push(x);
  }
}

const queue = new Queue();
queue.enqueue([1, 1]);
visited[1] = true;

while (queue.getLength() !== 0) {
  let [node, distance] = queue.dequeue();
  if (node == n) {
    console.log(parseInt(distance / 2) + 1);
    check = true;
  }
  for (let next of graph[node]) {
    if (!visited[next]) {
      queue.enqueue([next, distance + 1]);
      visited[next] = true;
    }
  }
}

if (!check) console.log(-1);
