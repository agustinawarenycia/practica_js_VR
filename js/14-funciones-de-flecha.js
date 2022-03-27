'use strict'
// Funciones de flecha
//Agregamos el parametro primero y despues una flecha "=>"
//Forma de acortar y no tener que escribir function

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar = numero1 + numero2;
    sumaYmuestra(sumar);
    sumaPorDos (sumar);

    return sumar;
}

sumame(5, 7, dato =>{
    console.log("La suma es:", dato);},
dato =>{
    console.log("La suma por dos es:", (dato*2));
});