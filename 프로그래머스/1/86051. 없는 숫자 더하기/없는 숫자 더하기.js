function solution(numbers) {
    var answer = 0;
    
    const tmp = []
    
    for (let i = 0; i <= 9; i++) {
        if (numbers.includes(i)) {
            tmp[i] = true;
        } else {
            tmp[i] = false
        }
    }
    
    for (let i = 0; i < tmp.length; i++) {
        if (!tmp[i]) {
            answer += i
        }
    }
    
    return answer;
}