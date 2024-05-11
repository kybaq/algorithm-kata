function solution(s) {
    var answer = true;
    
    if (s.length === 4 || s.length === 6) {
        for (let i = 0; i < s.length; i++) {
            if ('0' <= s[i] && s[i] <= '9') {
                answer = true;
            } else {
                answer = false;
                break;
            }
        }
    } else {
        answer = false;
    }
    
    return answer;
}