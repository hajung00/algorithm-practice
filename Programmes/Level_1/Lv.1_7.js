//🔒 약수의 합

/* 문제 설명
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

제한 조건 
n은 0 이상 3000이하인 정수입니다.

입출력 예
n	return
12	28
5	6 */

// 🔑 My Solution 🔑
function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) answer += i;
  }
  return answer;
}

// test
console.log(solution(12));
// result 28

/* 1) 접근 방법
    1-1. 공백으로 분리 후 배열로 저장
    1-2. 각 문자의 길이만큼 실행시켜 짝수는 대문자, 홀수는 소문자로 변경 후 answer에 저장
    1-3. 맨 마지막빼고 띄어쓰기를 붙여준다. */

// 🔑 Other's Solutions 🔑
function solution(n) {
  var answer = 0;
  let i;
  for (i = 1; i <= Math.sqrt(n); i++) {
    if (!(n % i)) {
      answer += i + n / i;
    }
  }
  i--;
  return i === n / i ? answer - i : answer;
}

/* 1) 접근 방법
    - 계산량을 줄이기 위해 n까지 다 안하고, 아래 짝을 찾으면 위아래를 같이 더함.
        ex) 12면, 3을 찾앗을때 3+4를 해주는 방식 */

/* 2) 알게된 지식
     - Math.sqrt(double d): 사용하여 d의 제곱근 구해주는 내장함수 */
