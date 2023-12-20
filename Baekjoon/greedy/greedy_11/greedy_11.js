// 9009. 피보나치

// 🏷️ 문제
// 피보나치 수 ƒK는 ƒK = ƒK-1 + ƒK-2로 정의되며 초기값은 ƒ0 = 0과 ƒ1 = 1 이다. 양의 정수는 하나 혹은 그 이상의 서로 다른 피보나치 수들의 합으로 나타낼 수 있다는 사실은 잘 알려져 있다.
// 하나의 양의 정수에 대한 피보나치 수들의 합은 여러 가지 형태가 있다. 예를 들어 정수 100은 ƒ4 + ƒ6 + ƒ11 = 3 + 8 + 89 또는 ƒ1 + ƒ3 + ƒ6 + ƒ11 = 1 + 2 + 8 + 89, 또는 ƒ4 + ƒ6 + ƒ9 + ƒ10 = 3 + 8 + 34 + 55 등으로 나타낼 수 있다. 이 문제는 하나의 양의 정수를 최소 개수의 서로 다른 피보나치 수들의 합으로 나타내는 것이다.
// 하나의 양의 정수가 주어질 때, 피보나치 수들의 합이 주어진 정수와 같게 되는 최소 개수의 서로 다른 피보나치 수들을 구하라.

// 🏷️ 입력
// 입력 데이터는 표준입력을 사용한다. 입력은 T 개의 테스트 데이터로 구성된다. 입력의 첫 번째 줄에는 테스트 데이터의 수를 나타내는 정수 T 가 주어진다.
// 각 테스트 데이터에는 하나의 정수 n이 주어진다. 단, 1 ≤ n ≤ 1,000,000,000.

// 🏷️ 출력
// 출력은 표준출력을 사용한다. 하나의 테스트 데이터에 대한 해를 하나의 줄에 출력한다.
// 각 테스트 데이터에 대해, 피보나치 수들의 합이 주어진 정수에 대해 같게 되는 최소수의 피보나치 수들을 증가하는 순서로 출력한다.

// 🏷️ 예제 입출력

// 입력
// 4
// 100
// 200
// 12345
// 1003

// 출력
// 3 8 89
// 1 55 144
// 1 34 377 987 10946
// 3 13 987

let fs = require("fs");
let input = fs.readFileSync("greedy_11.txt").toString().split("\n");
let pibo = [0, 1];

while (pibo[pibo.length - 1] < 1e9) {
  pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1]);
}

let n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  let arr = [];
  let idx = pibo.length - 1;
  let initData = input[i];
  while (idx > 0) {
    if (initData >= pibo[idx]) {
      arr.push(pibo[idx]);
      initData -= pibo[idx];
    }
    idx--;
  }
  arr.sort((a, b) => a - b);
  console.log(arr.join(" "));
}
