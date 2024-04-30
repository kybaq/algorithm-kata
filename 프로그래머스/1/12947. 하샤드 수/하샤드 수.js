function solution(x) {
    var answer = true;
    
    let x_str = String(x);
    let sum = 0;
    
    for (let i = 0; i < x_str.length; i++) {
        sum += Number(x_str[i]);
    }
    
    if (x % sum !== 0) {
        answer = false;
    } 
    
    return answer;
}