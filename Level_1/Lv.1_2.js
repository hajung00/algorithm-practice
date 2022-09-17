//🔒 하샤드 수

/* 문제 설명
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 
예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 
자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

제한 조건 
x는 1 이상, 10000 이하인 정수입니다.

입출력 예
arr	return
10	true
12	true
11	false
13	false */

// 🔑 My Solution 🔑
function solution(x) {
  var answer = true;
  let x1 = String(x);
  let a = x1.split('');
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum = sum + Number(a[i]);
  }
  if (x % sum != 0) answer = false;
  return answer;
}

// test
console.log(solution(10));
// result true

/* 1) 접근 방법
  1-1. x를 문자열로 변환 후 각 자릿수를 a에 할당
  1-2. a를 숫자로 변환 후 a의 길이 만큼 for문을 통해 더한 값은 sum에 할당
  1-3. x가 sum으로 나누어 떨어지면 하샤드 수 이므로 true return */

/* 2) 필요한 지식 
  - String.split(separator,limit): 문자열을 분할하는 메서드
  매개변수(parameter)
  1. separator: 분할의 기준
  2. limit: 최대 분할 개수 */

// 🔑 Other's Solutions 🔑
function solution(n) {
  return !(
    n %
    (n + '').split('').reduce(function (i, sum) {
      return +sum + +i;
    })
  );
}

/* 1) 접근 방법
  1-1. n을 문자열로 변환 후 split하고 reduce로 누적해서 더해줌
  1-2. n을 최종적으로 나온 누적값으로 나눈 나머지가 0일 경우 true return  */

/* 2) 알게된 지식
    - Array.reduce(callback[, initialValue]): 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환
     매개변수(parameter)
     1. callback : 배열의 각 요소에 대해 실행할 함수. 다음 네 가지 인수를 가짐
        1-1. accumulator : 누산기. 콜백의 반환값을 누적. 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 initialValue를 제공한 경우에는 initialValue의 값임
        1-2. currentValue : 처리할 현재 요소
        1-3. currentIndex (Optional) : 처리할 현재 요소의 인덱스. initialValue를 제공한 경우 0, 아니면 1부터 시작
        1-4. array (Optional) : reduce()를 호출한 배열
    2. initialValue (Optional) : callback의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용. 빈 배열에서 초기값 없이 reduce()를 호출하면 오류 발생 */
