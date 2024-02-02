// 2638. 치즈

// 🏷️ 문제
// N×M의 모눈종이 위에 아주 얇은 치즈가 <그림 1>과 같이 표시되어 있다. 단, N 은 세로 격자의 수이고, M 은 가로 격자의 수이다. 이 치즈는 냉동 보관을 해야만 하는데 실내온도에 내어놓으면 공기와 접촉하여 천천히 녹는다. 그런데 이러한 모눈종이 모양의 치즈에서 각 치즈 격자(작 은 정사각형 모양)의 4변 중에서 적어도 2변 이상이 실내온도의 공기와 접촉한 것은 정확히 한시간만에 녹아 없어져 버린다. 따라서 아래 <그림 1> 모양과 같은 치즈(회색으로 표시된 부분)라면 C로 표시된 모든 치즈 격자는 한 시간 후에 사라진다.
// <그림 2>와 같이 치즈 내부에 있는 공간은 치즈 외부 공기와 접촉하지 않는 것으로 가정한다. 그러므 로 이 공간에 접촉한 치즈 격자는 녹지 않고 C로 표시된 치즈 격자만 사라진다. 그러나 한 시간 후, 이 공간으로 외부공기가 유입되면 <그림 3>에서와 같이 C로 표시된 치즈 격자들이 사라지게 된다.
// 모눈종이의 맨 가장자리에는 치즈가 놓이지 않는 것으로 가정한다. 입력으로 주어진 치즈가 모두 녹아 없어지는데 걸리는 정확한 시간을 구하는 프로그램을 작성하시오.

// 🏷️ 입력
// 첫째 줄에는 모눈종이의 크기를 나타내는 두 개의 정수 N, M (5 ≤ N, M ≤ 100)이 주어진다.
// 그 다음 N개의 줄에는 모눈종이 위의 격자에 치즈가 있는 부분은 1로 표시되고, 치즈가 없는 부분은 0으로 표시된다. 또한, 각 0과 1은 하나의 공백으로 분리되어 있다.

// 🏷️ 출력
// 출력으로는 주어진 치즈가 모두 녹아 없어지는데 걸리는 정확한 시간을 정수로 첫 줄에 출력한다.

// 🏷️ 예제 입출력

// 입력
// 8 9
// 0 0 0 0 0 0 0 0 0
// 0 0 0 1 1 0 0 0 0
// 0 0 0 1 1 0 1 1 0
// 0 0 1 1 1 1 1 1 0
// 0 0 1 1 1 1 1 0 0
// 0 0 1 1 0 1 1 0 0
// 0 0 0 0 0 0 0 0 0
// 0 0 0 0 0 0 0 0 0

// 출력
// 4

let fs = require("fs");
let input = fs.readFileSync("bfs_9.txt").toString().split("\n");

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

let [n, m] = input[0].split(" ").map(Number);
let graph = [];

for (let i = 1; i <= n; i++) {
  graph.push(input[i].split(" ").map(Number));
}

let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

function bfs() {
  let visited = [];
  for (let i = 0; i < n; i++) visited.push(Array(m).fill(false));
  visited[0][0] = true;
  const queue = new Queue();
  queue.enqueue([0, 0]);
  while (queue.getLength() !== 0) {
    const [x, y] = queue.dequeue();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

      if (!visited[nx][ny]) {
        if (graph[nx][ny] >= 1) graph[nx][ny]++;
        else {
          queue.enqueue([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }
  }
}

function melt() {
  let finish = true;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] >= 3) {
        graph[i][j] = 0;
        finish = false;
      } else if (graph[i][j] == 2) graph[i][j] = 1;
    }
  }
  return finish;
}

let result = 0;
while (true) {
  bfs();
  if (melt()) {
    console.log(result);
    break;
  } else result++;
}
