// 1929. 소수 구하기

// 🏷️ 문제
// M이상 N이하의 소수를 모두 출력하는 프로그램을 작성하시오.

// 🏷️ 입력
// 첫째 줄에 자연수 M과 N이 빈 칸을 사이에 두고 주어진다. (1 ≤ M ≤ N ≤ 1,000,000) M이상 N이하의 소수가 하나 이상 있는 입력만 주어진다.

// 🏷️ 출력
// 한 줄에 하나씩, 증가하는 순서대로 소수를 출력한다.

// 🏷️ 예제 입출력

// 입력
// 3 16

// 출력
// 3
// 5
// 7
// 11
// 13

let fs = require("fs");
let input = fs.readFileSync("math_4.txt").toString().split("\n");

let [m, n] = input[0].split(" ").map(Number);

for (let i = m; i <= n; i++) {
  if (check(i)) console.log(i);
}

function check(a) {
  for (let i = 2; i <= Math.sqrt(a); i++) {
    if (a % i == 0) return false;
  }
  return true;
}
