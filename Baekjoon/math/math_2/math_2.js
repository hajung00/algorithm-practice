// 1934. 최소공배수

// 🏷️ 문제
// 두 자연수 A와 B에 대해서, A의 배수이면서 B의 배수인 자연수를 A와 B의 공배수라고 한다. 이런 공배수 중에서 가장 작은 수를 최소공배수라고 한다. 예를 들어, 6과 15의 공배수는 30, 60, 90등이 있으며, 최소 공배수는 30이다.
// 두 자연수 A와 B가 주어졌을 때, A와 B의 최소공배수를 구하는 프로그램을 작성하시오.

// 🏷️ 입력
// 첫째 줄에 테스트 케이스의 개수 T(1 ≤ T ≤ 1,000)가 주어진다. 둘째 줄부터 T개의 줄에 걸쳐서 A와 B가 주어진다. (1 ≤ A, B ≤ 45,000)

// 🏷️ 출력
// 첫째 줄부터 T개의 줄에 A와 B의 최소공배수를 입력받은 순서대로 한 줄에 하나씩 출력한다.

// 🏷️ 예제 입출력

// 입력
// 3
// 1 45000
// 6 10
// 13 17

// 출력
// 45000
// 30
// 221

let fs = require("fs");
let input = fs.readFileSync("math_2.txt").toString().split("\n");

let testCase = Number(input[0]);
for (let i = 1; i <= testCase; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  console.log((a * b) / gcd(a, b));
}

function gcd(a, b) {
  let min = a > b ? b : a;
  let x = 1;
  for (let i = min; i > 0; i--) {
    if (a % i == 0 && b % i == 0) {
      x = i;
      break;
    }
  }
  return x;
}
