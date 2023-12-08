//🔒 제일 작은 수 제거하기

/* 문제 설명
함수 solution은 정수 n을 매개변수로 입력받습니다. 
n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 
예를들어 n이 118372면 873211을 리턴하면 됩니다.

제한 조건 
n은 1이상 8000000000 이하인 자연수입니다.

입출력 예
n	return
118372	873211 */

// 🔑 My Solution 🔑
function solution(n) {
  let n1 = String(n);
  return Number(n1.split('').sort().reverse().join(''));
}
// test
console.log(solution(118372));
// result 873211

/* 1) 접근 방법
    1-1. sort정렬하고 reverse사용하기
    1-2. 1번을 위해 정수n을 문자열로 변환후 split을 이용해 배열로 만들어줌
    1-3. 배열 정렬 후 정수로 변환 */

/* 2) 필요한 지식 
  - Math.floor(): 소수점 이하를 버림한다.
  - Array.sort(): 배열을 정렬한다.
    1. 기본적으로 오름차순으로 정렬
    2. 배열 요소를 문자열로 캐스팅하고 변환된 문자열을 비교하여 순서를 결정 */

/* 3) 알게된 점 
    var numbers = [1, 10, 2, 20, 3, 30];
    numbers.sort();
    console.log(numbers); // [1,10,2,20,3,30]
   ❗문제점: 숫자의 크기 순서대로 정렬이 되지 않음.
   💡위 문제를 해결하려면 비교 함수를 sort() 메서드에 전달해야 한다.
    비교함수: sort() 메서드의 비교 함수는 두 개의 인수를 전달받으며 정렬 순서를 결정하는 값을 반환
    - 오름차순
    var numbers = [1, 10, 2, 20, 3, 30];
    numbers.sort(function compare(a, b) {
     return a - b; // 내림차순은 b - a
    });
    console.log(numbers); // [30,20,10,3,2,1]
    return value > 0 이므로 a는 b 뒤에 온다. */

// 🔑 Other's Solutions 🔑
function solution(n) {
  var nums = [];
  do {
    nums.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return nums.sort((a, b) => b - a).join('') * 1;
}

/* 1) 접근 방법 
      1-1. n을 일의 자리부터 nums에 저장(몫이 0보다 클 때까지)
      1-2. nums를 내림차순으로 sort 정렬후 *1해서 숫자로 변환 */
