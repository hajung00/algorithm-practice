//🔒 두 개 뽑아서 더하기

/* 문제 설명
정수 배열 numbers가 주어집니다. 
numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

제한 조건 
numbers의 길이는 2 이상 100 이하입니다.
numbers의 모든 수는 0 이상 100 이하입니다.

입출력 예
numbers	result
[2,1,3,4,1]	[2,3,4,5,6,7]
[5,0,2,7]	[2,5,7,9,12] */

// 🔑 My Solution 🔑
function solution(numbers) {
  var answer = [];
  const array = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      array.push(numbers[i] + numbers[j]);
    }
  }

  answer = [...new Set(array)];
  return answer.sort((a, b) => a - b);
}

// test
console.log(solution([2, 1, 3, 4, 1]));
// result [2, 3, 4, 5, 6, 7]

/* 1) 접근 방법
      1-1. numbers의 첫번째+두번째, 첫번째+세번째, 첫번째+네번째, ... , 첫번째+numbers의 마지막 값
      1-2. numbers의 두번째+세번째, 두번째+네번째, ... , 첫번째+numbers의 마지막 값
      1-3. 위의 과정 반복 
      1-4. Set으로 중복 제거
      1-5. sort를 사용해 오름차순으로 정렬 */

// 🔑 Other's Solutions 🔑
function solution(numbers) {
  var answer = [];
  numbers = numbers.sort();
  for (var i = 0; i < numbers.length; i++) {
    for (var k = i + 1; k < numbers.length; k++) {
      if (!answer.includes(numbers[i] + numbers[k])) {
        answer.push(numbers[i] + numbers[k]);
      }
    }
  }
  answer = answer.sort(function (a, b) {
    return a - b;
  });
  return answer;
}

/* 1) 접근 방법
      - Set으로 중복을 제거하는 대신 includes를 이용해 answer에 포함되어있지 않으면 추가
*/
