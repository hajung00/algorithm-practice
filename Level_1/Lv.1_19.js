//🔒 약수의 개수와 덧셈

/* 문제 설명
두 정수 left와 right가 매개변수로 주어집니다. 
left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

제한 조건 
1 ≤ left ≤ right ≤ 1,000

입출력 예
left	right	result
13	17	43
24	27	52 */

// 🔑 My Solution 🔑
function solution(left, right) {
  var answer = 0;
  var count = 0;

  for (left; left <= right; left++) {
    for (let i = 1; i <= left; i++) {
      left % i === 0 ? ++count : '';
    }
    count % 2 === 0 ? (answer += left) : (answer -= left);
    count = 0;
  }
  return answer;
}

// test
console.log(solution(13, 17));
// result 43

/* 1) 접근 방법
    1-1. for문으로 left가 right가 될때까지 돌면서 해당 수의 약수일 경우 ++count
    1-2. count가 짝수일 경우, answer에 해당 수를 더해줌
    1-3. count가 홀수일 경우, asnwer에 해당 수를 빼줌 하나의 수가 끝나면 count 0으로 setting */

// 🔑 Other's Solutions 🔑
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

/* 1) 접근 방법
    - 제곱근이 정수면 홀수  */

/* 2) 알게된 지식
    - 제곱근이 정수면 홀수
    - Number.isInteger(value): 주어진 값이 정수인지 판별하는 함수
    매개변수(parameter)
    1. value: 정수인지 확인하려는 값. */
