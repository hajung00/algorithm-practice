// 3190. 뱀

// 🏷️ 문제
// 'Dummy' 라는 도스게임이 있다. 이 게임에는 뱀이 나와서 기어다니는데, 사과를 먹으면 뱀 길이가 늘어난다. 뱀이 이리저리 기어다니다가 벽 또는 자기자신의 몸과 부딪히면 게임이 끝난다.
// 게임은 NxN 정사각 보드위에서 진행되고, 몇몇 칸에는 사과가 놓여져 있다. 보드의 상하좌우 끝에 벽이 있다. 게임이 시작할때 뱀은 맨위 맨좌측에 위치하고 뱀의 길이는 1 이다. 뱀은 처음에 오른쪽을 향한다.
// 뱀은 매 초마다 이동을 하는데 다음과 같은 규칙을 따른다.
// 먼저 뱀은 몸길이를 늘려 머리를 다음칸에 위치시킨다.
// 만약 벽이나 자기자신의 몸과 부딪히면 게임이 끝난다.
// 만약 이동한 칸에 사과가 있다면, 그 칸에 있던 사과가 없어지고 꼬리는 움직이지 않는다.
// 만약 이동한 칸에 사과가 없다면, 몸길이를 줄여서 꼬리가 위치한 칸을 비워준다. 즉, 몸길이는 변하지 않는다.
// 사과의 위치와 뱀의 이동경로가 주어질 때 이 게임이 몇 초에 끝나는지 계산하라.

// 🏷️ 입력
// 첫째 줄에 보드의 크기 N이 주어진다. (2 ≤ N ≤ 100) 다음 줄에 사과의 개수 K가 주어진다. (0 ≤ K ≤ 100)
// 다음 K개의 줄에는 사과의 위치가 주어지는데, 첫 번째 정수는 행, 두 번째 정수는 열 위치를 의미한다. 사과의 위치는 모두 다르며, 맨 위 맨 좌측 (1행 1열) 에는 사과가 없다.
// 다음 줄에는 뱀의 방향 변환 횟수 L 이 주어진다. (1 ≤ L ≤ 100)
// 다음 L개의 줄에는 뱀의 방향 변환 정보가 주어지는데, 정수 X와 문자 C로 이루어져 있으며. 게임 시작 시간으로부터 X초가 끝난 뒤에 왼쪽(C가 'L') 또는 오른쪽(C가 'D')로 90도 방향을 회전시킨다는 뜻이다.
// X는 10,000 이하의 양의 정수이며, 방향 전환 정보는 X가 증가하는 순으로 주어진다.

// 🏷️ 출력
// 첫째 줄에 게임이 몇 초에 끝나는지 출력한다.

// 🏷️ 예제 입출력

// 입력
// 6
// 3
// 3 4
// 2 5
// 5 3
// 3
// 3 D
// 15 L
// 17 D

// 출력
// 9

let fs = require("fs");
let input = fs.readFileSync("bfs_12.txt").toString().split("\n");

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

let n = Number(input[0]);
let graph = [];
for (let i = 0; i <= n; i++) {
  graph.push(Array(n + 1).fill(0));
}
let k = Number(input[1]);
for (let i = 2; i < k + 2; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[x][y] = 1;
}

let l = Number(input[k + 2]);
let info = [];
for (let i = k + 3; i < k + l + 3; i++) {
  let [x, c] = input[i].split(" ");
  info.push([Number(x), c]);
}

let dx = [0, 1, 0, -1]; //동남서북
let dy = [1, 0, -1, 0];

function turn(direction, c) {
  if (c == "L") {
    direction = direction - 1;
    if (direction == -1) direction = 3;
  } else direction = (direction + 1) % 4;
  return direction;
}

let [x, y] = [1, 1];
let direction = 0;
let time = 0;
let index = 0;
graph[x][y] = 2;

const queue = new Queue();
queue.enqueue([x, y]);
while (true) {
  let nx = x + dx[direction];
  let ny = y + dy[direction];
  if (nx > 0 && ny > 0 && nx <= n && ny <= n && graph[nx][ny] != 2) {
    if (graph[nx][ny] == 0) {
      graph[nx][ny] = 2;
      queue.enqueue([nx, ny]);
      const [px, py] = queue.dequeue();
      graph[px][py] = 0;
    }
    if (graph[nx][ny] == 1) {
      graph[nx][ny] = 2;
      queue.enqueue([nx, ny]);
    }
  } else {
    time++;
    break;
  }
  [x, y] = [nx, ny];
  time++;

  if (index < l && time == info[index][0]) {
    direction = turn(direction, info[index][1]);
    index++;
  }
}

console.log(time);
