function BracketCombinations(num) {
    let factorial = (n) => {
        var k = 1;
        for (var i = n; i >= 2; i--)
            k *= i;
        // end of the for in the factorial cicle
        return k;
    }; // end of factorial

    var up = (factorial(2 * num));
    var down = ((factorial(num + 1)) * (factorial(num)));
    var result = up / down;

    return result;
};

let combo = 0;
let answer = BracketCombinations(combo);
console.log(answer);