function solution(n) {
    var answer = 0;
    
    const divisor = new Array();
    
    for (let i = 0; 3 ** i <= n; i++) divisor.push(3 ** i);
    
    const ternary = new Array();
    
    let tmp = n;
    
    for (let j = divisor.length - 1; j >= 0; j--) {
        let cnt = 0;

        while (tmp >= divisor[j]) {
            tmp -= divisor[j];
            cnt++;
        }

        ternary.push(cnt);
    }
    
    for (let l = ternary.length - 1; l >= 0; l--) {
        if (ternary[l] !== 0) answer += (3 ** l) * ternary[l];
    }
    
    return answer;
}