function solution(num_list) {
    var answer = [];
    
    const last = num_list[(num_list.length - 1)];
    const beforeLast = num_list[(num_list.length - 2)]
    
    for (let i = 0; i < num_list.length; i++) {
        answer.push(num_list[i]);
    }
    
    if ( last > beforeLast ) {
     answer.push(last - beforeLast);   
    } else {
        answer.push(last * 2);
    }
    return answer;
}