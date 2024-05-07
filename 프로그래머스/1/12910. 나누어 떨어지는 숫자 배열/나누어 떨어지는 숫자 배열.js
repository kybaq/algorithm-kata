function solution(arr, divisor) {
    var answer = [];
    
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] % divisor === 0) {
            answer.push(arr[i]);
        }
    }
    
    if (answer.length === 0) {
        answer.push(-1);
        
    } else {
        for (let j = 0; j < answer.length; j++) {
            for (let k = 0; k < answer.length - 1; k++) {
                if (answer[k] > answer[k + 1]) {
                    let tmp = answer[k];
                    answer[k] = answer[k + 1];
                    answer[k + 1] = tmp;
                }
            }
        }
    }
    
    return answer;
}