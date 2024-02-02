// 16953. A → B

// 🏷️ 문제
// 정수 A를 B로 바꾸려고 한다. 가능한 연산은 다음과 같은 두 가지이다.
// 2를 곱한다.
// 1을 수의 가장 오른쪽에 추가한다.
// A를 B로 바꾸는데 필요한 연산의 최솟값을 구해보자.

// 🏷️ 입력
// 첫째 줄에 A, B (1 ≤ A < B ≤ 109)가 주어진다.

// 🏷️ 출력
// A를 B로 바꾸는데 필요한 연산의 최솟값에 1을 더한 값을 출력한다. 만들 수 없는 경우에는 -1을 출력한다.

// 🏷️ 예제 입출력

// 입력
// 2 162

// 출력
// 5

let fs = require("fs");
let input = fs.readFileSync("bfs_10.txt").toString().split("\n");

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

let [a, b] = input[0].split(" ").map(Number);
let check = false;
let visited = new Set();
const queue = new Queue();
queue.enqueue([a, 1]);
visited.add(a);

while (queue.getLength() !== 0) {
  const [cur, count] = queue.dequeue();
  if (cur > 1e9) continue;
  if (cur === b) {
    console.log(count);
    check = true;
    break;
  }
  for (let next of [cur * 2, Number(cur.toString() + 1)]) {
    if (!visited.has(next)) {
      queue.enqueue([next, count + 1]);
      visited.add(next);
    }
  }
}

if (!check) console.log(-1);
