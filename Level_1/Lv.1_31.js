//🔒모의고사

/* 문제 설명
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 
수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 
가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한 조건 
시험은 최대 10,000 문제로 구성되어있습니다.
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

입출력 예
answers	return
[1,2,3,4,5]	[1]
[1,3,2,4,2]	[1,2,3]*/

// 🔑 My Solution 🔑
function solution(answers) {
  var answer = [0, 0, 0];
  let person1 = [1, 2, 3, 4, 5];
  let person2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // 문제의 수만큼 person1, person2, person3 배열 늘려주기
  for (let i = 0; i < answers.length - 5; i++) {
    person1 = [...person1, person1[i]];
    person2 = [...person2, person2[i]];
    person3 = [...person3, person3[i]];
  }

  // 문제의 답과 각 person의 답과 같은지 비교 후 같으면 해당 인덱스에 +1
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === person1[i]) answer[0]++;
    if (answers[i] === person2[i]) answer[1]++;
    if (answers[i] === person3[i]) answer[2]++;
  }

  const scoreMax = Math.max(...answer);
  let count = [];

  // 최대로 맞힌 문제 개수와 같을 수가 있으면(동점) count에 person인덱스 넣기
  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === scoreMax) count.push(i + 1);
  }

  // 동점이 있을 경우 count return 아닐 경우, 최대 점수를 가지는 return
  if (count.length > 1) return count;
  else return [answer.indexOf(scoreMax) + 1];
}

/* 1) 접근 방법
                      1-1. 각 사람의 찍는 답을 배열로 저장 후, 문제의 개수만큼 반복해서 늘려줌
                      1-2. 각 사람마다 맞힌 개수를 센다
                      1-3. 최대 점수를 가지는 사람이 여러명일 경우를 계산
                      1-4. 여러명일 경우 -> 그 사람들의 인덱스 저장후 반환, 
                           한사람일 경우 -> 최고 점수를 가진 사람의 인덱스 반환 */

// test
console.log(solution([1, 2, 3, 4, 5]));
// result [1]

// 🔑 Other's Solutions 🔑
function solution(answers) {
  var answer = [];
  const man1 = [1, 2, 3, 4, 5];
  const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == man1[i % man1.length]) count[0]++;
    if (answers[i] == man2[i % man2.length]) count[1]++;
    if (answers[i] == man3[i % man3.length]) count[2]++;
  }

  const max = Math.max(count[0], count[1], count[2]);
  for (let i = 0; i < count.length; i++) {
    if (max == count[i]) answer.push(i + 1);
  }

  return answer;
}

/* 1) 접근 방법
                      - answers의 개수 만큼 배열에 더 추가하지 않고 돌아가면서 사용 => man1[i % man1.length]
                     
                */
