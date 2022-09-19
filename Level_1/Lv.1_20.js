//🔒 같은 숫자는 싫어

/* 문제 설명
배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 
예를 들면,
arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

제한 조건 
배열 arr의 크기 : 1,000,000 이하의 자연수
배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수

입출력 예
[1,1,3,3,0,1,1]	[1,3,0,1]
[4,4,4,3,3]	[4,3] */

// 🔑 My Solution 🔑
function solution(arr) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) answer.push(arr[i]);
    continue;
  }
  return answer;
}
// test
console.log(solution([1, 1, 3, 3, 0, 1, 1]));
// result [1,3,0,1]

/* 1) 접근 방법
    1-1. arr의 i번째 값과 그 다음값인 i+1의 값이 같지 않을 경우에만 answer에 i번째 값 push
    1-2. 같을 경우에는 continue로 다음이 실행되도록 */

// 🔑 Other's Solutions 🔑
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}

/* 1) 접근 방법
    - 현재값(val)와 다음값(arr[index+1])이 같지 않은 경우만 filter메소드로 걸러준다. */

/* 2) 알게된 지식
    - Array.filter(callbackFn, thisArg): 구현된 테스트를 통과하는 지정된 배열의 요소만 필터링하여 지정된 배열의 일부에 대한 얕은 복사본을 만든다.
    매개변수(parameter)
    1. callbackFn: 함수는 배열의 각 요소를 테스트하기 위한 술어
      1-1. element: 배열에서 처리 중인 현재 요소
      1-2. index: 배열에서 처리 중인 현재 요소의 인덱스
      1-3. array: 호출 된 배열
    2. thisArg: this실행할 때 사용할 값 callbackFn  */
