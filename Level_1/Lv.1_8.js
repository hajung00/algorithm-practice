//🔒 시저 암호

/* 문제 설명
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 
예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 
문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

제한 조건 
공백은 아무리 밀어도 공백입니다.
s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
s의 길이는 8000이하입니다.
n은 1 이상, 25이하인 자연수입니다.

입출력 예
s	n	result
"AB"	1	"BC"
"z"	1	"a"
"a B z"	4	"e F d" */

// 🔑 My Solution 🔑
function solution(s, n) {
  let a = s.split('');
  let b = a.map((a1) => {
    if (
      (a1.charCodeAt(0) + n > 90 && a1.charCodeAt(0) <= 90) ||
      a1.charCodeAt(0) + n > 122
    )
      return a1.charCodeAt(0) + n - 26;
    if (a1 === ' ') return ' ';
    else return a1.charCodeAt(0) + n;
  });

  let c = b.map((b1) => {
    if (b1 === ' ') return ' ';
    else return String.fromCharCode(b1);
  });
  return c.join('');
}

// test
console.log(solution(12));
// result 28

/* 1) 접근 방법
    1-1. 문자열 배열로 저장 후 각각의 원소를 아스키코드로 변환 후 n만큼 더해줌.
    1-2. 더한 값이 문자를 넘어갈 경우, -26해서 순환하도록
    1-3. 공백은 그대로 공백으로 출력 
    1-4. 아스키코드를 다시 문자로 변환 후 출력 */

/* 2) 필요한 지식 
    - String.charCodeAt(index): 문자열 중 해당 index를 선택하여 아스키코드 번호로 변환해주는 함수
    - String.fromCodeAt(number): 아스키코드번호를 받아 문자열을 구성해주는 함수 */

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
    - 아스키코드 표 없이 대문자 소문자 저장 */
