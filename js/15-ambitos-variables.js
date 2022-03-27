'use strict'
function holaMundo(texto){
    var hola_mundo = "Texto dentro de función";
    console.log(texto);
    console.log(numero);
    console.log(hola_mundo);
}

var numero = 12;
var texto = "Hola mundo soy una variable global";
holaMundo(texto);
                                I
console.log(hola_mundo); //Esta variable no puede accederse ya que es una variable de la funcion holaMundo

//Si quiero pasar una variable de un nuemro a un string, usar el toString()
//Por ej  console.log(numero.toString());