//🔒 최대공약수와 최소공배수

/* 문제 설명
두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 
배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

제한 조건 
두 수는 1이상 1000000이하의 자연수입니다.

입출력 예
n	m	return
3	12	[3, 12]
2	5	[1, 10] */

// 🔑 My Solution 🔑

/* 📖 사전 지식
- 유클리드 호제법
A와 B의 최대공약수를 구하기 위해서 A를 B로 나눈 나머지 R1을 구합니다.
B를 R1으로 나눈 나머지 R2를 구합니다.
R1을 R2로 나눈 나머지 R3를 구합니다.
이 과정을 계속 반복하여, 어느 한 쪽이 나누어떨어질 때까지 반복합니다. 이 직전 얻은 나머지가 최대공약수입니다. */

function solution(n, m) {
    var answer = [];
    let b = [m];
    
    if(n===m)
      return [n,n];

    else{
            b.push(n%m);
        for(let i =0; i<100 ; i++){
            if(b[i]%b[i+1] === 0)
            {answer.push(b[i+1],(n*m)/b[i+1])
             break;
            }
            else
              b.push(b[i]%b[i+1]);                   
        }       
    }

    return answer;

/*❗예외 케이스 n=12, m=3
     문제점: n%m에서 나누어 떨어지는 경우에도 유클리드 호제법 실시 */

    function solution(n, m) {
        var answer = [];
        let b = [m];
        
        if(n===m)
          return [n,n];
        
        else{
              b.push(n%m);
            for(let i =0; i<10000 ; i++){
                if(n%m!=0){
                if(b[i]%b[i+1] === 0)
                {answer.push(b[i+1],(n*m)/b[i+1])
                 console.log(b)
                 break;
                }
                else
                  b.push(b[i]%b[i+1]);  
                }
                else
                    return [m,n]
            }       
        return answer; 
        }
    }

/* 💡해결법: n%m에서 나누어 떨어지는 경우 유클리드 호제법 실시하지 않고 n과m 자리만 바꿔준다. */
  
// test
  console.log(solution(3, 12));
// result [ 12, 3 ]
  
/* 1) 접근 방법
    1-1. n과 m이 같지 않을 경우, n과 m을 나눈 나머지를 배열(b)에 저장해두고 b(i) % b(i+1)을 반복
    1-2. n과 m이 같을 경우, n과 m둘중 하나의 값 정해서 출력 */
  
  // 🔑 Other's Solutions 🔑
  function gcdlcm(a, b) {
    var r;
    for(var ab= a*b;r = a % b;a = b, b = r){}
    return [b, ab/b];
}
  