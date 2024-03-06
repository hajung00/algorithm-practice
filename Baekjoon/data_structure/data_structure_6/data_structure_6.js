// 10845. 큐

// 🏷️ 문제
// 정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

// 명령은 총 여섯 가지이다.

// push X: 정수 X를 큐에 넣는 연산이다.
// pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 큐에 들어있는 정수의 개수를 출력한다.
// empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
// front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

// 🏷️ 입력
// 첫째 줄에 주어지는 명령의 수 N (1 ≤ N ≤ 10,000)이 주어진다. 둘째 줄부터 N개의 줄에는 명령이 하나씩 주어진다. 주어지는 정수는 1보다 크거나 같고, 100,000보다 작거나 같다. 문제에 나와있지 않은 명령이 주어지는 경우는 없다.

// 🏷️ 출력
// 출력해야하는 명령이 주어질 때마다, 한 줄에 하나씩 출력한다.

// 🏷️ 예제 입출력

// 입력
// 15
// push 1
// push 2
// front
// back
// size
// empty
// pop
// pop
// pop
// size
// empty
// pop
// push 3
// empty
// front

// 출력
// 1
// 2
// 2
// 0
// 1
// 2
// -1
// 0
// 1
// -1
// 0
// 3

let fs = require("fs");
let input = fs.readFileSync("data_structure_6.txt").toString().split("\n");

class Queue {
  constructor() {
    this.item = [];
    this.start = 0;
    this.end = 0;
  }
  push(item) {
    this.item[this.end] = item;
    this.end++;
  }
  pop() {
    const item = this.item[this.start];
    if (item) {
      delete this.item[this.start];
      this.start++;
    }
    return item ? item : -1;
  }
  size() {
    return this.end - this.start;
  }
  empty() {
    return this.start === this.end ? 1 : 0;
  }
  front() {
    return this.start !== this.end ? this.item[this.start] : -1;
  }
  back() {
    return this.start !== this.end ? this.item[this.end - 1] : -1;
  }
}

let queue = new Queue();
let n = Number(input[0]);
let answer = [];
for (let i = 1; i <= n; i++) {
  let type = input[i].split(" ")[0].trim();
  if (type == "push") {
    let data = Number(input[i].split(" ")[1]);
    queue[type](data);
  } else {
    answer.push(queue[type]());
  }
}
console.log(answer.join("\n"));
