function solution(a, b) {
    var answer = 0;
    
    let smaller = 0;
    let larger = 0;
    
    if (a > b) {
        larger = a;
        smaller = b;
    } else {
        larger = b;
        smaller = a;
    }
    
    for (let i = smaller; i <= larger; i++) {
        answer += i;
    }
    
    return answer;
}