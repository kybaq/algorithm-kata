function solution(seoul) {
    var answer = '';
    
    let idx = 0;
    
    seoul.forEach((elem) => {
        if (elem === "Kim") {
            answer = `김서방은 ${idx}에 있다`;
        } else {
            idx += 1;
        }
    })
    return answer;
}