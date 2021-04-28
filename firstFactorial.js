function factorial(number) {
    var aux=1;
    for (i = 1; i <= number; i++) {
        aux = (i * number);
    }

    return aux;
};
var entero = 10;
var numero = factorial(entero);
console.log(numero);

