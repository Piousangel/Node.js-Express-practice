function solution(arr1, arr2) {
    
    //자바스크립트 2차원 배열 만드는법...

    var answer = new Array(arr1.length)
    
    //var answer = Array.from(Array(arr1.length), () => new Array(arr1[0].length))
    //이것도 숙지합시당...

    for(var i=0; i < answer.length; i++){
        answer[i] = new Array(arr1[0].length)
    }
    
    for(var i =0; i < answer.length; i++){
        for(var j=0; j < answer[0].length; j++){
            answer[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    
    return answer;
}