// 1987. 알파벳

// 🏷️ 문제
// 세로 R칸, 가로 C칸으로 된 표 모양의 보드가 있다. 보드의 각 칸에는 대문자 알파벳이 하나씩 적혀 있고, 좌측 상단 칸 (1행 1열) 에는 말이 놓여 있다.
// 말은 상하좌우로 인접한 네 칸 중의 한 칸으로 이동할 수 있는데, 새로 이동한 칸에 적혀 있는 알파벳은 지금까지 지나온 모든 칸에 적혀 있는 알파벳과는 달라야 한다. 즉, 같은 알파벳이 적힌 칸을 두 번 지날 수 없다.
// 좌측 상단에서 시작해서, 말이 최대한 몇 칸을 지날 수 있는지를 구하는 프로그램을 작성하시오. 말이 지나는 칸은 좌측 상단의 칸도 포함된다.

// 🏷️ 입력
// 첫째 줄에
// R과 C가 빈칸을 사이에 두고 주어진다. (1 ≤ R,C ≤ 20) 둘째 줄부터 R개의 줄에 걸쳐서 보드에 적혀 있는 C개의 대문자 알파벳들이 빈칸 없이 주어진다.

// 🏷️ 출력
// 첫째 줄에 말이 지날 수 있는 최대의 칸 수를 출력한다.

// 🏷️ 예제 입출력

// 입력
// 2 4
// CAAB
// ADCB

// 출력
// 3

let fs = require("fs");
let input = fs.readFileSync("backtracking_11.txt").toString().split("\n");

let [r, c] = input[0].split(" ").map(Number);
let answer = 0;
let seleted = new Array(26).fill(false);
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let str = [];
for (let i = 1; i <= r; i++) {
  str.push(input[i]);
}

seleted[str[0][0].charCodeAt() - 65] = true;

function dfs(depth, x, y) {
  answer = Math.max(answer, depth);
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue;
    if (seleted[str[nx][ny].charCodeAt() - 65]) continue;
    seleted[str[nx][ny].charCodeAt() - 65] = true;
    dfs(depth + 1, nx, ny);
    seleted[str[nx][ny].charCodeAt() - 65] = false;
  }
}

dfs(1, 0, 0);
console.log(answer);
