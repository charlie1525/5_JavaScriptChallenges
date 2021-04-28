function CodelandUsernameValidation(str) { 
    var result = 'false';
    var long = str.length;
    var validation1 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRTSUVWXYZ';
    var validation2 = '0123456789_';
  
    var firstC = str.charAt(0);
    var lastC = str.charAt(str.length - 1);
  
    if ((long < 4) || (long > 25)) {
      //console.log('please be sure that the user it´s between 4 and 25 characters')
      return result;
    }
    if (firstC.includes(validation2)) {
      //console.log('please start with a letter')
      return result;
    }; // end of the comprobation of the fisrt character
  
    if (lastC.includes('_')) {
      //console.log('please end with other character')
      return result;
    }; // end of the comprobation of the last character
  
    if (str.includes(validation1)) {
      //console.log('check taht the user have letters');
      return result
    } // end of the if that evaluates the content of the user string
  
    if (str.includes(validation2)){
      return result;
    //console.log('check the user have number and an underscore');
    }
  
    result = 'true';
    return result;
  
}

let user = '123abc444';
let valdiation = CodelandUsernameValidation(user);
console.log(valdiation);