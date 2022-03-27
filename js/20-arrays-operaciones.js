


var categorias = ['Acción', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino']; 
var cine = [categorias, peliculas]; //ARRAY MULTIDIMENSIONAL/MATRIZ

//RECORRIDO: el primer elije el array, el segundo elije el elemento del array seleccionado
// console.log(cine[0][1]);
// console.log(cine[1][2]);

var elemento = '';
  do{
    elemento = prompt("Introduce tu pelicula:");
    peliculas.push(elemento);
}while(elemento != "ACABAR");
//Como se agrega tmb "acabar", usamos un pop para eliminar el ultimo elemento

peliculas.pop();
console.log(peliculas);



var indice = peliculas.indexOf ('Gran torino');
if(indice > -1){
    //Indice=donde se encuentra el elemento 'Gran Torino'
    //1= es la cantidad de indices que quiero borrar a partir de indice
    peliculas.splice(indice, 1);
    console.log(peliculas);
}

var peliculas_string = peliculas.join(); //Une todos los elemento del array en 1

console.log(peliculas_string);

//PASAR DE STRING A ARRAY
var cadena = 'casa, sasa, lala'; //texto normal
var cadena_array = cadena.split(", "); //Pasa a array separando por , y espacio

// Busquedas por nombre
var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje== "PHP";
  });
            
  console.log(busqueda);

  // Busquedas por indice
var busqueda = lenguajes.findIndex(function(lenguaje){
    return lenguaje== "PHP";
  });
            
  console.log(busqueda);
