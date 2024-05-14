function solution(n, m) {
    var answer = [];
    
    let lg = n > m ? n : m;
    let sm = n < m ? n : m;
    let r = lg % sm;
    
    while (r !== 0) {
        lg = sm;
        sm = r;
        r = lg % sm;
    }

    answer.push(sm);
    
    let lcm = (n * m) / sm;
    
    answer.push(lcm);
    
    return answer;
}