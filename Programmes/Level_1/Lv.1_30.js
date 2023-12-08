//🔒콜라 문제

/* 문제 설명
빈 병 a개를 가져다주면 콜라 b병을 주는 마트가 있을 때, 빈 병 n개를 가져다주면 몇 병을 받을 수 있는지 계산하는 문제입니다. 
기존 콜라 문제와 마찬가지로, 보유 중인 빈 병이 a개 미만이면, 추가적으로 빈 병을 받을 순 없습니다. 상빈이는 열심히 고심했지만, 일반화된 콜라 문제의 답을 찾을 수 없었습니다. 상빈이를 도와, 일반화된 콜라 문제를 해결하는 프로그램을 만들어 주세요.

제한 조건 
1 ≤ b < a ≤ n ≤ 1,000,000
정답은 항상 int 범위를 넘지 않게 주어집니다.

입출력 예
a	b	n	result
2	1	20	19
3	1	20	9*/

// 🔑 My Solution 🔑
function solution(a, b, n) {
  var answer = 0;

  while (n / a >= 1) {
    answer += parseInt(n / a) * b; // 받은 콜라의 수
    n = parseInt(n / a) * b + (n % a); // 현재 콜라의 수
    console.log(n, answer);
  }

  return answer;
}

/* 1) 접근 방법
                    1-1. 현재 콜라의 수: 받을 수 있는 콜라 + 나머지 콜라
                    1-2. 받은 콜라의 수: 받을 수 있는 콜라 
                    1-3. 현재 콜라의 수가 받을 수 있는 콜라로 나눌때 몫이 1미만일 경우까지 반복  */

// test
console.log(solution([2, 1, 20]));
// result 19

// 🔑 Other's Solutions 🔑
function solution(a, b, n) {
  var answer = getCola(a, b, n, 0);
  return answer;
}

function getCola(a, b, c, result) {
  const newCola = parseInt(c / a) * b;
  result += newCola;
  if (newCola > 1) return getCola(a, b, newCola + (c % a), result);
  else return parseInt(result);
}

/* 1) 접근 방법
                    - while 대신 재귀 사용
                    - newCola가 1일때까지 재귀로 getCola호출
                    - newCola가 1이하일 경우 빈병 계산한값 반환
              */
