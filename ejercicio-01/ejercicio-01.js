function isValidCard(creditCardNumber) {
    // Escribe tu código aquí
var pares;
var impares;

if (typeof creditCardNumber == "string") {
  return "Error de dato"
} else if (typeof creditCardNumber == "boolean") {
  return "Error de dato"
} else if (typeof creditCardNumber == "object") {
  return "Error de dato"
} else if (typeof creditCardNumber != "number") {
  return "Ingresa un numero"
} else if (creditCardNumber.toString().length < 16) {
  return "Faltan numeros"
}

var stringNumber = creditCardNumber.toString();
stringNumber.filter(function(num){

  return
});

}
// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
