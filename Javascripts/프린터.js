function solution(priorities, location) {
    var answer = 0;
    var cnt = 0;
    var myDoc = location;
    
    while(priorities.length > 0){
        var c = priorities.shift()
        
        if(priorities.filter((e) => e > c).length > 0){
            priorities.push(c)
        }
        else{
            cnt++
            if(myDoc == 0){
                return answer = cnt
            }
        }
        myDoc--
    
    if(myDoc === -1){
        myDoc = priorities.length -1
    }
    }
    
    return answer;
}