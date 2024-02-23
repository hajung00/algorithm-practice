// 2325. 개코전쟁

// 🏷️ 문제
// “앙두레 강”이 개미와 코끼리 결혼식에서 기차를 아름답게 만드는 것을 실패했기 때문에 식장이 아수라장이 되고 결혼이 물거품이 되어버렸다. 급기야는 왕국 간에 분쟁으로 이어져 개미왕국은 코끼리왕국을 공격하기로 결정하였다. 동물나라 지도에서 개미왕국은 1번 정점에 위치해 있고 코끼리왕국은 N번 정점에 위치해 있다. 따라서 개미왕국이 1번 정점에서 N번 정점으로 공격을 하러 가는 상황이다. (개미왕국은 최단거리로 이동을 하게 되고, 코끼리왕국은 움직이지 않는다)
// “개미”와 “코끼리”의 앞 글자를 따서 이 전쟁은 “개코전쟁”으로 역사에 기억된다.
// “앙두레 강”은 자신 때문에 발생한 이 전쟁을 어떻게든 막으려고 한다. 협상을 할 시간을 벌기 위해 개미왕국이 코끼리왕국에 도착하는 시간을 최대한 늦추려고 한다. 그래서 “앙두레 강”은 사자왕국의 도움을 빌어 도로 중 딱 하나를 파괴하려고 하는데 어느 도로를 파괴해야 개미왕국이 최단거리로 가더라도 그 거리를 최대로 할 수 있을까?
// “앙두레 강”를 도와 1번 정점에서 N번 정점으로의 최단거리가 최대가 되도록 도로 하나를 파괴하도록 하자. (어떤 하나의 도로를 파괴하더라도 1번 정점에서 N번 정점으로 도달 가능하다)

// 🏷️ 입력
// 첫 줄에 N과 M이 입력된다. N은 정점의 개수이고 M은 도로의 수이다. (1 ≤ N ≤ 1000, 1 ≤ M ≤ N×(N-1)/2)
// 다음 줄부터 M개의 줄에 도로의 정보가 입력된다.
// i+1번째 줄에는 i번째 도로의 정보 xi yi zi가 입력되고 이 도로는 정점 xi와 정점 yi를 잇는 도로이며 지나는데 zi만큼의 시간이 걸린다는 것을 의미한다. 두 정점사이에는 두 개 이상의 길이 존재하지 않고 모든 도로는 양방향이며 한 도로를 파괴하는 것은 양방향의 길 모두를 파괴하는 것이다. (1 ≤ xi, yi ≤ N, 1 ≤ zi ≤ 1000)

// 🏷️ 출력
// 적당한 도로하나를 파괴했을 때 1번 정점에서 N번 정점으로의 최단거리의 최댓값을 출력한다.

// 🏷️ 예제 입출력

// 입력
// 5 6
// 1 2 4
// 1 3 3
// 2 3 1
// 2 4 4
// 2 5 7
// 4 5 1

// 출력
// 11

/**
 * Expose `PriorityQueue`.
 */
module.exports = PriorityQueue;

/**
 * Initializes a new empty `PriorityQueue` with the given `comparator(a, b)`
 * function, uses `.DEFAULT_COMPARATOR()` when no function is provided.
 *
 * The comparator function must return a positive number when `a > b`, 0 when
 * `a == b` and a negative number when `a < b`.
 *
 * @param {Function}
 * @return {PriorityQueue}
 * @api public
 */
function PriorityQueue(comparator) {
  this._comparator = comparator || PriorityQueue.DEFAULT_COMPARATOR;
  this._elements = [];
}

/**
 * Compares `a` and `b`, when `a > b` it returns a positive number, when
 * it returns 0 and when `a < b` it returns a negative number.
 *
 * @param {String|Number} a
 * @param {String|Number} b
 * @return {Number}
 * @api public
 */
PriorityQueue.DEFAULT_COMPARATOR = function (a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  } else {
    a = a.toString();
    b = b.toString();

    if (a == b) return 0;

    return a > b ? 1 : -1;
  }
};

/**
 * Returns whether the priority queue is empty or not.
 *
 * @return {Boolean}
 * @api public
 */
PriorityQueue.prototype.isEmpty = function () {
  return this.size() === 0;
};

/**
 * Peeks at the top element of the priority queue.
 *
 * @return {Object}
 * @throws {Error} when the queue is empty.
 * @api public
 */
PriorityQueue.prototype.peek = function () {
  if (this.isEmpty()) throw new Error("PriorityQueue is empty");

  return this._elements[0];
};

/**
 * Dequeues the top element of the priority queue.
 *
 * @return {Object}
 * @throws {Error} when the queue is empty.
 * @api public
 */
PriorityQueue.prototype.deq = function () {
  var first = this.peek();
  var last = this._elements.pop();
  var size = this.size();

  if (size === 0) return first;

  this._elements[0] = last;
  var current = 0;

  while (current < size) {
    var largest = current;
    var left = 2 * current + 1;
    var right = 2 * current + 2;

    if (left < size && this._compare(left, largest) >= 0) {
      largest = left;
    }

    if (right < size && this._compare(right, largest) >= 0) {
      largest = right;
    }

    if (largest === current) break;

    this._swap(largest, current);
    current = largest;
  }

  return first;
};

/**
 * Enqueues the `element` at the priority queue and returns its new size.
 *
 * @param {Object} element
 * @return {Number}
 * @api public
 */
PriorityQueue.prototype.enq = function (element) {
  var size = this._elements.push(element);
  var current = size - 1;

  while (current > 0) {
    var parent = Math.floor((current - 1) / 2);

    if (this._compare(current, parent) <= 0) break;

    this._swap(parent, current);
    current = parent;
  }

  return size;
};

/**
 * Returns the size of the priority queue.
 *
 * @return {Number}
 * @api public
 */
PriorityQueue.prototype.size = function () {
  return this._elements.length;
};

/**
 *  Iterates over queue elements
 *
 *  @param {Function} fn
 */
PriorityQueue.prototype.forEach = function (fn) {
  return this._elements.forEach(fn);
};

/**
 * Compares the values at position `a` and `b` in the priority queue using its
 * comparator function.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @api private
 */
PriorityQueue.prototype._compare = function (a, b) {
  return this._comparator(this._elements[a], this._elements[b]);
};

/**
 * Swaps the values at position `a` and `b` in the priority queue.
 *
 * @param {Number} a
 * @param {Number} b
 * @api private
 */
PriorityQueue.prototype._swap = function (a, b) {
  var aux = this._elements[a];
  this._elements[a] = this._elements[b];
  this._elements[b] = aux;
};

let fs = require("fs");
let input = fs.readFileSync("shortest_path_6.txt").toString().split("\n");

let INF = 1e9;
let [n, m] = input[0].split(" ").map(Number);
let graph = [];
for (let i = 0; i <= n; i++) graph.push([]);
for (let i = 1; i <= m; i++) {
  let [a, b, c] = input[i].split(" ").map(Number);
  graph[a].push([b, c]);
  graph[b].push([a, c]);
}

let distance = [Array(n + 1).fill(INF)];

function dijkstra(start) {
  let pq = new PriorityQueue((a, b) => b[0] - a[0]);
  pq.enq([0, start]);
  distance[start] = 0;
  while (pq.size() != 0) {
    let [dist, now] = pq.deq();
    if (distance[now] < dist) continue;
    for (let i of graph[now]) {
      let cost = dist + i[1];

      if (cost < distance[i[0]]) {
        distance[i[0]] = cost;
        pq.enq([cost, i[0]]);
      }
    }
  }
}

dijkstra(1);
