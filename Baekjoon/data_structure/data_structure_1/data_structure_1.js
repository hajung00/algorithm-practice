// 10828. 스택

// 🏷️ 문제
// 정수를 저장하는 스택을 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.

// 명령은 총 다섯 가지이다.

// push X: 정수 X를 스택에 넣는 연산이다.
// pop: 스택에서 가장 위에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 스택에 들어있는 정수의 개수를 출력한다.
// empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
// top: 스택의 가장 위에 있는 정수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.

// 🏷️ 입력
// 첫째 줄에 주어지는 명령의 수 N (1 ≤ N ≤ 10,000)이 주어진다. 둘째 줄부터 N개의 줄에는 명령이 하나씩 주어진다. 주어지는 정수는 1보다 크거나 같고, 100,000보다 작거나 같다. 문제에 나와있지 않은 명령이 주어지는 경우는 없다.

// 🏷️ 출력
// 출력해야하는 명령이 주어질 때마다, 한 줄에 하나씩 출력한다.

// 🏷️ 예제 입출력

// 입력
// 14
// push 1
// push 2
// top
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
// top

// 출력
// 2
// 2
// 0
// 2
// 1
// -1
// 0
// 1
// -1
// 0
// 3

let fs = require("fs");
let input = fs.readFileSync("data_structure_1.txt").toString().split("\n");

let n = Number(input[0]);

class Stack {
  constructor() {
    this.item = [];
  }
  push(item) {
    this.item.push(item);
  }
  pop() {
    return this.item.length !== 0 ? this.item.pop() : -1;
  }
  size() {
    return this.item.length;
  }
  empty() {
    return this.item.length == 0 ? 1 : 0;
  }
  top() {
    return this.item.length !== 0 ? this.item[this.item.length - 1] : -1;
  }
}

const stack = new Stack();
let answer = [];

for (let i = 1; i <= n; i++) {
  let type = input[i].split(" ")[0];
  if (type == "push") {
    let data = Number(input[i].split(" ")[1]);
    stack.push(data);
  } else if (type.trim() == "pop") {
    answer.push(stack.pop());
  } else if (type.trim() == "size") {
    answer.push(stack.size());
  } else if (type.trim() == "empty") {
    answer.push(stack.empty());
  } else if (type.trim() == "top") {
    answer.push(stack.top());
  }
}

console.log(answer.join("\n"));

// console.log()는 오래걸리니까 answer에 모아놨다가 한번만 출력!
