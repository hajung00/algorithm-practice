//🔒 소수 찾기

/* 문제 설명
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

제한 조건 
n은 2이상 1000000이하의 자연수입니다.

입출력 예
n	result
10	4
5	3 */

// 🔑 My Solution 🔑
function solution(n) {
  var answer = 0;
  let count = 0;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    if (count === 2) {
      answer++;
    }
    count = 0;
  }
  return answer;
}

/* 1) 접근 방법
          1-1. 2~n까지 숫자 하나씩 1부터 해당 숫자까지 나누어 떨어지는것이 딱 2개면 소수로 판별 */

//❗문제점: 효율성 테스트 통과 X
//🔑 해결 방법: 어떤 자연수 n이 있을 때, √n 보다 작은 모든 소수들로 나누어 떨어지지 않으면 n은 소수

//💡 해결
function solution(n) {
  var answer = 1;

  // 2~n까지 숫자 하나하나 소수인지 판별
  for (let i = 3; i <= n; i++) {
    // 숫자 하나가 소수인지 판별
    let count = 0;
    for (let j = 2; j * j <= i; j++) {
      // 소수가 아니면 count = 1
      if (i % j === 0) {
        ++count;
        break;
      }
    }
    if (count === 0) answer++;
  }
  return answer;
}

// test
console.log(solution(10));
// result 4

// 🔑 Other's Solutions 🔑
function solution(n) {
  const s = new Set();
  for (let i = 1; i <= n; i += 2) {
    s.add(i);
  }
  s.delete(1);
  s.add(2);
  for (let j = 3; j < Math.sqrt(n); j++) {
    if (s.has(j)) {
      for (let k = j * 2; k <= n; k += j) {
        s.delete(k);
      }
    }
  }
  return s.size;
}

/* 1) 접근 방법
          - s에 2포함 n까지의 홀수를 넣음
          - n의 제곱근까지 계산하고 s에 소수가 아닌 값이 있으면 delete(if문안에 들어가는 j는 다 홀수이며 홀수*짝수면 소수가 아니고, 홀수+홀수 또한 소수가 아님)
    */
