// 1697. 숨바꼭질

// 🏷️ 문제
// 수빈이는 동생과 숨바꼭질을 하고 있다. 수빈이는 현재 점 N(0 ≤ N ≤ 100,000)에 있고, 동생은 점 K(0 ≤ K ≤ 100,000)에 있다.
// 수빈이는 걷거나 순간이동을 할 수 있다. 만약, 수빈이의 위치가 X일 때 걷는다면 1초 후에 X-1 또는 X+1로 이동하게 된다. 순간이동을 하는 경우에는 1초 후에 2*X의 위치로 이동하게 된다.
// 수빈이와 동생의 위치가 주어졌을 때, 수빈이가 동생을 찾을 수 있는 가장 빠른 시간이 몇 초 후인지 구하는 프로그램을 작성하시오.

// 🏷️ 입력
// 첫 번째 줄에 수빈이가 있는 위치 N과 동생이 있는 위치 K가 주어진다. N과 K는 정수이다.

// 🏷️ 출력
// 수빈이가 동생을 찾는 가장 빠른 시간을 출력한다.

// 🏷️ 예제 입출력

// 입력
// 5 17

// 출력
// 4

let fs = require("fs");
let input = fs.readFileSync("bfs_1.txt").toString().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let visited = Array(100001).fill(0);

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

function bfs() {
  const queue = new Queue();
  queue.enqueue(n);
  while (queue.getLength() != 0) {
    const current = queue.dequeue();
    if (current == k) {
      return visited[current];
    }
    for (let next of [current - 1, current + 1, current * 2]) {
      if (next < 0 || next >= 100001) continue;
      if (visited[next] == 0) {
        visited[next] = visited[current] + 1;
        queue.enqueue(next);
      }
    }
  }
}

console.log(bfs());
