function solution(n) {
    var answer = 0;
    
    for(let i = 1; i ** 2 <= n; i++) {
        if (n === i * i) {
            answer = (i + 1) ** 2; 
        } else {
            answer = -1;
        }
    }
    return answer;
}