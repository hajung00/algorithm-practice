## 1. 넓이 우선 탐색(BFS)

- 그래프 혹은 트리에서 모든 노드를 한 번씩 탐색하기위한 기본적인 방법
- 완전 탐색을 수행하기 위해 사용할 수 있는 방법 중 하나
- 최단 거리를 탐색하기 위한 목적으로 사용할 수 있다.
- 큐 자료구조를 사용

> \*큐 자료구조
>
> - 먼저 들어온 데이터가 먼저 나가는 형식(선입선출)의 자료구조

## 2. 그래프의 표현

- javascript로 DFS와 같은 그래프 문제를 해결하기 위해서 그래프를 인접 리스트 표현 방식을 사용
  ![image](https://github.com/hajung00/Algorithm/assets/66300154/97b71bf3-6c64-4174-bf62-4725e46fccbe)

## 3. 넓이 우선 탐색(BFS) 기본 동작 방식

1. 시작 노드를 큐에 넣고 방문 처리한다.
2. 큐에서 원소를 꺼내어 방문하지 않은 인접 노드가 있는지 확인한다.
   case a. 있을 경우, 방문하지 않은 인접 노드를 큐에 삽입하고 방문 처리 한다.
3. 2번의 과정을 더 이상 반복할 수 없을 때까지 반복한다.

## 4. 넓이 우선 탐색(BFS) 사용 예시

1. 간선의 비용이 동일한 상황에서 [최단 거리] 문제를 해결하는 경우
2. 완전 탐색을 위해 사용한 DFS 솔루션이 메모리/시간 초과를 받아 BFS로 재시도하는 경우
   → DFS와 BFS 모두 그래프 탐색 목적으로 사용할 수 있으나, 구현이 익숙하다면 BFS를 추천한다.

- 코딩 테스트에서 DFS로 해결할 수 있는 문제는 BFS로도 해결할 수 있는 경우가 많다.
  → DFS는 일반적인 최단 거리 문제를 해결할 수 없다.

## 5. 큐 구현

```javascript
class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  // 큐에 삽입
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  // 큐에서 추출
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  // 현재 head가 가르키는 아이템
  peek() {
    return this.items[this.headIndex];
  }

  // 큐의 길이
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}
```

## 6. BFS 구현

```javascript
// 각 노드가 연결된 정보를 표현
graph = [[], [2, 3, 4], [1], [1, 5, 6], [1, 7], [3, 8], [3], [4], [5]];
// 각 노드가 방문된 정보를 표현
visited = Array(9).fill(false);
// 정의된 BFS 함수 호출
bfs(graph, 1, visited);

// BFS 메서드 정의
function bfs(graph, start, visited) {
  queue = new Queue();
  queue.enqueue(start);
  // 현재 노드를 방문 처리
  visited[start] = true;
  // 큐가 빌 때까지 반복
  while (queue.getLength() != 0) {
    // 큐에서 하나의 원소를 뽑아 출력하기
    v = queue.dequeue();
    console.log(v);
    // 아직 방문하지 않은 인접한 원소들을 큐에 삽입
    for (i of graph[v]) {
      if (!visited[i]) {
        queue.enqueue(i);
        visited[i] = true;
      }
    }
  }
}
```
