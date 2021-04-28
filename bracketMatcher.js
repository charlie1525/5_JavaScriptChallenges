function BracketMatcher(str) {
    var answer = [];

    for (i = 0; i < str.length; i++) {
        if(str[i] == '('){
            answer.push('(')
        }//end of the first condition
        else if(str[i] == ')'){
            if(answer.length == 0)
                return 0;
            else
                answer.pop();
        };
    };

    return answer.length == 0 ? 1 : 0;
} //end of the function

let sentence = '(valid case))';
let answer = BracketMatcher(sentence);
console.log(answer);