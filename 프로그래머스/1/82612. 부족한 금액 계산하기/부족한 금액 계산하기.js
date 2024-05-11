function solution(price, money, count) {
    var answer = -1;
    let tmp = 0;
    
    for (let i = 1; i <= count; i++) {
        tmp += price * i;
    }

    if (tmp > money) {
        answer = tmp - money;
    } else {
        answer = 0;
    }
    
    return answer;
}