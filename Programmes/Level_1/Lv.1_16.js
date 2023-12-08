//🔒 음양 더하기

/* 문제 설명
어떤 정수들이 있습니다. 
이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 
실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

제한 조건 
absolutes의 길이는 1 이상 1,000 이하입니다.
absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
signs의 길이는 absolutes의 길이와 같습니다.
signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.

입출력 예
absolutes	signs	result
[4,7,12]	[true,false,true]	9
[1,2,3]	[false,false,true]	0 */

// 🔑 My Solution 🔑
function solution(absolutes, signs) {
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] == false) {
      absolutes[i] = absolutes[i] * -1;
    }
  }
  const result = absolutes.reduce((arr, i) => arr + i);
  return result;
}

// test
console.log(solution([4, 7, 12][(true, false, true)]));
// result 9

/* 1) 접근 방법
     1-1. signs가 true일때, absolutes그대로, false일때, -붙이기
     1-2. 새롭게 반환된 absolutes배열값 reduce로 다 더하기 */

// 🔑 Other's Solutions 🔑
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}

/* 1) 접근 방법
    - 위와 동일 */
