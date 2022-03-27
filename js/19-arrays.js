'use strict'

//Arrays, arreglos, matrices

var nombre ="Agustina Warenycia";
var nombres = ["Agustina", "Nahuel", "Juan", "Luis", "Maria"];
var lenguajes = new Array ("PHP", "JS", "Java");

console.log(nombres);
//para acceder a un elemento en especifico
console.log(nombres[3]);


console.log(nombres.length);
/*
var elemento = parseInt(prompt("que elemento quieres?:",0));

if(elemento>=nombres.length){
    alert("Introduce el numero menor que " + nombres.length);
}else{
    alert("El nombre seleccionado es: " + nombres[elemento]);
}


alert(nombres[elemento]);
*/
/*

/*******************FOR NORMAL********************* */
document.write("<h1>Lenguajes de Programacion 2022 </h1>");
document.write("<ul>");

for(var i = 0; i<lenguajes.length;i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}

document.write("</ul>");




//********************CON FOREACH************************** */
nombres.forEach(function(elemento,a){
       console.log(elemento,a);}
)


//********************CON FOREACH************************** */
nombres.forEach((elemento)=>{
    console.log(elemento);}
)
/*******************FOR IN********************************** */
for (let lenguaje in lenguajes)
    document.krite("<li>"+lenguajes[lenguaje]+"</li>");





//************************ */
//Recorrer un Array
/*
let frutas = ["Manzana", "Banana", "Ciruela", "Manzana"];
//El indice al lado significa el indice donde se encuentra ese array, puede ir con cualquier nombre
frutas.forEach(function(elemento, indice, array) {
    console.log(elemento, indice);
})
// Manzana 0
// Banana 1
*/