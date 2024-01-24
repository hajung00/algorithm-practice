// 14395. 4연산

// 🏷️ 문제
// 정수 s가 주어진다. 정수 s의 값을 t로 바꾸는 최소 연산 횟수를 구하는 프로그램을 작성하시오.
// 사용할 수 있는 연산은 아래와 같다.

// s = s + s; (출력: +)
// s = s - s; (출력: -)
// s = s * s; (출력: *)
// s = s / s; (출력: /) (s가 0이 아닐때만 사용 가능)

// 🏷️ 입력
// 첫째 줄에 s와 t가 주어진다. (1 ≤ s, t ≤ 109)

// 🏷️ 출력
// 첫째 줄에 정수 s를 t로 바꾸는 방법을 출력한다. s와 t가 같은 경우에는 0을, 바꿀 수 없는 경우에는 -1을 출력한다. 가능한 방법이 여러 가지라면, 사전 순으로 앞서는 것을 출력한다.
// 연산의 아스키 코드 순서는 '*', '+', '-', '/' 이다.

// 🏷️ 예제 입출력

// 입력
// 7 392

// 출력
// +*+

let fs = require("fs");
let input = fs.readFileSync("bfs_4.txt").toString().split("\n");

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

let [s, t] = input[0].split(" ").map(Number);
let visited = new Set([s]);
let found = false;

const queue = new Queue();
queue.enqueue([s, ""]);

if (s == t) console.log(0);

while (queue.getLength() != 0) {
  const [value, oper] = queue.dequeue();
  if (value > 1e9) continue;
  if (value == t) {
    console.log(oper);
    found = true;
    break;
  }
  for (let y of ["*", "+", "-", "/"]) {
    let next = value;
    if (y == "*") next *= value;
    if (y == "+") next += value;
    if (y == "-") next -= value;
    if (y == "/" && value != 0) next = 1;
    if (!visited.has(next)) {
      queue.enqueue([next, oper + y]);
      visited.add(next);
    }
  }
}

if (!found) console.log(-1);
