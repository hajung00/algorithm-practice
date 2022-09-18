//🔒 문자열 내 p와 y의 개수

/* 문제 설명
대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다

제한 조건 
문자열 s의 길이 : 50 이하의 자연수
문자열 s는 알파벳으로만 이루어져 있습니다.

입출력 예
s	answer
"pPoooyY"	true
"Pyy"	false */

// 🔑 My Solution 🔑
function solution(s) {
  let p = 0,
    y = 0;
  console.log(s.toUpperCase());
  let arr = s.toUpperCase().split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'P') p++;
    else if (arr[i] === 'Y') y++;
  }

  return p === y ? true : false;
}

// test
console.log(solution('pPoooyY'));
// result true

/* 1) 접근 방법
    1-1. toUpperCase()를 이용해 다 대문자로 변경
    1-2. 배열로 저장 후 p와 y의 개수를 구함
    1-3. p와 y가 같으면 true 아니면 false */

// 🔑 Other's Solutions 🔑
function numPY(s) {
  return (
    s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length
  );
}

/* 1) 접근 방법
    1-1. split(P)하면 P를 기준으로 split되기 때문에 P의 개수 +1
    1-2. split(P)하면 Y를 기준으로 split되기 때문에 Y의 개수 +1
    1-3. 두개가 같으면 true */
