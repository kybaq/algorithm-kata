function solution(arr) {
    var answer = [];
    
    let minimum = arr[0];
    
    for (let i = 0; i < arr.length; i++) {
        if (minimum > arr[i]) {
            minimum = arr[i];
        }
    }
    
    answer = arr.filter((elem) => {
        if (elem !== minimum) {
            return elem;
        }
    })
    
    if (arr.length === 1) {
        answer[0] = -1;
    }

    return answer;
}