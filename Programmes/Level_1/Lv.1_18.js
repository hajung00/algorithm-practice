//🔒 부족한 금액 계산하기

/* 문제 설명
새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
단, 금액이 부족하지 않으면 0을 return 하세요.

제한 조건 
놀이기구의 이용료 price : 1 ≤ price ≤ 2,500, price는 자연수
처음 가지고 있던 금액 money : 1 ≤ money ≤ 1,000,000,000, money는 자연수
놀이기구의 이용 횟수 count : 1 ≤ count ≤ 2,500, count는 자연수

입출력 예
price	money	count	result
3	20	4	10 */

// 🔑 My Solution 🔑
function solution(price, money, count) {
  var answer = -1;
  let sum = 0;
  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }
  answer = money >= sum ? 0 : sum - money;
  return answer;
}

// test
console.log(solution(3, 20, 4));
// result 10

/* 1) 접근 방법
    1-1. 방문횟수(count)만큼 입장료(price)를 곱한 값을 모두 sum에 더해줌
    1-2. money가 sum보다 크거나 같을 경우, 0 아닐경우 차를 return */

// 🔑 Other's Solutions 🔑
function solution(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}

/* 1) 접근 방법
    - 가우스 공식: 1 ~ x까지의 합 n * (n + 1) / 2, 여기에 price배 만큼 곱해주는 거니까 (앞의 식) * price  */
