//🔒 제일 작은 수 제거하기

/* 문제 설명
정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 
단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

제한 조건 
arr은 길이 1 이상인 배열입니다.
인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

입출력 예
arr	return
[4,3,2,1]	[4,3,2]
[10]	[-1] */

// 🔑 My Solution 🔑
function solution(arr) {
  let min = arr[0];
  let minIndex = 0;

  if (arr.length === 1) return [-1];
  else {
    for (let i = 1; i < arr.length; i++) {
      if (min > arr[i]) {
        min = arr[i];
        minIndex = i;
      }
    }
    arr.splice(minIndex, 1);
    return arr;
  }
}

// test
console.log(solution([4, 3, 2, 1]));
// result [4,3,2]

/* 1) 접근 방법
    1-1. arr의 길이가 1일 경우 -1 return
    1-2. min에 arr첫번째 값을 넣고 for문으로 arr의 길이만큼 돌며 가장 작은 arr의 값을 찾음
    1-3. arr의 가장 작은 값을 min에 할당하고 그때의 인덱스 값을 minIndex에 할당
    1-4. splice로 해당 minIndex제거 */

// 🔑 Other's Solutions 🔑
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;
}

/* 1) 접근 방법
  - 위와 동일
  
  /* 2) 알게된 지식
  - Math.min() : 최솟값을 찾아주는 내장함수
        ex) Math.min(1,2,3,4,5) // result = 1
  - Array.indexOf(searchElement[, fromIndex]): 인자로 받은 값을 찾아 맞는 식별자 반환
    매개변수(parameter)
    searchElement: 찾으려는 값
    fromIndex: 검색을 시작할 index (입력하지 않으면 0부터 검색을 시작)
        ex) let arr = [1,2,3,4]
            arr.indexOf(2) // result = 1 */
