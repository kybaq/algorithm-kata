function solution(n)
{
    var answer = 0;
    
    numStr = String(n);

    for (let i = 0; i < numStr.length; i++) {
        answer += Number(numStr[i]);
    }

    return answer;
}