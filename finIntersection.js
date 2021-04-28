function findInter(arr) {
    var arr1 = arr[0].split(", ");
    var arr2 = arr[1].split(", ");
    var result = [];
    
    for (i = 0; i < arr1.length; i++) {
      var aux1 = arr1[i];
      for (j = 0; j < arr2.length; j++) {
        var aux2 = arr2[j];
        if (aux1 === aux2) {
          result.push(aux1);
          break;
        }// fin de la comparacion de los digitos 
      }
    } // fin del ciclo para ambos arreglos
    
    if (result.length === 0) 
        return false;
    else
        return result.join(",");
};


let array = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];
let answer = findInter(array);
console.log(answer);