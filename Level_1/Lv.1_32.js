//🔒크기가 작은 부분문자열

/* 문제 설명
숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서, 
이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.

제한 조건 
1 ≤ p의 길이 ≤ 18
p의 길이 ≤ t의 길이 ≤ 10,000
t와 p는 숫자로만 이루어진 문자열이며, 0으로 시작하지 않습니다.

입출력 예
t	p	result
"3141592"	"271"	2
"500220839878"	"7"	8
"10203"	"15"	3*/

// 🔑 My Solution 🔑
function solution(t, p) {
  var answer = 0;
  const array_p = [...p];

  for (let i = 0; i < [...t].length - array_p.length + 1; i++) {
    let copy = t.slice(i, array_p.length + i);
    copy <= parseInt(p) ? answer++ : answer;
  }

  return answer;
}

/* 1) 접근 방법
                      1-1. t문자열을 p의 길이만큼 자른다.
                      1-2. 자른값이 p보다 작거나 같으면 answer에 +1 
                            */

// test
console.log(solution('3141592', '271'));
// result 2

// 🔑 Other's Solutions 🔑
function solution(t, p) {
  let count = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    let value = t.slice(i, i + p.length);
    if (+p >= +value) count++;
  }
  return count;
}

/* 1) 접근 방법
                      - 문자열에도 length함수 사용가능!
                     
                */
