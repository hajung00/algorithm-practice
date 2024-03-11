// 17298. 오큰수

// 🏷️ 문제
// 크기가 N인 수열 A = A1, A2, ..., AN이 있다. 수열의 각 원소 Ai에 대해서 오큰수 NGE(i)를 구하려고 한다. Ai의 오큰수는 오른쪽에 있으면서 Ai보다 큰 수 중에서 가장 왼쪽에 있는 수를 의미한다. 그러한 수가 없는 경우에 오큰수는 -1이다
// 예를 들어, A = [3, 5, 2, 7]인 경우 NGE(1) = 5, NGE(2) = 7, NGE(3) = 7, NGE(4) = -1이다. A = [9, 5, 4, 8]인 경우에는 NGE(1) = -1, NGE(2) = 8, NGE(3) = 8, NGE(4) = -1이다.

// 🏷️ 입력
// 첫째 줄에 수열 A의 크기 N (1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄에 수열 A의 원소 A1, A2, ..., AN (1 ≤ Ai ≤ 1,000,000)이 주어진다.

// 🏷️ 출력
// 총 N개의 수 NGE(1), NGE(2), ..., NGE(N)을 공백으로 구분해 출력한다.

// 🏷️ 예제 입출력

// 입력
// 4
// 3 5 2 7

// 출력
// 5 7 7 -1

let fs = require("fs");
let input = fs.readFileSync("data_structure_12.txt").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let stack = []; // 값 지정이 안된 index 기록하는 stack이라고 생각하기
let answer = Array(n).fill(-1);
let max = Math.max(...arr);
let number = Array(max + 1).fill(0);

arr.forEach((val) => {
  number[val] = (number[val] || 0) + 1;
});

for (let i = 0; i < n; i++) {
  while (
    stack.length &&
    number[arr[stack[stack.length - 1]]] < number[arr[i]]
  ) {
    answer[stack.pop()] = arr[i];
  }
  stack.push(i);
}

console.log(answer.join(" "));
