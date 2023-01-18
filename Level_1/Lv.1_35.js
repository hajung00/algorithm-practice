//🔒과일 장수

/* 문제 설명
k = 3, m = 4, 사과 7개의 점수가 [1, 2, 3, 1, 2, 3, 1]이라면, 다음과 같이 [2, 3, 2, 3]으로 구성된 사과 상자 1개를 만들어 판매하여 최대 이익을 얻을 수 있습니다.

(최저 사과 점수) x (한 상자에 담긴 사과 개수) x (상자의 개수) = 2 x 4 x 1 = 8
사과의 최대 점수 k, 한 상자에 들어가는 사과의 수 m, 사과들의 점수 score가 주어졌을 때, 과일 장수가 얻을 수 있는 최대 이익을 return하는 solution 함수를 완성해주세요.

제한 조건 
3 ≤ k ≤ 9
3 ≤ m ≤ 10
7 ≤ score의 길이 ≤ 1,000,000
1 ≤ score[i] ≤ k
이익이 발생하지 않는 경우에는 0을 return 해주세요.

입출력 예
k	m	score	result
3	4	[1, 2, 3, 1, 2, 3, 1]	8
4	3	[4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]	33
*/

// 🔑 My Solution 🔑
function solution(k, m, score) {
  var answer = 0;
  const boxcount = parseInt(score.length / m);

  for (let i = 0; i < boxcount; i++) {
    let box = [];
    for (let j = 0; j < m; j++) {
      box.push(...score.splice(score.indexOf(Math.max(...score)), 1));
    }
    answer += Math.min(...box) * m;
  }
  return answer;
}

/* 1) 접근 방법
                            1-1. 과일 박스 수를 구해서 그 박스에 큰 숫자부터 차례대로 넣는다. (score에서 가장 큰 수의 인덱스를 찾아 box에 push)
                            1-2. 과일 박스에서 제일 작은 수랑 한 상자에 담긴 사과 개수를 곱해 amswer에 계속 더해준다.. 
                                  */

//❗문제점: 테스트 케이스에서 시간 초과 발생
//🔑 해결 방법: 과일 박스를 오름 차순으로 정렬 후 pop헤주기

function solution(k, m, score) {
  var answer = 0;
  const boxcount = parseInt(score.length / m);
  const array = score.sort((a, b) => a - b);

  for (let i = 0; i < boxcount; i++) {
    let box = [];
    for (let j = 0; j < m; j++) {
      box.push(array.pop());
    }
    answer += Math.min(...box) * m;
  }

  return answer;
}

// test
console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
// result 8

// 🔑 Other's Solutions 🔑
function solution(k, m, score) {
  let answer = 0;
  const sortedScore = score
    .slice()
    .sort((a, b) => a - b)
    .slice(score.length % m);

  for (let i = 0; i < sortedScore.length; i += m) {
    answer += sortedScore[i] * m;
  }
  return answer;
}

/* 1) 접근 방법
                            - score를 오름차순으로 정렬한 후 slice(score.length % m)하여 나머지 사과는 버림.
                            - 오름차순으로 되어있기 때문에 i+=m하면 박스에서 가장 작은 수가 나옴.
                      */
