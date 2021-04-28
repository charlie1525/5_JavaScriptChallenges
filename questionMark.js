function question(str) {
    response = false;
    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length; j++) {
            if (Number(str[i]) + Number(str[j]) === 10) {
                response = true;
                if ((str.slice(i, j).split("?").length - 1 != 3)) {
                    return false;
                } //fin del if parale numero de "?"
            } // fin del if para tener la suma
        }
    }//fin del recorrido a la oración

    return response;
}; // fin del metodo
var quest = '9???1???9???1???9';
let ans = question(quest);
console.log(ans);