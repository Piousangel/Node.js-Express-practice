function solution(x) {

    // for / of 기억합시다,,,,

    var answer = false;
    var str = String(x);   
    var sum = 0;
    
    //포문으로 string 돌려줄 때는 for / of 써야함...
    for(var i of str){
        sum += parseInt(i)
    }
    
    if(x % sum === 0){
        answer = true;
    }
    
    return answer;
}