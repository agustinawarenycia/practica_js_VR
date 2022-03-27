'use strict'
// Transformacion de textos
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript de Victor Robles";
var texto2 = "es muy buen curso";
var dato = numero.toString(); //Convierte en String
    dato = texto1.toLowerCase(); //Pasa a minusculas
    dato = texto2.toUpperCase(); //Pasa a mayusculas

console.log(dato);


// Calcular longitud
var nombre = "Víctor Robles";

console.log(nombre.length);


// Concatenar - Unir textos

var textoTotal = texto1.concat(" "+ texto2);

console.log(textoTotal);
                                    