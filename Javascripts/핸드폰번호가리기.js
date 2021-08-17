function solution(phone_number) {
    var answer = '';
    var str = '';

    //substring 앞, 뒤로 다쓸 수 있음?

    var starstr = phone_number.substring(0, phone_number.length-4)
    
    for(var i = 0; i < starstr.length; i++){
        str = str + '*';
    }
    answer = str + phone_number.substring(phone_number.length-4, phone_number.length)
    return answer;
}