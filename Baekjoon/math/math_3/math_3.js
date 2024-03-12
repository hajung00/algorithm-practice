// 1978. 소수 찾기

// 🏷️ 문제
// 주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.

// 🏷️ 입력
// 첫 줄에 수의 개수 N이 주어진다. N은 100이하이다. 다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다.

// 🏷️ 출력
// 주어진 수들 중 소수의 개수를 출력한다.

// 🏷️ 예제 입출력

// 입력
// 4
// 1 3 5 7

// 출력
// 3

let fs = require("fs");
let input = fs.readFileSync("math_3.txt").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let answer = 0;

for (let i = 0; i < n; i++) {
  if (arr[i] == 1) continue;
  let x = [];
  for (let j = 1; j <= arr[i]; j++) {
    if (arr[i] % j == 0) x.push(j);
  }

  x.length == 2 ? answer++ : answer;
}

console.log(answer);
