function solution(x, n) {
    var answer = [];
    
    const gap = x;
    
    for (let i = 0; i < n; i ++) {
        answer.push(x)
        
        x += gap;
    }
    
    return answer;
}