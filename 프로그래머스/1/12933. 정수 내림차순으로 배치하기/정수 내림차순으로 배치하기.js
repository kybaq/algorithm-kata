function solution(n) {
    var answer = 0;
    
    const n_str = String(n);
    
    let n_arr = Array.from(n_str);
    
    const newNum = [];
    
    for (let i = 0; i < n_str.length; i++) {
        let max = 0;
        
        for(let j = 0; j < n_arr.length; j++) {
            if (max < n_arr[j]) {
                max = n_arr[j];
            }
        }
        const maxIdx = n_arr.indexOf(max);
        
        n_arr.splice(maxIdx, 1);
        
        newNum.push(max);
    }
    
    let tmp = "";
    
    newNum.forEach((elem) => tmp += parseInt(elem));
    
    answer = Number(tmp);
    return answer;
}