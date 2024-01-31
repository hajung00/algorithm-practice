// 5567. 결혼식

// 🏷️ 문제
// 상근이는 자신의 결혼식에 학교 동기 중 자신의 친구와 친구의 친구를 초대하기로 했다. 상근이의 동기는 모두 N명이고, 이 학생들의 학번은 모두 1부터 N까지이다. 상근이의 학번은 1이다.
// 상근이는 동기들의 친구 관계를 모두 조사한 리스트를 가지고 있다. 이 리스트를 바탕으로 결혼식에 초대할 사람의 수를 구하는 프로그램을 작성하시오.

// 🏷️ 입력
// 첫째 줄에 상근이의 동기의 수 n (2 ≤ n ≤ 500)이 주어진다. 둘째 줄에는 리스트의 길이 m (1 ≤ m ≤ 10000)이 주어진다.
// 다음 줄부터 m개 줄에는 친구 관계 ai bi가 주어진다. (1 ≤ ai < bi ≤ n) ai와 bi가 친구라는 뜻이며, bi와 ai도 친구관계이다.

// 🏷️ 출력
// 첫째 줄에 상근이의 결혼식에 초대하는 동기의 수를 출력한다.

// 🏷️ 예제 입출력

// 입력
// 6
// 5
// 1 2
// 1 3
// 3 4
// 2 3
// 4 5

// 출력
// 3

let fs = require("fs");
let input = fs.readFileSync("bfs_8.txt").toString().split("\n");

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
let m = Number(input[1]);
let graph = Array(n + 1);
let visited = Array(n + 1).fill(false);
let answer = 0;

for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 2; i <= m + 1; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

const queue = new Queue();
queue.enqueue([1, 0]);
visited[1] = true;

while (queue.getLength() !== 0) {
  let [node, distance] = queue.dequeue();
  if (distance == 2) {
    answer++;
  }
  for (let next of graph[node]) {
    if (!visited[next]) {
      queue.enqueue([next, distance + 1]);
      visited[next] = true;
    }
  }
}
console.log(answer + graph[1].length);
