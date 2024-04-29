function solution(n) {
    var answer = n;
    
    for (let x = n; x > 0; x--) {
        if (n % x === 1 && answer > x) {
            answer = x;
        }
    }
    return answer;
}