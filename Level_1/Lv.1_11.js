//🔒 서울에서 김서방 찾기

/* 문제 설명
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

제한 조건 
s는 길이 1 이상, 길이 8 이하인 문자열입니다.
s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.

입출력 예
s	return
"a234"	false
"1234"	true */

// 🔑 My Solution 🔑
function solution(s) {
  let arr = s.split('');
  let count = 0;
  if (arr.length === 4 || arr.length === 6) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < 10; j++) {
        if (arr[i] * 1 === j) {
          count++;
          continue;
        }
      }
    }
  }
  return count === arr.length ? true : false;
}

// test
console.log(solution('a234'));
// result false

/* 1) 접근 방법
    1-1. 문자를 배열로 바꾼뒤, 길이가 4 or 6인지 확인
    1-2. 배열의 길이만큼 반복하면서 인덱스의 값이 0~9에 해당하는지 확인 후 count++
    1-3. count의 값이 배열이 길이와 같으면 모두 숫자인 경우이므로 true 아니면 false */

// 🔑 Other's Solutions 🔑
function alpha_string46(s) {
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}

/* 1) 접근 방법
    - 정규표현식 사용 */
