//🔒 이상한 문자 만들기

/* 문제 설명
문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

제한 조건 
문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

입출력 예
s	return
"try hello world"	"TrY HeLlO WoRlD" */

// 🔑 My Solution 🔑
function solution(s) {
  let a = s.split(' ');
  let answer = '';
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      if (j % 2 == 0) {
        answer += a[i][j].toUpperCase();
      } else {
        answer += a[i][j].toLowerCase();
      }
    }
    if (i + 1 < a.length) answer += ' ';
  }
  return answer;
}

// test
console.log(solution('try hello world'));
// result TrY HeLlO WoRlD

/* 1) 접근 방법
    1-1. 공백으로 분리 후 배열로 저장
    1-2. 각 문자의 길이만큼 실행시켜 짝수는 대문자, 홀수는 소문자로 변경 후 answer에 저장
    1-3. 맨 마지막빼고 띄어쓰기를 붙여준다. */

/* 2) 필요한 지식 
    - String.toUpperCase(): 문자열을 대문자로 변환하는 데 사용.
    - String.toLowerCase(): 문자열을 소문자로 변환하는 데 사용. */

// 🔑 Other's Solutions 🔑
function toWeirdCase(s) {
  return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
    return a[0].toUpperCase() + a[1].toLowerCase();
  });
}

/* 1) 접근 방법
    - 대문자로 다 변경 후 replace로 연속된 두 문자를 짝수번째는 대문자, 홀수번째는 소문자로 변경
