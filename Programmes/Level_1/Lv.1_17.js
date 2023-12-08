//🔒 없는 숫자 더하기

/* 문제 설명
0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. 
numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

제한 조건 
1 ≤ numbers의 길이 ≤ 9
0 ≤ numbers의 모든 원소 ≤ 9
numbers의 모든 원소는 서로 다릅니다.

입출력 예
numbers	result
[1,2,3,4,6,7,8,0]	14
[5,8,4,0,6,7,9]	6 */

// 🔑 My Solution 🔑
function solution(numbers) {
  const sum = numbers.reduce((arr, i) => arr + i);
  const answer = sum === 45 ? '' : 45 - sum;
  return answer;
}

// test
console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
// result 14

/* 1) 접근 방법
    1-1. reduce로 numbers의 모든 배열 값을 더해 sum에 할당
    1-2. 0~9 모두 더한 값인 45와 비교해 다를 경우 45에서 sum을 뺀 값을 return */

// 🔑 Other's Solutions 🔑
function solution(numbers) {
  let answer = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) answer += i;
  }

  return answer;
}

/* 1) 접근 방법
    - 0~9까지의 숫자를 includes함수를 이용해 없을 경우 answer에 더해줌 */

/* 2) 알게된 지식
    - Array.includes(searchElement): 배열에 해당 값이 존재하는지 여부에 따라 true, false를 반환하는 함수
    매개변수(parameter)
    1. searchElement: 찾는 값 */
