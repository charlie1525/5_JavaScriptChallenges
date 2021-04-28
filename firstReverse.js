function firstReverse(str) {
    let normalizada = str.split('');
    normalizada.reverse();
    let res = normalizada.join('');

    return res;
};

let code = firstReverse("Adios");
console.log(code);