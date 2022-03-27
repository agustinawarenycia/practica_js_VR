'use strict'
// Transformacion de textos
var numero = 444;
var texto1 = "Bienvenido al curso de JavaScript de Victor Robles";
var texto2 = "es muy buen curso";
               
               
var busqueda = texto1.indexOf("curso"); //Busca desde qué num de caracter comienza esa palabra 
var busqueda = texto1.search("curso"); //Lo mismo que indexOf
var busqueda = texto1.lastIndexOf("curso"); //Busca desde qué caract la ultima aparicion de la palabra

console.log(busqueda);

//******************************************************************************


// Transformacion de textos
var numero = 444;
var texto1 = "Bienvenido al curso de Javascript curso de Victor Robles";
var texto2 = "es muy buen curso";
var busqueda = texto1.replace("JavaScript", "Symfony"); //Reemplaza la primer palabra por la segunda
var busqueda = texto1.slice(14,22); //Recorta el texto de ambas partes
var busqueda = texto1.split(); //Mete en un array
var busqueda = texto1.split(" "); //Mete en un array y separa las palabras
/*Ejemplo de salida

(9) ["Bienvenido", "al", "curso", "de", "Javascript", "curso", "de", "Victor", "Robles"]
 e: "Bienvenido"
  1: "al"
  2: "curso"
  3: "de"
  4: "Javascript"
  5: "curso"
  6: "de"
*/
var busqueda = texto1.trim();//Saca los espacios en blanco delante y detras del string
console.log(busqueda);