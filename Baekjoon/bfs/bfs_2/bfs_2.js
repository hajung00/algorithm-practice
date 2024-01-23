// 7562. 나이트의 이동

// 🏷️ 문제
// 체스판 위에 한 나이트가 놓여져 있다. 나이트가 한 번에 이동할 수 있는 칸은 아래 그림에 나와있다. 나이트가 이동하려고 하는 칸이 주어진다.
// 나이트는 몇 번 움직이면 이 칸으로 이동할 수 있을까?

// 🏷️ 입력
// 입력의 첫째 줄에는 테스트 케이스의 개수가 주어진다.
// 각 테스트 케이스는 세 줄로 이루어져 있다. 첫째 줄에는 체스판의 한 변의 길이 l(4 ≤ l ≤ 300)이 주어진다. 체스판의 크기는 l × l이다. 체스판의 각 칸은 두 수의 쌍 {0, ..., l-1} × {0, ..., l-1}로 나타낼 수 있다.
// 둘째 줄과 셋째 줄에는 나이트가 현재 있는 칸, 나이트가 이동하려고 하는 칸이 주어진다.

// 🏷️ 출력
// 각 테스트 케이스마다 나이트가 최소 몇 번만에 이동할 수 있는지 출력한다.

// 🏷️ 예제 입출력

// 입력
// 3
// 8
// 0 0
// 7 0
// 100
// 0 0
// 30 50
// 10
// 1 1
// 1 1

// 출력
// 5
// 28
// 0

let fs = require("fs");
let input = fs.readFileSync("bfs_2.txt").toString().split("\n");

let testCase = Number(input[0]);
let line = 1;
let dx = [-1, -2, -2, -1, 1, 2, 2, 1];
let dy = [-2, -1, 1, 2, 2, 1, -1, -2];

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

while (testCase--) {
  let I = Number(input[line]);
  let [cx, cy] = input[line + 1].split(" ").map(Number);
  let [tx, ty] = input[line + 2].split(" ").map(Number);
  let visited = Array(I)
    .fill()
    .map(() => Array(I).fill(0));
  const queue = new Queue();
  queue.enqueue([cx, cy]);
  visited[cx][cy] = 1;

  while (queue.getLength() != 0) {
    let current = queue.dequeue();
    for (let i = 0; i < 8; i++) {
      let nx = current[0] + dx[i];
      let ny = current[1] + dy[i];
      if (nx < 0 || ny < 0 || nx >= I || ny >= I) continue;
      if (visited[nx][ny] == 0) {
        visited[nx][ny] = visited[current[0]][current[1]] + 1;
        queue.enqueue([nx, ny]);
      }
    }
  }
  console.log(visited[tx][ty] - 1);
  line += 3;
}
