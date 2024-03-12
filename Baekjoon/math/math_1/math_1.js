// 2609. 최대공약수와 최소공배수

// 🏷️ 문제
// 두 개의 자연수를 입력받아 최대 공약수와 최소 공배수를 출력하는 프로그램을 작성하시오.

// 🏷️ 입력
// 첫째 줄에는 두 개의 자연수가 주어진다. 이 둘은 10,000이하의 자연수이며 사이에 한 칸의 공백이 주어진다.

// 🏷️ 출력
// 첫째 줄에는 입력으로 주어진 두 수의 최대공약수를, 둘째 줄에는 입력으로 주어진 두 수의 최소 공배수를 출력한다.

// 🏷️ 예제 입출력

// 입력
// 24 18

// 출력
// 6
// 72

let fs = require("fs");
let input = fs.readFileSync("math_1.txt").toString().split("\n");

let [a, b] = input[0].split(" ").map(Number);
let min = a > b ? b : a;
let x = 0;

for (let i = min; i > 0; i--) {
  if (a % i == 0 && b % i == 0) {
    x = i;
    break;
  }
}
console.log(x);
console.log((a * b) / x);

// 최소공배수: 두 수의 곱 / 최대공약수
