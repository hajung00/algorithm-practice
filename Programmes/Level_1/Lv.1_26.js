//🔒 K번째 수

/* 문제 설명
배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
2에서 나온 배열의 3번째 숫자는 5입니다.
배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, 
commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한 조건 
array의 길이는 1 이상 100 이하입니다.
array의 각 원소는 1 이상 100 이하입니다.
commands의 길이는 1 이상 50 이하입니다.
commands의 각 원소는 길이가 3입니다.

입출력 예
array	commands	return
[1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]*/

// 🔑 My Solution 🔑
function solution(array, commands) {
  var answer = [];

  for (let i = 0; i < commands.length; i++) {
    let copy = [...array];
    let splice_array = copy.splice(
      commands[i][0] - 1,
      commands[i][1] - commands[i][0] + 1
    );
    splice_array.sort(function (a, b) {
      return a - b;
    });
    answer.push(splice_array[commands[i][2] - 1]);
  }

  return answer;
}

/* 1) 접근 방법
            1-1. array를 commands의 인덱스 0,1값을 이용해 자른다.(n부터 k까지 숫자 개수는 n-k+1)
            1-2. sort를 이용해 오름차순 정렬한다.
            1-3. commands의 인덱스 2번째 요소의 값을 이용해 해당 번째 숫자를 answer배열에 push  */

// test
console.log(solution([1, 5, 2, 6, 3, 7, 4][([2, 5, 3], [4, 4, 1], [1, 7, 3])]));
// result [5, 6, 3]

// 🔑 Other's Solutions 🔑
function solution(array, commands) {
  return commands.map((command) => {
    const [sPosition, ePosition, position] = command;
    const newArray = array
      .filter(
        (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
      )
      .sort((a, b) => a - b);

    return newArray[position - 1];
  });
}

/* 1) 접근 방법
            - 구조분해할당으로 command의 요소를 각 변수에 저장
            - filter로 n부터 k까지 필터하고 sort로 오름차순 정렬
      */
