\* 백트레킹 알고리즘(Backtracking Algorithm)

- 일반적으로 그래프/트리의 모든 원소를 완전 탐색하기 위한 목적으로 사용할 수 있다.
- DFS와의 차이점
  1. DFS는 일반적으로 완전 탐색 목적으로, 재귀 함수를 이용해 구현
  1. 백트래킹도 재귀 함수를 이용해 구현하는 것이 일반적이지만, 단순히 완전 탐색하는 것이 아니라 조건에 따라서 유망한 노드로 이동

\* 그래프 표현 방식
/ 1
2 ----- 4
\ 3 /

1. 인접 행렬
   0 1 0 0
   1 0 1 1
   0 1 0 1
   0 1 1 0

2. 인접 리스트
   1 -> 2
   2 -> 1, 3, 4
   3 -> 2, 4
   4 -> 2, 3

ex) N-Queen 문제

- N\*N 체스 보드 위에 퀸 N개가서로 공격할 수 없게 놓는 문제
- 놓여진 퀸 자리의 같은 행, 열, 대각선에 다음 퀸을 놓지 못한다.

방법: 이전까지 놓았던 퀸들과 상충되지 않는 조건을 만족하는 위치에 대해서만 재귀 함수를 호출

1. 퀸을 모두 놓지 않은 경우에
2. 현재 행에 존재하는 열을 하나씩 확인
3. 현재 위치에 놓을 수 없다면 무시
4. 현재 위치에 놓을 수 있으면 놓고 재귀함수 호출
5. 현재 위치에서 퀸 제거

\* N-Queen 코드 구현

```javascript
let n = 8;
let queens = [];

function possible(x, y) {
  for (let [a, b] of queens) {
    if (a == x || b == y) return false;
    if (Math.abs(a - x) == Math.abs(b - y)) return false;
  }
  return true;
}

let count = 0;
function dfs(row) {
  if (row === n) count += 1;
  for (let i = 0; i < n; i++) {
    if (!possible(row, i)) continue;
    queens.push([row, i]);
    dfs(row + 1);
    queens.pop();
  }
}
dfs(0);
console.log(count);
```
