function longestWord(sen) {

    var v = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lng = '',
        lngn = 0,
        sentence = sen.split(' ');

    for (i = 0; i < sentence.length; i++) {
        var count = 0; 
        var s = '';
        for (j = 0; j < sentence[i].length; j++) {
            if (v.indexOf(sentence[i][j]) >= 0) {
                count++;
                s += sentence[i][j];
            }
        }

        if (count > lngn) {
            lngn = count;
            lng = s;
        }
    }

    return lng;

}// fin del metodo

let oracion = "the longest word";
let cuenta = longestWord(oracion);
console.log(cuenta);