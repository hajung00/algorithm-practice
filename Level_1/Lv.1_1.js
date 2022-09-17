//🔒 핸드폰 번호 가리기

/* 문제 설명
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, 
solution을 완성해주세요.

제한 조건 
phone_number는 길이 4 이상, 20이하인 문자열입니다.

입출력 예
phone_number	return
"01033334444"	"*******4444"
"027778888"	"*****8888" */

// 🔑 My Solution 🔑
function solution(phone_number) {
  var answer = '';
  let back = phone_number.substr(-4, 4);
  let front = phone_number.substr(0, phone_number.length - 4);
  answer = front.replace(/[0-9]/g, '*') + back;
  return answer;
}

// test
console.log(solution('01033334444'));
// result "*******4444"

/* 1) 접근 방법
1-1. phone_number 뒷 4자리를 back에 할당
1-2. 나머지 phone_number은 '*'로 대체 */

/* 2) 필요한 지식 
- String.substr(start,length): 문자열에서 start부터 length만큼의 문자들을 반환하는 메서드
매개변수(parameter)
1. start: 문자열에서 추출을 시작하는 위치
2. length: 추출할 문자들의 총 개수( 생략된 경우 start부터 문자열의 끝까지 추출)

- String.replace(regexp|substr, newSubstr|function): 문자열 내에서 특정 문자를 다른 문자로 치환하는 메서드
매개변수(parameter)
1. regexp|substr: 정규식 객체 또는 문자열로 치환하기 위해 찾는 파라미터
2. newSubstr|function: 첫 번째 파라미터를 대신할 문자열 또는 메서드 */

// 🔑 Other's Solutions 🔑
function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, '*');
}

/* 1) 접근 방법
- 정규표현식 */

/* 2) 알게된 지식
- 정규표현식: 특정 패턴의 문자열을 찾기 위한 표현 방식
- 형식: /패턴/플래그
   ex) /[0-9]/g: '숫자 0-9'를 모두 찾는다.
   *플래그는 하나만 찾을지, 모두 다 찾을지 등을 설정하는 옵션(g: 모든 문자 검색) */
