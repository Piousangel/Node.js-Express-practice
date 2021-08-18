function solution(arr) {
    //아니 자동 캐스팅 되니까 사긴데,,

    var answer = 0;
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    answer = sum / arr.length
    return answer;
}