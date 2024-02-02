// 16234. 인구 이동

// 🏷️ 문제
// N×N크기의 땅이 있고, 땅은 1×1개의 칸으로 나누어져 있다. 각각의 땅에는 나라가 하나씩 존재하며, r행 c열에 있는 나라에는 A[r][c]명이 살고 있다. 인접한 나라 사이에는 국경선이 존재한다. 모든 나라는 1×1 크기이기 때문에, 모든 국경선은 정사각형 형태이다.
// 오늘부터 인구 이동이 시작되는 날이다.
// 인구 이동은 하루 동안 다음과 같이 진행되고, 더 이상 아래 방법에 의해 인구 이동이 없을 때까지 지속된다.
// 국경선을 공유하는 두 나라의 인구 차이가 L명 이상, R명 이하라면, 두 나라가 공유하는 국경선을 오늘 하루 동안 연다.
// 위의 조건에 의해 열어야하는 국경선이 모두 열렸다면, 인구 이동을 시작한다.
// 국경선이 열려있어 인접한 칸만을 이용해 이동할 수 있으면, 그 나라를 오늘 하루 동안은 연합이라고 한다.
// 연합을 이루고 있는 각 칸의 인구수는 (연합의 인구수) / (연합을 이루고 있는 칸의 개수)가 된다. 편의상 소수점은 버린다.
// 연합을 해체하고, 모든 국경선을 닫는다.
// 각 나라의 인구수가 주어졌을 때, 인구 이동이 며칠 동안 발생하는지 구하는 프로그램을 작성하시오.

// 🏷️ 입력
// 첫째 줄에 N, L, R이 주어진다. (1 ≤ N ≤ 50, 1 ≤ L ≤ R ≤ 100)
// 둘째 줄부터 N개의 줄에 각 나라의 인구수가 주어진다. r행 c열에 주어지는 정수는 A[r][c]의 값이다. (0 ≤ A[r][c] ≤ 100)
// 인구 이동이 발생하는 일수가 2,000번 보다 작거나 같은 입력만 주어진다.

// 🏷️ 출력
// 인구 이동이 며칠 동안 발생하는지 첫째 줄에 출력한다.

// 🏷️ 예제 입출력

// 입력
// 2 20 50
// 50 30
// 20 40

// 출력
// 1

let fs = require("fs");
let input = fs.readFileSync("bfs_11.txt").toString().split("\n");

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

let [n, l, r] = input[0].split(" ").map(Number);
let graph = [];

for (let i = 1; i <= n; i++) {
  graph.push(input[i].split(" ").map(Number));
}

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

function bfs(x, y, index, union) {
  let united = [[x, y]];
  const queue = new Queue();
  queue.enqueue([x, y]);
  union[x][y] = index;

  let summary = graph[x][y];
  let cnt = 1;

  while (queue.getLength() !== 0) {
    const [x, y] = queue.dequeue();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && ny >= 0 && nx < n && ny < n && union[nx][ny] == -1) {
        let sub = Math.abs(graph[nx][ny] - graph[x][y]);
        if (sub >= l && sub <= r) {
          queue.enqueue([nx, ny]);
          union[nx][ny] = index;
          summary += graph[nx][ny];
          cnt++;
          united.push([nx, ny]);
        }
      }
    }
  }
  for (let unit of united) {
    let [i, j] = unit;
    graph[i][j] = parseInt(summary / cnt);
  }
}

let result = 0;

while (true) {
  let union = Array.from(Array(n), () => Array(n).fill(-1));
  let index = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (union[i][j] == -1) {
        bfs(i, j, index, union);
        index++;
      }
    }
  }
  if (index == n * n) break;
  result++;
}
console.log(result);
