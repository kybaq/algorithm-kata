function solution(s) {
    var answer = '';
    
    const wholeLen = s.length;
    
    for (let i = 0; i < wholeLen; i++) {
        let maximumStr = "";
        
        for (let j = 0; j < s.length; j++) {
            if (maximumStr < s[j]) {
                maximumStr = s[j];
            }
        }
        
        s = s.replace(maximumStr, "")
        
        answer += maximumStr;
    }
    
    return answer;
}