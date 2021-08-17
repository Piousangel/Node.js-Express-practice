function solution(x, n) {
    var answer = [];
    
    for(let i=0; i < n ; i++){
        answer[i] = x * (i+1);
    }
    
    return answer;
}

// Array.prototype.fill( )
// - fill( ) : 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채움.

// Array.prototype.map( )
//  - map( ) : 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환.

// 다차원배열 만들기
// var data = Array(25).fill(null).map(function(x){ return Array()});
// //25 크기의 배열생성 후 fill( ) 함수로 null 로 초기화 후 map( ) 함수로 빈 배열로 선언해줌. 


// 다른사람풀이 1
// v는 기존의 x로 채워진 value값들, i는 말그대로 index번호가 적혀져있는거야..
function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
// 다른사람풀이 2
function solution(x, n) {
    return [...Array(n).keys()].map(v => (v + 1) * x);
}