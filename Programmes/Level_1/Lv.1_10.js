//🔒 서울에서 김서방 찾기

/* 문제 설명
String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. 
seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

제한 조건 
seoul은 길이 1 이상, 1000 이하인 배열입니다.
seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
"Kim"은 반드시 seoul 안에 포함되어 있습니다.

입출력 예
seoul	return
["Jane", "Kim"]	"김서방은 1에 있다" */

// 🔑 My Solution 🔑
function solution(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] == 'Kim') {
      return '김서방은 ' + i + '에 있다';
      break;
    }
  }
}

// test
console.log(solution(['Jane', 'Kim']));
// result "김서방은 1에 있다"

/* 1) 접근 방법
    1-1. for문을 통해 배열 길이 만큼 실행
    1-2. 값이 Kim인 인덱스를 찾아 출력 */

// 🔑 Other's Solutions 🔑
function findKim(seoul) {
  var idx = seoul.indexOf('Kim');
  return '김서방은 ' + idx + '에 있다';
}

/* 1) 접근 방법
    - indexOf로 Kim의 인덱스를 찾는다 */
