window.cipher = {
  // ...
  encode: (offset, string) => {
    let textEncode = '';
    let equation;
    // Loop por cada uno de los elementos del string
    for (i = 0; i < string.length; i++) {
      // Volver letra a numero 
      let numberPosition = string[i].charCodeAt();
      // Validando que el numero ASCII este en el rango de las letras mayusculas
      if (numberPosition >= 65 && numberPosition <= 90) {
        equation = ((numberPosition - 65) + parseInt(offset)) % 26 + 65;
        // Validando que el numero ASCII este en el rango de las letras misculas

      } else if (numberPosition >= 97 && numberPosition <= 122) {
        equation = ((numberPosition - 97) + parseInt(offset)) % 26 + 97;

      } else {
        equation = numberPosition;
      }
      textEncode = textEncode + String.fromCharCode(equation);
    }
    return textEncode;
  },

  decode: (offset, string) => {
    let textEncode = '';
    let equation;
    // Loop por cada uno de los elementos del string
    for (i = 0; i < string.length; i++) {
      // Volver letra a numero 
      let numberPosition = string[i].charCodeAt();
      // Validando que el numero ASCII este en el rango de las letras mayusculas
      if (numberPosition >= 65 && numberPosition <= 90) {
        equation = ((numberPosition - 90) - parseInt(offset)) % 26 + 90;
        // Validando que el numero ASCII este en el rango de las letras misculas

      } else if (numberPosition >= 97 && numberPosition <= 122) {
        equation = ((numberPosition - 122) - parseInt(offset)) % 26 + 122;

      } else {
        equation = numberPosition;
      }
      textEncode = textEncode + String.fromCharCode(equation);
    }
    return textEncode;
  },

  createCipherWithOffset: () => { },
};
