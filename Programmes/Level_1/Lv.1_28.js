//🔒2016

/* 문제 설명
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 
두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 
요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT입니다. 
예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

제한 조건 
2016년은 윤년입니다.
2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

입출력 예
a	b	result
5	24	"TUE"*/

// 🔑 My Solution 🔑
function solution(a, b) {
  const day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let sum = 0;

  // 찾으려는 달 전까지
  for (let i = 0; i < a - 1; i++) {
    sum = sum + month[i];
  }

  sum += b;

  return day[(sum % 7) - 1];
}

/* 1) 접근 방법
                1-1. 찾으려는 달 전까지 요일을 다 더한다. 
                1-2. 나머지 요일을 더한다.
                1-3. 나누기 7했을 때, 나머지 만큼을 금요일(인덱스0)에서 더해준다  */

//❗문제점: 테스트 9,13 테스트 케이스 X => sum이 7일 경우 day[-1]로 접근
//🔑 해결 방법: sum에서 -1 해주고 나누기

function solution(a, b) {
  const day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let sum = 0;

  // 찾으려는 달 전까지
  for (let i = 0; i < a - 1; i++) {
    sum += month[i];
  }
  sum += b - 1;

  return day[sum % 7];
}

// test
console.log(solution(5, 24));
// result "TUE"

// 🔑 Other's Solutions 🔑
function getDayName(a, b) {
  var date = new Date(2016, a - 1, b);
  return date.toString().slice(0, 3).toUpperCase();
}

/* 1) 접근 방법
                - Date함수로 요일을 구하고 앞에 세글자를 대문자로 출력
          */
