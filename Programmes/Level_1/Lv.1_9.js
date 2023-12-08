//🔒 수박수박수박수박수박수?

/* 문제 설명
길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 
예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

제한 조건 
n은 길이 10,000이하인 자연수입니다.

입출력 예
3	"수박수"
4	"수박수박" */

// 🔑 My Solution 🔑
function solution(n) {
  let a = Array(n).fill('수');
  for (let i = 0; i < a.length; i++) {
    if (i % 2 !== 0) a[i] = '박';
  }
  return a.join('');
}

// test
console.log(solution(3));
// result "수박수"

/* 1) 접근 방법
    1-1. n의 수의 길이를 가지고 '수'로 초기화된 배열 생성
    1-2. 인덱스가 홀수번째면 "박"으로 변경 */

/* 2) 필요한 지식 
    - Array.fill(value[, start[, end]]) 
    매개변수(parameter)
    1. value : 배열을 채울 값
    2. start (Optional) : 시작 인덱스, 기본 값은 0
    3. end (Optional) : 끝 인덱스, 기본 값은 this length*/

// 🔑 Other's Solutions 🔑
const waterMelon = (n) => {
  return '수박'.repeat(n / 2) + (n % 2 === 1 ? '수' : '');
};

/* 1) 접근 방법
    - repeat(n/2)해주면 짝수일 땐 원하는 개수 만큼, 홀수일땐  +로 "수" 붙여줌. */
